import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';
import ContactInquiryEmail from '@/emails/contact-inquiry';
import WelcomeEmail from '@/emails/welcome';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      firstName,
      lastName,
      email,
      company,
      website,
      phone,
      message,
      currentChallenges,
      monthlyRevenue,
      industry,
      aiExperience,
      goalTimeframe,
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !company || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send notification email to admin
    await sendEmail({
      to: process.env.ADMIN_EMAIL || 'hello@amplifymarketing.com',
      subject: `New Contact Inquiry from ${firstName} ${lastName} at ${company}`,
      react: ContactInquiryEmail({
        firstName,
        lastName,
        email,
        company,
        website,
        phone,
        message,
        currentChallenges,
        monthlyRevenue,
        industry,
      }),
      replyTo: email,
    });

    // Send welcome email to the user
    await sendEmail({
      to: email,
      subject: 'Welcome to Amplify Marketing - Your AI transformation journey starts here!',
      react: WelcomeEmail({ firstName }),
    });

    // Log the inquiry for tracking (you could save to database here)
    console.log('Contact inquiry received:', {
      name: `${firstName} ${lastName}`,
      email,
      company,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your inquiry. We\'ll be in touch within 24 hours!' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    // Return a user-friendly error message
    return NextResponse.json(
      { 
        error: 'There was an error processing your request. Please try again or email us directly at hello@amplifymarketing.com' 
      },
      { status: 500 }
    );
  }
}

// Optional: Add GET method to check API health
export async function GET() {
  return NextResponse.json(
    { status: 'Contact API is running' },
    { status: 200 }
  );
}