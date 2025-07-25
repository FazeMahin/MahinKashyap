import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
export const initEmailJS = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  console.log('EmailJS Public Key:', publicKey ? 'Found' : 'Not found');
  if (publicKey) {
    emailjs.init(publicKey);
    console.log('EmailJS initialized successfully');
  } else {
    console.error('EmailJS public key not found. Please check your environment variables.');
  }
};

// Send email function
export const sendEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  
  console.log('EmailJS Config Check:');
  console.log('Service ID:', serviceID ? 'Found' : 'Not found');
  console.log('Template ID:', templateID ? 'Found' : 'Not found');

  if (!serviceID || !templateID) {
    const errorMsg = 'EmailJS configuration is incomplete. Please check your environment variables.';
    console.error(errorMsg);
    throw new Error(errorMsg);
  }

  try {
    console.log('Attempting to send email with data:', {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      to_email: 'mahinditu@gmail.com'
    });

    const response = await emailjs.send(
      serviceID,
      templateID,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'mahinditu@gmail.com', // Your actual email
      }
    );

    console.log('Email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('Failed to send email. Detailed error:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
    }
    throw error;
  }
};
