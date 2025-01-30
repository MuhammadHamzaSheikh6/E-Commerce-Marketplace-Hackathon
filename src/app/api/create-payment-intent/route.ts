import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2023-10-16' as any, // Use a valid Stripe API version
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // ✅ Properly parse JSON request
    const { amount } = body;

    if (!amount || typeof amount !== 'number') {
      return NextResponse.json({ error: 'Invalid amount' }, { status: 400 });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert to cents
      currency: 'usd',
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret }, { status: 200 });
  } catch (error: any) {
    console.error('Stripe Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
