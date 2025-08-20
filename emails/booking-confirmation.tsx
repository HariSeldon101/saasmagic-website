import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface BookingConfirmationEmailProps {
  name: string;
  date?: string;
  time?: string;
  meetingLink?: string;
}

export default function BookingConfirmationEmail({
  name,
  date,
  time,
  meetingLink,
}: BookingConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Your AI Marketing consultation is confirmed!</Preview>
      <Body style={main}>
        <Container style={container}>
          <div style={header}>
            <Heading style={h1}>Consultation Confirmed! 🎉</Heading>
          </div>
          
          <Section style={section}>
            <Text style={greeting}>Hi {name},</Text>
            
            <Text style={text}>
              Great news! Your AI Marketing consultation with Amplify Marketing has been confirmed.
            </Text>

            <div style={appointmentBox}>
              <Heading as="h2" style={h2}>📅 Appointment Details</Heading>
              {date && (
                <Text style={detailText}>
                  <strong>Date:</strong> {date}
                </Text>
              )}
              {time && (
                <Text style={detailText}>
                  <strong>Time:</strong> {time}
                </Text>
              )}
              <Text style={detailText}>
                <strong>Duration:</strong> 15 minutes
              </Text>
              <Text style={detailText}>
                <strong>Format:</strong> Video Call
              </Text>
            </div>

            {meetingLink && (
              <Section style={buttonSection}>
                <Button style={button} href={meetingLink}>
                  Join Meeting
                </Button>
                <Text style={smallText}>
                  Meeting link: <Link href={meetingLink}>{meetingLink}</Link>
                </Text>
              </Section>
            )}

            <Hr style={hr} />

            <Section>
              <Heading as="h2" style={h2}>What We'll Cover</Heading>
              <ul style={list}>
                <li style={listItem}>
                  <strong>Your AI Goals:</strong> Understanding what you want to achieve with AI in your marketing
                </li>
                <li style={listItem}>
                  <strong>Current Challenges:</strong> Identifying the bottlenecks holding back your growth
                </li>
                <li style={listItem}>
                  <strong>Our Approach:</strong> How Amplify Marketing can help transform your marketing with AI
                </li>
                <li style={listItem}>
                  <strong>Next Steps:</strong> Clear action items and timeline for your AI transformation
                </li>
              </ul>
            </Section>

            <Hr style={hr} />

            <Section>
              <Heading as="h2" style={h2}>How to Prepare</Heading>
              <Text style={text}>
                To make the most of our time together, consider:
              </Text>
              <ul style={list}>
                <li style={listItem}>Your top marketing challenges</li>
                <li style={listItem}>Current marketing tech stack and tools</li>
                <li style={listItem}>Growth goals for the next 12 months</li>
                <li style={listItem}>Any specific AI tools or strategies you're curious about</li>
              </ul>
            </Section>

            <Hr style={hr} />

            <Section>
              <Heading as="h2" style={h2}>Need to Reschedule?</Heading>
              <Text style={text}>
                Life happens! If you need to reschedule, please use the link in your calendar invite or{' '}
                <Link href="https://amplifymarketing.com/book">click here</Link> to pick a new time.
              </Text>
            </Section>

            <Text style={text}>
              Looking forward to speaking with you!
            </Text>
            
            <Text style={signature}>
              Best regards,<br />
              The Amplify Marketing Team
            </Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              Amplify Marketing - Where Marketing Strategy Meets AI Intelligence
            </Text>
            <Text style={footerLinks}>
              <Link href="https://amplifymarketing.com">Website</Link> •{' '}
              <Link href="https://amplifymarketing.com/resources">Resources</Link> •{' '}
              <Link href="https://amplifymarketing.com/services">Services</Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
  maxWidth: '600px',
};

const header = {
  background: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
  padding: '32px 48px',
  textAlign: 'center' as const,
};

const section = {
  padding: '32px 48px',
};

const buttonSection = {
  textAlign: 'center' as const,
  margin: '24px 0',
};

const h1 = {
  color: '#ffffff',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: 0,
};

const h2 = {
  color: '#333',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '24px 0 12px',
};

const greeting = {
  fontSize: '16px',
  lineHeight: '24px',
  color: '#333',
  marginBottom: '12px',
};

const text = {
  fontSize: '14px',
  lineHeight: '24px',
  color: '#333',
  margin: '12px 0',
};

const detailText = {
  fontSize: '14px',
  lineHeight: '20px',
  color: '#333',
  margin: '8px 0',
};

const smallText = {
  fontSize: '12px',
  color: '#666',
  marginTop: '8px',
};

const appointmentBox = {
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
  padding: '20px',
  margin: '20px 0',
  border: '1px solid #e9ecef',
};

const list = {
  paddingLeft: '20px',
  margin: '12px 0',
};

const listItem = {
  fontSize: '14px',
  lineHeight: '24px',
  color: '#333',
  marginBottom: '8px',
};

const button = {
  backgroundColor: '#8B5CF6',
  borderRadius: '6px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 32px',
};

const hr = {
  borderColor: '#e9ecef',
  margin: '24px 0',
};

const signature = {
  fontSize: '14px',
  lineHeight: '24px',
  color: '#333',
  marginTop: '24px',
};

const footer = {
  backgroundColor: '#f8f9fa',
  padding: '24px 48px',
  borderTop: '1px solid #e9ecef',
};

const footerText = {
  fontSize: '12px',
  color: '#666',
  textAlign: 'center' as const,
  margin: '0 0 8px',
};

const footerLinks = {
  fontSize: '12px',
  color: '#8B5CF6',
  textAlign: 'center' as const,
  margin: 0,
};