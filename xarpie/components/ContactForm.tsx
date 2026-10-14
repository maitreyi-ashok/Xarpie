'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p className="t-lead" style={{ color: 'var(--cyan-deep)' }}>
        Thanks — your message has been received.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      style={{ display: 'grid', gap: 16, maxWidth: 520 }}
    >
      <input required placeholder="Your name" className="chat-input" style={{ padding: '12px 14px' }} />
      <input required type="email" placeholder="Your email" className="chat-input" style={{ padding: '12px 14px' }} />
      <textarea required rows={5} placeholder="Tell us about the operational problem…" className="chat-input" style={{ padding: '12px 14px', resize: 'vertical' }} />
      <button className="btn btn-primary" type="submit" style={{ justifySelf: 'flex-start' }}>
        Send <span aria-hidden>→</span>
      </button>
    </form>
  );
}
