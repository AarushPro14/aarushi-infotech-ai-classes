This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Send Query

The `/send-query` page sends email through EmailJS and sends query notifications to `info@aarushiinfotech.in`. To enable it:

1. In EmailJS, connect the mailbox that should send the emails under **Email Services**. This can be a supported low-volume mailbox such as Gmail or Outlook; no domain DNS setup is needed when using one of those services.
2. Create one EmailJS template with **To Email** `{{to_email}}`, **Reply To** `{{reply_to}}`, **Subject** `{{subject}}`, and email content `{{message}}`. Let the connected email service supply the From address. Do not configure EmailJS auto-reply; the app sends the receipt separately.
3. Copy the Service ID, Template ID, and Public Key from EmailJS into `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, and `EMAILJS_PUBLIC_KEY` in `.env.local`. If you have enabled an EmailJS private key, also set `EMAILJS_PRIVATE_KEY`. Generate a random secret of at least 32 characters for `SEND_QUERY_VERIFICATION_SECRET`. Keep the values in `.env.local` and server deployment settings; never use a `NEXT_PUBLIC_` prefix.
4. For attachments, EmailJS requires a plan that supports attachments. In the template's **Attachments** tab, create five **Variable Attachment** entries using parameters `attachment_1` through `attachment_5`; use `{{attachment_1_name}}` through `{{attachment_5_name}}` as filenames and `{{attachment_1_type}}` through `{{attachment_5_type}}` as content types. The app limits total attachments to 256 KB. Only then set `EMAILJS_ATTACHMENTS_ENABLED=true`; otherwise attachment submissions are rejected, while text-only queries continue to work.
5. Restart the local server or redeploy. The app caps query text at 10,000 characters to stay within EmailJS's dynamic-template size limit.

The form verifies inbox access with a six-digit code that expires after 10 minutes. After a successful email-provider acceptance, it sends the query and any accepted attachments to the admin inbox and displays a reference. Submitting a query does not enroll the applicant in a class. A copy to the applicant is sent after the admin message is accepted.

The current project has no database or private object store. The admin email inbox is the durable query record. The server checks supported file signatures but malware scanning is not configured. Rate limiting is in-process and best-effort; production deployments with meaningful public traffic should add a shared rate-limit store/WAF and a persistent query database. EmailJS has request, template, and plan limits; review its current plan before enabling production mail.

## Class booking requests

The separate `/booking` page is linked from the homepage header as **Book a Class**. It reuses the EmailJS settings above and the same email verification flow. The page accepts up to seven class selections and emails the request to the admin inbox. After the email is accepted, the student can open a prefilled WhatsApp message to `+91 99678 44269`; the student must press **Send** in WhatsApp. Opening WhatsApp does not confirm that the message was delivered or that a class enrollment is confirmed.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
