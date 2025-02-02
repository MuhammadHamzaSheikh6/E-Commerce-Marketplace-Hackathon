"use client";

import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useLocalStorage } from '../context/CartContext'; // Import the shared context

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

interface CartItem {
  title: string;
  price: number;
  quantity: number;
}

interface FormData {
  firstName: string;
  lastName: string;
  companyName: string;
  country: string;
  streetAddress: string;
  city: string;
  province: string;
  zipCode: string;
  phone: string;
  emailAddress: string;
  additionalInformation: string;
  paymentMethod: string;
}

const CheckoutForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: 'http://localhost:3000/success',
        },
      });

      if (error) {
        setErrorMessage(error.message || 'An error occurred.');
      } else {
        onSuccess(); // Call the onSuccess callback to handle post-payment logic
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message || 'An error occurred.');
      } else {
        setErrorMessage('An unexpected error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button
        type="submit"
        disabled={!stripe || isLoading}
        className="w-full bg-black text-white py-2 rounded-md mt-4 hover:bg-gray-800 disabled:bg-gray-400"
      >
        {isLoading ? 'Processing...' : 'Pay Now'}
      </button>
      {errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>}
    </form>
  );
};

export default function Checkout() {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("cart", []); // Use shared context
  const [clientSecret, setClientSecret] = useState<string>('');
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    companyName: '',
    country: 'Sri Lanka',
    streetAddress: '',
    city: '',
    province: 'Western Province',
    zipCode: '',
    phone: '',
    emailAddress: '',
    additionalInformation: '',
    paymentMethod: 'bank',
  });

  // Fetch cart items from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (Array.isArray(storedCart)) {
      setCartItems(storedCart as CartItem[]);
    }
  }, []);

  // Create PaymentIntent on component mount
  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const response = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ amount: calculateSubtotal() }),
        });
        const { clientSecret } = await response.json();
        setClientSecret(clientSecret);
      } catch (error) {
        console.error('Error creating PaymentIntent:', error);
      }
    };

    if (cartItems.length > 0) {
      createPaymentIntent();
    }
  }, [cartItems]);

  const calculateSubtotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePaymentSuccess = () => {
    // Clear the cart from local storage and state
    localStorage.removeItem("cart");
    setCartItems([]);

    // Optional: Redirect to a success page
    window.location.href = "/success"; // Replace with your success page URL
  };

  const options = {
    clientSecret,
    appearance: {
      theme: 'stripe' as const,
    },
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full lg:h-[50vh] md:h-[30vh] h-[30vh] ">
        <Image
          src="/shop/banner11.png"
          alt="Bedroom Shop Banner"
          layout="fill"
          objectFit="cover"
          loading="lazy"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-gray-950">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Furniro Logo"
              width={32}
              height={20}
              className="w-12 h-8"
            />
          </Link>
          <h4 className="text-4xl font-bold">CheckOut</h4>
          <h5 className="flex items-center text-sm md:text-xl mb-4 space-x-1">
            <Link className="font-bold text-xl" href="/">
              Home
            </Link>
            <MdKeyboardArrowRight className="mt-2 text-2xl" />
            <span>CheckOut</span>
          </h5>
        </div>
      </div>
      <div className="w-full bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 lg:px-0">
          {/* Billing Details Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Billing details</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-600 mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-600 mb-1">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">
                  Country / Region
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                >
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Pakistan">Pakistan</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-600 mb-1">
                  Street Address
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Town / City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Province</label>
                <select
                  name="province"
                  value={formData.province}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                >
                  <option value="Western Province">Western Province</option>
                  <option value="Central Province">Central Province</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Zip Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">
                  Additional Information
                </label>
                <textarea
                  name="additionalInformation"
                  value={formData.additionalInformation}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  rows={4}
                />
              </div>
              </form>
          </div>

          {/* Order Summary Section */}
          <div className="space-y-6 border max-h-max border-gray-300 rounded-lg p-6 bg-white shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800">Your Order</h2>
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b pb-4"
                >
                  <div>
                    <h4 className="text-base font-medium text-gray-700">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {item.quantity} x Rs. {Number(item.price).toLocaleString()}
                    </p>
                  </div>
                  <p className="text-base font-bold text-gray-800">
                    Rs. {(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center text-lg font-bold text-gray-800">
              <span>Total</span>
              <span>Rs. {calculateSubtotal().toLocaleString()}</span>
            </div>
            <div className="mt-6">
              {clientSecret && (
                <Elements stripe={stripePromise} options={options}>
                  <CheckoutForm onSuccess={handlePaymentSuccess} />
                </Elements>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}