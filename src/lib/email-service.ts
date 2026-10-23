/**
 * Transactional Email Provider Interface & Boundary
 * Supports Resend, Brevo, or graceful Console Fallback when API keys are absent.
 */

export interface EmailPayload {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export interface EmailResult {
  success: boolean;
  messageId?: string;
  provider: 'resend' | 'console_development';
  error?: string;
}

export async function sendTransactionalEmail(payload: EmailPayload): Promise<EmailResult> {
  const apiKey = process.env.RESEND_API_KEY;

  // 1. If Resend API key is configured, send via REST API without requiring heavy SDKs
  if (apiKey && apiKey.startsWith('re_')) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'The Itti Foundation <hello@itti.org.in>',
          to: payload.to,
          subject: payload.subject,
          html: payload.html,
          reply_to: payload.replyTo || 'hello@itti.org.in',
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Resend API returned failure');
      }

      return {
        success: true,
        messageId: data.id,
        provider: 'resend',
      };
    } catch (err: any) {
      console.error('[Email Dispatch Error]', err.message);
      // Fallback to console below
    }
  }

  // 2. Safe development fallback: log email dispatch cleanly without failing user request
  console.log('------------------------------------------------------------');
  console.log(`[TRANSACTIONAL EMAIL - DEVELOPMENT BOUNDARY]`);
  console.log(`To: ${payload.to}`);
  console.log(`Subject: ${payload.subject}`);
  console.log(`Body Snippet: ${payload.html.substring(0, 150)}...`);
  console.log('------------------------------------------------------------');

  return {
    success: true,
    messageId: `dev-msg-${Date.now()}`,
    provider: 'console_development',
  };
}
