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

interface ContactInquiryEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  website?: string;
  phone?: string;
  message: string;
  currentChallenges?: string;
  monthlyRevenue?: string;
  industry?: string;
}

export default function ContactInquiryEmail({
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
}: ContactInquiryEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact inquiry from {firstName} {lastName} at {company}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Inquiry</Heading>
          
          <Section style={section}>
            <Heading as="h2" style={h2}>Contact Information</Heading>
            <Text style={text}>
              <strong>Name:</strong> {firstName} {lastName}
            </Text>
            <Text style={text}>
              <strong>Email:</strong> <Link href={`mailto:${email}`}>{email}</Link>
            </Text>
            <Text style={text}>
              <strong>Company:</strong> {company}
            </Text>
            {website && (
              <Text style={text}>
                <strong>Website:</strong> <Link href={website}>{website}</Link>
              </Text>
            )}
            {phone && (
              <Text style={text}>
                <strong>Phone:</strong> {phone}
              </Text>
            )}
            {industry && (
              <Text style={text}>
                <strong>Industry:</strong> {industry}
              </Text>
            )}
            {monthlyRevenue && (
              <Text style={text}>
                <strong>Monthly Revenue:</strong> {monthlyRevenue}
              </Text>
            )}
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Heading as="h2" style={h2}>Message</Heading>
            <Text style={messageBox}>{message}</Text>
          </Section>

          {currentChallenges && (
            <>
              <Hr style={hr} />
              <Section style={section}>
                <Heading as="h2" style={h2}>Current Challenges</Heading>
                <Text style={messageBox}>{currentChallenges}</Text>
              </Section>
            </>
          )}

          <Hr style={hr} />

          <Section style={section}>
            <Button
              style={button}
              href={`mailto:${email}`}
            >
              Reply to {firstName}
            </Button>
          </Section>

          <Text style={footer}>
            This inquiry was submitted through the Amplify Marketing website.
          </Text>
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
  padding: '20px 0 48px',
  marginBottom: '64px',
  borderRadius: '5px',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
};

const section = {
  padding: '0 48px',
};

const h1 = {
  fontSize: '24px',
  fontWeight: 'bold',
  padding: '24px 48px',
  margin: 0,
  backgroundColor: '#8B5CF6',
  color: '#ffffff',
};

const h2 = {
  color: '#333',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '16px 0 8px',
};

const text = {
  color: '#333',
  fontSize: '14px',
  lineHeight: '24px',
  margin: '8px 0',
};

const messageBox = {
  backgroundColor: '#f4f4f5',
  borderRadius: '4px',
  padding: '12px',
  fontSize: '14px',
  lineHeight: '20px',
  color: '#333',
  whiteSpace: 'pre-wrap' as const,
};

const button = {
  backgroundColor: '#8B5CF6',
  borderRadius: '5px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '12px 20px',
  margin: '16px 0',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
  padding: '0 48px',
  marginTop: '24px',
};