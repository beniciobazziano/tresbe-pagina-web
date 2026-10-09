import "server-only";

/**
 * Envío de correo con dos proveedores posibles, elegidos por variables de
 * entorno. Si no hay ninguno configurado, el envío devuelve sent:false y
 * la app ofrece el respaldo (descargar la nota / abrirla en el correo).
 *
 * Opción A — Resend:  RESEND_API_KEY  (+ MAIL_FROM opcional)
 * Opción B — SMTP:    SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
 *                     (para Gmail: smtp.gmail.com / 465 / contraseña de
 *                      aplicación de 16 letras)
 */

export interface MailMessage {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}

export interface MailResult {
  sent: boolean;
  provider: "resend" | "smtp" | "ninguno";
  error?: string;
}

export function isEmailConfigured() {
  return Boolean(
    process.env.RESEND_API_KEY ||
      (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS)
  );
}

export async function sendMail(message: MailMessage): Promise<MailResult> {
  const from =
    process.env.MAIL_FROM ??
    process.env.SMTP_USER ??
    "Tresbe Distribuidora <onboarding@resend.dev>";

  if (process.env.RESEND_API_KEY) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [message.to],
          subject: message.subject,
          html: message.html,
          text: message.text,
          ...(message.replyTo ? { reply_to: message.replyTo } : {}),
        }),
      });
      if (!res.ok) {
        const detail = await res.text();
        return { sent: false, provider: "resend", error: detail.slice(0, 300) };
      }
      return { sent: true, provider: "resend" };
    } catch (error) {
      return {
        sent: false,
        provider: "resend",
        error: error instanceof Error ? error.message : "Error de red",
      };
    }
  }

  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const nodemailer = (await import("nodemailer")).default;
      const port = Number(process.env.SMTP_PORT ?? 465);
      const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port,
        secure: port === 465,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });
      await transport.sendMail({
        from,
        to: message.to,
        subject: message.subject,
        html: message.html,
        text: message.text,
        replyTo: message.replyTo,
      });
      return { sent: true, provider: "smtp" };
    } catch (error) {
      return {
        sent: false,
        provider: "smtp",
        error: error instanceof Error ? error.message : "Error SMTP",
      };
    }
  }

  return { sent: false, provider: "ninguno" };
}
