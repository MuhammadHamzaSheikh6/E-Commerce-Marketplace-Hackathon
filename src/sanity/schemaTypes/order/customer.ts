export default {
  name: 'customer',
  title: 'Customer',
  type: 'document',
  fields: [
    {
      name: 'customerId',
      title: 'Customer ID',
      type: 'string',
      readOnly: true, // Prevent manual editing
    },
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    },
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
    },
    {
      name: 'country',
      title: 'Country',
      type: 'string',
    },
    {
      name: 'streetAddress',
      title: 'Street Address',
      type: 'string',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
    },
    {
      name: 'province',
      title: 'Province',
      type: 'string',
    },
    {
      name: 'zipCode',
      title: 'Zip Code',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'emailAddress',
      title: 'Email Address',
      type: 'string',
    },
    {
      name: 'additionalInformation',
      title: 'Additional Information',
      type: 'text',
    },
  ],
};

