# API Documentation - Washly Washing Services

## Overview

The website now includes two API endpoints for handling form submissions. Both endpoints are built using Next.js App Router API routes and accept POST requests with JSON data.

---

## API Endpoints

### 1. Contact Form API

**Endpoint:** `/api/contact`
**Method:** `POST`
**Content-Type:** `application/json`

#### Request Body

```json
{
  "name": "string (required)",
  "email": "string (required, must be valid email)",
  "phone": "string (optional)",
  "message": "string (required)"
}
```

#### Response

**Success (200)**
```json
{
  "success": true,
  "message": "Thank you for contacting us! We will get back to you soon."
}
```

**Error (400 - Validation Error)**
```json
{
  "error": "Missing required fields"
}
```
or
```json
{
  "error": "Invalid email format"
}
```

**Error (500 - Server Error)**
```json
{
  "error": "Internal server error"
}
```

#### Example Usage

```javascript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '(705) 555-1234',
    message: 'I need window cleaning service for my house.'
  }),
})

const data = await response.json()
```

---

### 2. Quote Request API

**Endpoint:** `/api/quote`
**Method:** `POST`
**Content-Type:** `application/json`

#### Request Body

```json
{
  "name": "string (required)",
  "email": "string (required, must be valid email)",
  "phone": "string (required)",
  "service": "string (required)",
  "address": "string (optional)",
  "details": "string (optional)"
}
```

**Service Options:**
- `window-cleaning`
- `gutter-cleaning`
- `pressure-washing`
- `roof-cleaning`
- `multiple`

#### Response

**Success (200)**
```json
{
  "success": true,
  "message": "Thank you for your quote request! We will contact you shortly with pricing."
}
```

**Error (400 - Validation Error)**
```json
{
  "error": "Missing required fields"
}
```
or
```json
{
  "error": "Invalid email format"
}
```
or
```json
{
  "error": "Invalid phone number format"
}
```

**Error (500 - Server Error)**
```json
{
  "error": "Internal server error"
}
```

#### Example Usage

```javascript
const response = await fetch('/api/quote', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '(705) 555-5678',
    service: 'window-cleaning',
    address: '123 Main St, Charlottetown, PE',
    details: 'Two-story house with 15 windows'
  }),
})

const data = await response.json()
```

---

## Validation Rules

### Email Validation
- Must match pattern: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Examples:
  - ✅ `user@example.com`
  - ✅ `john.doe@company.co.uk`
  - ❌ `invalid.email`
  - ❌ `missing@domain`

### Phone Validation (Quote API only)
- Must contain only digits, spaces, hyphens, and parentheses
- Pattern: `/^[\d\s\-\(\)]+$/`
- Examples:
  - ✅ `(705) 822-8605`
  - ✅ `705-822-8605`
  - ✅ `7058228605`
  - ❌ `invalid-phone`

---

## Integration with Email Services

Currently, the API endpoints log submissions to the console. To integrate with email services:

### Option 1: SendGrid

1. Install SendGrid:
```bash
npm install @sendgrid/mail
```

2. Add to API route:
```typescript
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

await sgMail.send({
  to: ['pathik@washly.com', 'atmiya@washly.com'],
  from: 'noreply@washly.com',
  subject: `New Contact Form from ${name}`,
  html: `<p><strong>Name:</strong> ${name}</p>
         <p><strong>Email:</strong> ${email}</p>
         <p><strong>Message:</strong> ${message}</p>`
})
```

3. Add environment variable:
```
SENDGRID_API_KEY=your_api_key_here
```

### Option 2: Resend

1. Install Resend:
```bash
npm install resend
```

2. Add to API route:
```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'Washly <noreply@washly.com>',
  to: ['pathik@washly.com', 'atmiya@washly.com'],
  subject: `New Contact Form from ${name}`,
  html: `<p><strong>Name:</strong> ${name}</p>
         <p><strong>Email:</strong> ${email}</p>
         <p><strong>Message:</strong> ${message}</p>`
})
```

3. Add environment variable:
```
RESEND_API_KEY=your_api_key_here
```

### Option 3: Nodemailer (SMTP)

1. Install Nodemailer:
```bash
npm install nodemailer
```

2. Add to API route:
```typescript
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

await transporter.sendMail({
  from: '"Washly Website" <noreply@washly.com>',
  to: 'pathik@washly.com, atmiya@washly.com',
  subject: `New Contact Form from ${name}`,
  html: `<p><strong>Name:</strong> ${name}</p>
         <p><strong>Email:</strong> ${email}</p>
         <p><strong>Message:</strong> ${message}</p>`
})
```

3. Add environment variables:
```
SMTP_HOST=smtp.example.com
SMTP_USER=your_username
SMTP_PASS=your_password
```

---

## Database Integration (Optional)

To save form submissions to a database:

### Using Prisma (Recommended)

1. Install Prisma:
```bash
npm install @prisma/client
npm install -D prisma
```

2. Initialize Prisma:
```bash
npx prisma init
```

3. Define schema (`prisma/schema.prisma`):
```prisma
model ContactSubmission {
  id        String   @id @default(cuid())
  name      String
  email     String
  phone     String?
  message   String
  createdAt DateTime @default(now())
}

model QuoteRequest {
  id        String   @id @default(cuid())
  name      String
  email     String
  phone     String
  service   String
  address   String?
  details   String?
  createdAt DateTime @default(now())
}
```

4. Use in API route:
```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

await prisma.contactSubmission.create({
  data: {
    name,
    email,
    phone,
    message
  }
})
```

---

## Testing the APIs

### Using cURL

**Contact Form:**
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "705-555-1234",
    "message": "This is a test message"
  }'
```

**Quote Request:**
```bash
curl -X POST http://localhost:3000/api/quote \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "705-555-1234",
    "service": "window-cleaning",
    "address": "123 Test St",
    "details": "Test details"
  }'
```

### Using Postman

1. Create new POST request
2. Set URL to `http://localhost:3000/api/contact` or `/api/quote`
3. Set Headers: `Content-Type: application/json`
4. Add JSON body as shown in examples above
5. Send request

---

## Error Handling

Both APIs include comprehensive error handling:

- **Validation Errors (400)**: Missing fields or invalid format
- **Server Errors (500)**: Unexpected errors during processing
- All errors are logged to console for debugging
- Error messages are user-friendly

---

## Security Considerations

1. **Rate Limiting**: Consider adding rate limiting to prevent spam
2. **CORS**: Configure CORS headers for production
3. **CSRF Protection**: Implement CSRF tokens for production
4. **Input Sanitization**: Add additional validation/sanitization if needed
5. **Environment Variables**: Never commit API keys to version control

---

## Environment Variables Template

Create a `.env.local` file:

```env
# Email Service (choose one)
SENDGRID_API_KEY=your_sendgrid_key
# OR
RESEND_API_KEY=your_resend_key
# OR
SMTP_HOST=smtp.example.com
SMTP_USER=your_username
SMTP_PASS=your_password

# Database (optional)
DATABASE_URL="postgresql://user:password@localhost:5432/washly"

# Other
NEXT_PUBLIC_SITE_URL=https://washlywashing.com
```

---

## Rate Limiting Example

To add rate limiting:

```bash
npm install express-rate-limit
```

```typescript
import { NextRequest } from 'next/server'

const submissions = new Map<string, number[]>()

function rateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 5

  if (!submissions.has(ip)) {
    submissions.set(ip, [])
  }

  const times = submissions.get(ip)!
  const recentTimes = times.filter(time => now - time < windowMs)

  if (recentTimes.length >= maxRequests) {
    return false
  }

  recentTimes.push(now)
  submissions.set(ip, recentTimes)
  return true
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown'

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429 }
    )
  }

  // ... rest of handler
}
```

---

## Monitoring & Logging

For production, consider:

- **Sentry**: Error tracking
- **LogRocket**: Session replay
- **Vercel Analytics**: Built-in analytics
- **Custom logging**: Winston or Pino

---

## File Locations

- Contact API: `app/api/contact/route.ts`
- Quote API: `app/api/quote/route.ts`
- Contact Component: `components/Contact.tsx`
- Quote Dialog: `components/QuoteDialog.tsx`

---

## Need Help?

Contact:
- Pathik Pandya: (705) 822-8605
- Atmiya Patel: (705) 970-4920

Or check the main [README.md](README.md) for more documentation.
