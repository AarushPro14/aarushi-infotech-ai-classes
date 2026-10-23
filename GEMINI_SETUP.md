# Connect ReXo to Gemini

ReXo calls Gemini from the server-side `/api/rexo` route. The API key is read only by the server and must never be added to browser code or a `NEXT_PUBLIC_` variable.

## Local setup

1. Create a Gemini API key in [Google AI Studio](https://aistudio.google.com/app/apikey).
2. In the project root, create a file named `.env.local`.
3. Add these lines and replace the key placeholder with your key:

   ```env
   GEMINI_API_KEY=your_key
   ```

4. Save the file and restart the local development server.
5. Open ReXo and ask a question about a class, a service, or a follow-up to an earlier question.

ReXo uses `gemini-3.1-flash-lite` with minimal thinking and streams text to the chat as it is generated. If Google reports that model as unavailable to your key, the route tries `gemini-3.5-flash-lite` once. An existing `GEMINI_MODEL` setting is ignored so an older, slower deployment setting cannot override the fast default. Model access and quotas vary by account.

## Deployment

For a Vercel deployment, add `GEMINI_API_KEY` under the project's Environment Variables in every environment where ReXo should work, then redeploy. Do not paste the key into source files, chat messages, or a public repository.

## ReXo's website knowledge and behavior

- Edit `data/rexoKnowledge.ts` to add or correct website facts and topics. ReXo's system instruction automatically includes each topic's first answer as its compact factual reference.
- Edit `lib/rexoSystemInstruction.ts` to change ReXo's tone, response rules, or accuracy boundaries.
- ReXo can navigate to the website's existing pages and Google Maps when a visitor explicitly asks. If you add a new destination, update the allowlist in `app/api/rexo/route.ts`, the route map in `components/ReXo/ReXoChat.tsx`, and the navigation rules above.
- Keep prices, schedules, contact details, and other business facts out of ReXo until the website has a confirmed source for them.

Google's Gemini API free tier has model-specific limits. Google also indicates that free-tier content may be used to improve its products, so do not invite visitors to submit confidential or sensitive information through ReXo. Review Google's current [pricing and data use details](https://ai.google.dev/gemini-api/docs/pricing) before launch.
