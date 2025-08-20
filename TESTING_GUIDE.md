# Amplify Marketing - Testing Guide

## Setup Instructions

### 1. Environment Variables
Copy `.env.local.example` to `.env.local` and fill in your actual values:

```bash
cp .env.local.example .env.local
```

Required variables:
- `RESEND_API_KEY`: Get from https://resend.com/api-keys
- `RESEND_FROM_EMAIL`: Must be a verified domain in Resend
- `ADMIN_EMAIL`: Where admin notifications will be sent
- `NEXT_PUBLIC_CALENDLY_URL`: Your Calendly booking link

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

## Testing Checklist

### ✅ Navigation Testing
- [ ] Visit http://localhost:3000
- [ ] Check that "Book a Call" button appears in navigation
- [ ] Check that "Get Started" button appears in navigation
- [ ] Test both desktop and mobile navigation menus
- [ ] Verify all service page links work

### ✅ Contact Form Testing (/get-started)
1. Navigate to http://localhost:3000/get-started
2. Fill out the form with test data:
   - First Name: Test
   - Last Name: User
   - Email: test@example.com
   - Company: Test Company
   - Message: This is a test message
3. Submit the form
4. Verify:
   - [ ] Loading state appears during submission
   - [ ] Success message displays after submission
   - [ ] If Resend is configured, check emails are received:
     - Admin notification email
     - User welcome email

### ✅ Booking Page Testing (/book)
1. Navigate to http://localhost:3000/book
2. Verify:
   - [ ] Calendly widget loads (if NEXT_PUBLIC_CALENDLY_URL is set)
   - [ ] FAQ section displays correctly
   - [ ] Alternative contact methods are shown
   - [ ] "Open calendar in new window" link works

### ✅ API Endpoints Testing

#### Test Contact API
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "company": "Test Co",
    "message": "Test message"
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Thank you for your inquiry. We'll be in touch within 24 hours!"
}
```

#### Test Booking API
```bash
curl -X POST http://localhost:3000/api/book \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "date": "2025-01-20",
    "time": "10:00 AM"
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Booking confirmed! Check your email for details."
}
```

### ✅ Email Template Testing
If Resend is configured, you should receive:

1. **Contact Form Submission:**
   - Admin receives: Contact inquiry notification with all form details
   - User receives: Welcome email with resources and next steps

2. **Booking Confirmation:**
   - User receives: Booking confirmation with meeting details

### ✅ Visual Testing
- [ ] Wave animations display correctly on all pages
- [ ] Glassmorphism effects work properly
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Dark theme is consistent throughout

## Common Issues & Solutions

### Emails Not Sending
1. Check RESEND_API_KEY is valid
2. Verify RESEND_FROM_EMAIL domain is verified in Resend
3. Check console for error messages

### Calendly Widget Not Loading
1. Verify NEXT_PUBLIC_CALENDLY_URL is set correctly
2. Check browser console for errors
3. Ensure Calendly account is active

### Form Submission Errors
1. Check all required fields are filled
2. Verify API routes are accessible
3. Check network tab for detailed error messages

## Production Deployment

Before deploying to production:
1. Set all environment variables in your hosting platform
2. Update email addresses to production values
3. Replace Calendly URL with actual booking link
4. Test all forms and email flows in staging environment
5. Enable error tracking (Sentry, LogRocket, etc.)

## Support

For issues or questions:
- Check the console for error messages
- Review the API response in Network tab
- Verify all environment variables are set correctly