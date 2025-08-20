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

interface WelcomeEmailProps {
  firstName: string;
}

export default function WelcomeEmail({ firstName }: WelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Amplify Marketing - Your AI transformation journey starts here!</Preview>
      <Body style={main}>
        <Container style={container}>
          <div style={header}>
            <Heading style={h1}>Welcome to Amplify Marketing!</Heading>
          </div>
          
          <Section style={section}>
            <Text style={greeting}>Hi {firstName},</Text>
            
            <Text style={text}>
              Thank you for reaching out to Amplify Marketing! We're excited to help you transform 
              your marketing with the power of AI.
            </Text>

            <Text style={text}>
              We've received your inquiry and our team will review it carefully. You can expect 
              to hear from us within the next 24 hours with next steps tailored to your specific needs.
            </Text>

            <Hr style={hr} />

            <Section>
              <Heading as="h2" style={h2}>While You Wait, Explore Our Resources</Heading>
              
              <div style={resourceCard}>
                <Heading as="h3" style={h3}>📚 AI Marketing Transformation Guide</Heading>
                <Text style={cardText}>
                  Discover how leading companies are using AI to achieve 30-50% higher conversion rates.
                </Text>
                <Button style={secondaryButton} href="https://amplifymarketing.com/resources">
                  Download Guide
                </Button>
              </div>

              <div style={resourceCard}>
                <Heading as="h3" style={h3}>🎯 Success Stories</Heading>
                <Text style={cardText}>
                  See how we've helped companies achieve 2,847% average ROI improvement with AI-powered marketing.
                </Text>
                <Button style={secondaryButton} href="https://amplifymarketing.com/case-studies">
                  View Case Studies
                </Button>
              </div>

              <div style={resourceCard}>
                <Heading as="h3" style={h3}>🚀 Our Services</Heading>
                <Text style={cardText}>
                  Explore our comprehensive suite of AI-powered marketing services.
                </Text>
                <Button style={secondaryButton} href="https://amplifymarketing.com/services">
                  Learn More
                </Button>
              </div>
            </Section>

            <Hr style={hr} />

            <Section>
              <Heading as="h2" style={h2}>What Happens Next?</Heading>
              <ol style={list}>
                <li style={listItem}>
                  <strong>Review:</strong> Our team will review your submission and current marketing challenges
                </li>
                <li style={listItem}>
                  <strong>Personalized Response:</strong> We'll reach out with insights specific to your industry and goals
                </li>
                <li style={listItem}>
                  <strong>Strategy Call:</strong> If it's a good fit, we'll schedule a complimentary AI readiness assessment
                </li>
              </ol>
            </Section>

            <Section style={ctaSection}>
              <Text style={ctaText}>
                Can't wait? Book a 15-minute intro call right now:
              </Text>
              <Button style={button} href="https://amplifymarketing.com/book">
                Schedule Your Call
              </Button>
            </Section>

            <Text style={signature}>
              Looking forward to transforming your marketing together!<br /><br />
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
              <Link href="https://linkedin.com/company/amplify-marketing">LinkedIn</Link> •{' '}
              <Link href="https://twitter.com/amplifyai">Twitter</Link>
            </Text>
            <Text style={footerAddress}>
              © 2025 Amplify Marketing. All rights reserved.
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

const ctaSection = {
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
  padding: '24px',
  margin: '24px 0',
  textAlign: 'center' as const,
};

const h1 = {
  color: '#ffffff',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: 0,
};

const h2 = {
  color: '#333',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '24px 0 16px',
};

const h3 = {
  color: '#333',
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '0 0 8px',
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

const cardText = {
  fontSize: '14px',
  lineHeight: '20px',
  color: '#666',
  margin: '8px 0 16px',
};

const ctaText = {
  fontSize: '16px',
  color: '#333',
  marginBottom: '16px',
};

const resourceCard = {
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
  padding: '20px',
  marginBottom: '16px',
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
  marginBottom: '12px',
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

const secondaryButton = {
  backgroundColor: '#ffffff',
  borderRadius: '6px',
  border: '1px solid #8B5CF6',
  color: '#8B5CF6',
  fontSize: '14px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '8px 20px',
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
  fontWeight: 'bold',
};

const footerLinks = {
  fontSize: '12px',
  color: '#8B5CF6',
  textAlign: 'center' as const,
  margin: '0 0 8px',
};

const footerAddress = {
  fontSize: '10px',
  color: '#999',
  textAlign: 'center' as const,
  margin: 0,
};