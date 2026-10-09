'use client';
import { useEffect, useRef, useState } from 'react';
import InfinityMark from './InfinityMark';

type Msg = { role: 'user' | 'bot'; text: string };

const RESPONSES: { keys: string[]; reply: string }[] = [
  { keys: ['hello','hi','hey','good morning','good afternoon','good evening'], reply: "Hello. I'm the Xarpie assistant. Ask me about what we do, how an engagement runs, our capabilities, or where we've deployed work." },
  { keys: ['what do you do','who are you','about xarpie','about you','what is xarpie','xarpie labs'], reply: "Xarpie Labs takes ownership from vision to operations — we do digital transformation and applied AI, delivered by one accountable team." },
  { keys: ['two layers','layers','engineering base','intelligence layer','foundation'], reply: "We work in two layers, in order. First the engineering base — applications, integration, data and platform. Then the intelligence layer — agents, ML, retrieval, guardrails and managed AI ops." },
  { keys: ['capabilities','what can you do','services','capability'], reply: "Engineering base: application engineering, integration, data & platform, cloud engineering, modernising legacy cores. Intelligence layer: agentic AI, ML, retrieval, evaluation & guardrails, managed AI ops." },
  { keys: ['engagement','how does it work','how do you work','process','method','operating model'], reply: "Every engagement runs on the same six-step model: (1) start at the business problem, (2) decide build or buy on evidence, (3) shape strategy and architecture, (4) engineer the solution, (5) deploy into live operations, (6) stay accountable afterwards." },
  { keys: ['build or buy','build vs buy','buy or build'], reply: "Build or buy is decided on evidence, not preference. Where an off-the-shelf product genuinely fits, we integrate it. Where it does not, we build to your context." },
  { keys: ['industries','case study','case studies','clients','deployed','deployments'], reply: "Live deployments today: construction & materials (field operations and payroll), manufacturing (agentic lead intelligence), and healthcare & biomedical (sovereign AI, in UAT)." },
  { keys: ['team','leadership','people','ceo','coo','chairman','founder','ravi','phani','ziyad','barathi','mohan','mena'], reply: "Leadership: Ravi Machani (Founder & Advisory Board), Phani Pingali (Chief Operating Officer), Ziyad Alsulais (Chairman & CEO — MENA), and Barathi Mohan (Co-Founder & COO — MENA)." },
  { keys: ['insights','positions','what do you believe'], reply: "Four positions on every engagement: (1) build or buy is a question of evidence, (2) the foundation decides whether the intelligence works, (3) accountability should not move at handover, (4) a method that travels beats a sector specialism." },
  { keys: ['dashboard','analytics','traffic','site stats','metrics'], reply: "We have a live analytics dashboard showing traffic and engagement across the site." },
  { keys: ['contact','get in touch','email','reach','talk to','speak to'], reply: "You can reach us at hello@xarpielabs.com. Offices in Bangalore and Dubai." },
  { keys: ['ai','artificial intelligence','machine learning','agents','agentic'], reply: "On the intelligence layer we build agentic AI, machine learning, retrieval & knowledge systems, evaluation & guardrails, and managed AI operations." },
  { keys: ['machani','machani group'], reply: "Xarpie Labs is a Machani Group company. The group was founded by Ravi Machani, who also serves on the Xarpie advisory board." },
  { keys: ['thank','thanks','cheers','appreciate'], reply: "Happy to help. If there's anything else you'd like to know about Xarpie Labs, just ask." },
  { keys: ['bye','goodbye','see you','talk later'], reply: "Thanks for stopping by. You can reopen this chat any time from the button in the corner." },
];

const SUGGESTIONS = [
  'What do you do?',
  'How does an engagement run?',
  'Where have you deployed work?',
  'How do I get in touch?',
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [welcome, setWelcome] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [msgs, typing]);

  const toggle = () => {
    setOpen((v) => !v);
    if (!welcome) {
      setWelcome(true);
      setTimeout(() => {
        setMsgs([{ role: 'bot', text: "Hi — I'm the Xarpie assistant. Ask me about what we do, how an engagement runs, or where we've deployed work." }]);
      }, 200);
    }
  };

  const respond = (text: string) => {
    const q = text.toLowerCase();
    let best: typeof RESPONSES[0] | null = null;
    let bestScore = 0;
    for (const r of RESPONSES) {
      let score = 0;
      for (const k of r.keys) if (q.includes(k)) score += k.length;
      if (score > bestScore) { bestScore = score; best = r; }
    }
    const reply = best?.reply ?? "I'm not sure I caught that. I can help with: what Xarpie Labs does, the two layers we build, how an engagement runs, build or buy, our deployed work, the leadership team, our positions, and how to get in touch.";
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [...m, { role: 'bot', text: reply }]);
    }, 500 + Math.random() * 400);
  };

  const send = (text: string) => {
    if (!text.trim()) return;
    setMsgs((m) => [...m, { role: 'user', text }]);
    setInput('');
    respond(text);
  };

  return (
    <>
      <button className="chat-launcher" onClick={toggle} aria-label="Open the Xarpie assistant">
        <svg className="chat-launcher__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 5.5 a2.5 2.5 0 0 1 2.5 -2.5 h11 a2.5 2.5 0 0 1 2.5 2.5 v9 a2.5 2.5 0 0 1 -2.5 2.5 h-5.5 l-4.5 3.5 v-3.5 h-1 a2.5 2.5 0 0 1 -2.5 -2.5 z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <circle cx="9" cy="10" r="1" fill="currentColor" />
          <circle cx="12" cy="10" r="1" fill="currentColor" />
          <circle cx="15" cy="10" r="1" fill="currentColor" />
        </svg>
        <span className="chat-launcher__badge" />
        <span className="chat-launcher__label">Ask Xarpie</span>
      </button>

      <div className={`chat-panel${open ? ' open' : ''}`} role="dialog" aria-label="Xarpie assistant">
        <div className="chat-head">
          <div className="chat-head__avatar">X</div>
          <div className="chat-head__meta">
            <p className="chat-head__name">Xarpie Assistant</p>
            <p className="chat-head__status"><span className="chat-head__status-dot" />Online · replies instantly</p>
          </div>
          <button className="chat-head__close" onClick={toggle} aria-label="Close">×</button>
        </div>

        <div className="chat-body" ref={bodyRef}>
          {msgs.map((m, i) => (
            <div key={i} className={`chat-msg chat-msg--${m.role}`}>
              <div className="chat-msg__avatar">{m.role === 'user' ? 'You' : 'X'}</div>
              <div className="chat-msg__bubble" dangerouslySetInnerHTML={{ __html: m.text }} />
            </div>
          ))}
          {typing && (
            <div className="chat-msg chat-msg--bot">
              <div className="chat-msg__avatar">X</div>
              <div className="chat-msg__bubble chat-typing"><span /><span /><span /></div>
            </div>
          )}
        </div>

        <div className="chat-suggestions">
          {SUGGESTIONS.map((s) => (
            <button key={s} className="chat-suggestion" onClick={() => send(s)}>{s}</button>
          ))}
        </div>

        <form className="chat-input-row" onSubmit={(e) => { e.preventDefault(); send(input); }}>
          <input className="chat-input" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about Xarpie Labs…" />
          <button className="chat-send" type="submit" aria-label="Send">
            <svg viewBox="0 0 24 24" fill="none"><path d="M4 12 L20 4 L14 20 L12 13 Z" fill="currentColor" /></svg>
          </button>
        </form>
        <div className="chat-footer">Xarpie Assistant · demo, no data leaves your browser</div>
      </div>
    </>
  );
}
