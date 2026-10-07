import { inr, short, useCountUp } from "./lib.js";
const spark = [20, 24, 22, 29, 31, 30, 36, 40, 39, 46, 50, 56];
const bars = [["Rent", 22000], ["Food", 9500], ["Shopping", 6800], ["Bills", 5500]];
export default function Hero() {
  const nw = useCountUp(2480000);
  const pts = spark.map((y, i) => `${(i / 11) * 100},${60 - y}`).join(" ");
  return (
    <section className="wrap hero">
      <div className="hero-copy">
        <p className="eyebrow">Understand · Act · Grow</p>
        <h1>Your money, in one place and in plain English.</h1>
        <p className="lead">Fermor shows where you stand across every account, tells you the one thing worth doing next, and tracks you towards what you are saving for.</p>
        <div className="row-btns"><a className="btn btn-primary" href="#start">Get started free</a><a className="btn btn-ghost" href="#journey">Try it below</a></div>
        <p className="fine">Built for people in India. Amounts in ₹.</p>
      </div>
      <div className="snap" aria-label="Sample Fermor dashboard">
        <div className="snap-top"><span>Net worth</span><span className="chip">Sample data</span></div>
        <p className="snap-nw">{short(nw)}</p>
        <p className="up">▲ ₹38,200 this month</p>
        <svg viewBox="0 0 100 62" preserveAspectRatio="none" className="spark" aria-hidden="true">
          <polyline points={`0,62 ${pts} 100,62`} className="spark-fill" /><polyline points={pts} className="spark-line" />
        </svg>
        <div className="snap-bars">{bars.map(([k, v]) => (<div key={k}><span>{k}</span><i style={{ "--w": `${(v / 22000) * 100}%` }} /><b>{inr(v)}</b></div>))}</div>
        <div className="next"><p className="next-k">Your next step</p><p>₹40,000 is sitting idle in savings. Moving ₹25,000 to a liquid fund could earn you about ₹875 more a year.</p></div>
      </div>
    </section>
  );
}
