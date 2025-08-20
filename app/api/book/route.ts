import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';
import BookingConfirmationEmail from '@/emails/booking-confirmation';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      name,
      email,
      date,
      time,
      eventType,
      meetingLink,
    } = body;

    // Validate required fields
    if (!name || !email) {
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

    // Send confirmation email to the user
    await sendEmail({
      to: email,
      subject: 'Your AI Marketing consultation is confirmed!',
      react: BookingConfirmationEmail({
        name,
        date,
        time,
        meetingLink,
      }),
    });

    // Send notification to admin
    await sendEmail({
      to: process.env.ADMIN_EMAIL || 'hello@amplifymarketing.com',
      subject: `New consultation booked with ${name}`,
      text: `
        New consultation booking:
        
        Name: ${name}
        Email: ${email}
        Date: ${date || 'To be confirmed'}
        Time: ${time || 'To be confirmed'}
        Event Type: ${eventType || '15-minute intro call'}
        
        Please check your calendar for details.
      `,
      replyTo: email,
    });

    // Log the booking for tracking
    console.log('Booking confirmation sent:', {
      name,
      email,
      date,
      time,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Booking confirmed! Check your email for details.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Booking confirmation error:', error);
    
    return NextResponse.json(
      { 
        error: 'There was an error confirming your booking. Please check your email or contact us directly.' 
      },
      { status: 500 }
    );
  }
}

// Webhook endpoint for Calendly (if you set up webhooks)
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Handle Calendly webhook events
    const { event, payload } = body;
    
    if (event === 'invitee.created') {
      // Extract relevant information from Calendly payload
      const { 
        email, 
        name, 
        event: eventDetails,
        scheduled_event,
      } = payload;
      
      // Send confirmation email
      await sendEmail({
        to: email,
        subject: 'Your AI Marketing consultation is confirmed!',
        react: BookingConfirmationEmail({
          name: name,
          date: scheduled_event?.start_time ? new Date(scheduled_event.start_time).toLocaleDateString() : undefined,
          time: scheduled_event?.start_time ? new Date(scheduled_event.start_time).toLocaleTimeString() : undefined,
          meetingLink: scheduled_event?.location?.join_url,
        }),
      });
      
      console.log('Calendly webhook processed:', { event, name, email });
    }
    
    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Webhook processing error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

// GET method to check API health
export async function GET() {
  return NextResponse.json(
    { status: 'Booking API is running' },
    { status: 200 }
  );
}