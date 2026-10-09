import PhotoHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <>
      <PhotoHero
        eyebrow="Contact"
        title="Start a conversation."
        body="Tell us the operational problem, and we will tell you how far along the model you need us — and what it will take to carry it into live operations."
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2400&q=80"
      />

      <section className="board">
        <p className="eyebrow">Get in touch</p>
        <h2 className="t-h2 stack-sm">One team, one line of sight.</h2>
        <p className="t-lead stack-sm">
          We start at your business problem and stay accountable through to live
          operations.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginTop: 32 }}>
          <div>
            <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--faint)', margin: '0 0 8px' }}>Email</p>
            <p style={{ fontSize: '1.125rem', fontWeight: 600, margin: 0 }}>hello@xarpielabs.com</p>
          </div>
          <div>
            <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--faint)', margin: '0 0 8px' }}>Office</p>
            <p style={{ fontSize: '1.125rem', fontWeight: 600, margin: 0 }}>Bangalore · Dubai</p>
          </div>
        </div>
        <div style={{ marginTop: 40 }}>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
