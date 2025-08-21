import { Resend } from 'resend';

// Initialize Resend with API key or dummy key for build time
const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key_for_build');

export interface EmailOptions {
  to: string | string[];
  subject: string;
  react?: React.ReactElement;
  text?: string;
  replyTo?: string;
}

export async function sendEmail({
  to,
  subject,
  react,
  text,
  replyTo,
}: EmailOptions) {
  try {
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Amplify Marketing <onboarding@resend.dev>',
      to,
      subject,
      react,
      text,
      replyTo: replyTo || process.env.RESEND_REPLY_TO,
    });

    if (error) {
      console.error('Resend error:', error);
      throw new Error(error.message);
    }

    return { success: true, data };
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
}

// Send contact form inquiry
export async function sendContactInquiry(formData: {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  website?: string;
  phone?: string;
  message: string;
  currentChallenges?: string;
}) {
  // Send notification to admin
  await sendEmail({
    to: process.env.ADMIN_EMAIL || 'hello@amplifymarketing.com',
    subject: `New Contact Inquiry from ${formData.firstName} ${formData.lastName}`,
    text: `
      New contact form submission:
      
      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Company: ${formData.company}
      Website: ${formData.website || 'Not provided'}
      Phone: ${formData.phone || 'Not provided'}
      
      Message:
      ${formData.message}
      
      Current Challenges:
      ${formData.currentChallenges || 'Not provided'}
    `,
    replyTo: formData.email,
  });

  // Send confirmation to user
  await sendEmail({
    to: formData.email,
    subject: 'Thank you for contacting SaaS Magic',
    text: `
      Hi ${formData.firstName},
      
      Thank you for reaching out to Amplify Marketing. We've received your inquiry and will get back to you within 24 hours.
      
      In the meantime, feel free to explore our resources at https://amplifymarketing.com/resources
      
      Best regards,
      The Amplify Marketing Team
    `,
  });
}

// Send booking confirmation
export async function sendBookingConfirmation(data: {
  name: string;
  email: string;
  date?: string;
  time?: string;
}) {
  await sendEmail({
    to: data.email,
    subject: 'Your consultation with Amplify Marketing is confirmed',
    text: `
      Hi ${data.name},
      
      Your AI Marketing consultation has been confirmed!
      
      ${data.date ? `Date: ${data.date}` : ''}
      ${data.time ? `Time: ${data.time}` : ''}
      
      We'll send you a calendar invite with the meeting link shortly.
      
      What to expect:
      - Discussion of your AI goals and challenges
      - Overview of our services and approach
      - Next steps and timeline discussion
      
      Looking forward to speaking with you!
      
      Best regards,
      The Amplify Marketing Team
    `,
  });
}