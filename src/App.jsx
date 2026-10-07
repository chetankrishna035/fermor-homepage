import { useState } from "react";
import Hero from "./Hero.jsx";
import Journey from "./Journey.jsx";
import HealthCheck from "./HealthCheck.jsx";
import { useReveal } from "./lib.js";
const WHO = [
  ["Starting out", "Your first salary and no clear plan", "See where it goes, build a safety net, and start investing with a small, automatic amount."],
  ["Scattered", "Accounts across banks, brokers and apps", "Bring it into one view, so net worth is a number you can read in a second."],
  ["Planning ahead", "A home, a child's education, early retirement", "Put an amount and a date on it and see whether you are on course."],
];
function Reveal({ children, className = "" }) { const r = useReveal(); return <div ref={r} className={`reveal ${className}`}>{children}</div>; }
export default function App() {
  const [open, setOpen] = useState(false), [email, setEmail] = useState(""), [sent, setSent] = useState(false);
  const go = () => setOpen(false);
  return (<>
    <a className="skip" href="#main">Skip to content</a>
    <header className="nav"><div className="wrap nav-in">
      <a href="#top" className="logo">Fermor</a>
      <button className="burger" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
      <nav id="menu" className={open ? "open" : ""}>
        <a href="#who" onClick={go}>Who it's for</a><a href="#journey" onClick={go}>How it works</a><a href="#check" onClick={go}>Health check</a><a href="#trust" onClick={go}>Privacy</a>
        <a href="#start" className="btn btn-primary btn-sm" onClick={go}>Get started</a>
      </nav>
    </div></header>
    <main id="main"><span id="top" />
      <Hero />
      <section id="who" className="wrap who"><Reveal><p className="eyebrow">Who it's for</p><h2>Made for people who want money to feel less confusing.</h2></Reveal>
        <div className="who-grid">{WHO.map(([k, t, p], i) => (<Reveal key={k} className="who-item"><span className="num">{i + 1}</span><p className="who-k">{k}</p><h3>{t}</h3><p className="muted">{p}</p></Reveal>))}</div></section>
      <Journey />
      <HealthCheck />
      <section id="trust" className="band band-dark"><div className="wrap trust"><Reveal><p className="eyebrow light">Privacy</p><h2>Your data is yours.</h2></Reveal>
        <Reveal><ul><li><b>Encrypted.</b> Your information is encrypted in transit and at rest.</li><li><b>Never sold.</b> What you share is used to run your account, nothing else.</li><li><b>Your call.</b> Disconnect an account or delete your data any time.</li></ul></Reveal></div></section>
      <section id="start" className="wrap start"><h2>Know where you stand. Know what to do next.</h2>
        {sent ? <p className="lead" role="status">Thanks. We'll write to {email} soon.</p> : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}><label className="sr" htmlFor="em">Email</label>
            <input id="em" type="email" required placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} /><button className="btn btn-primary">Get started free</button></form>)}
      </section>
    </main>
    <footer className="wrap foot"><span className="logo">Fermor</span><span className="fine">Sample data and projections are illustrations, not financial advice. © {new Date().getFullYear()} Fermor</span></footer>
  </>);
}
