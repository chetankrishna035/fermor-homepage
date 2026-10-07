import { useState } from "react";
import { inr, short, sip } from "./lib.js";
const TABS = [["u", "Understand", "See the real picture"], ["a", "Act", "Do the one thing that matters"], ["g", "Grow", "Plan what you are saving for"]];
const MONTH = [["Rent", 22000], ["Food & dining", 9500], ["Travel", 4200], ["Shopping", 6800], ["Bills & subscriptions", 5500]];
const PERIOD = { Week: 1 / 4.33, Month: 1, Year: 12 };
const RULES = [["Move idle cash above ₹50,000 into a liquid fund", 4200], ["Cancel subscriptions you have not used in 60 days", 5400], ["Pay your card bill in full, automatically", 6000], ["Round up every spend into savings", 3000]];

function Understand() {
  const [p, setP] = useState("Month"), f = PERIOD[p], total = MONTH.reduce((s, [, v]) => s + v, 0) * f;
  return (<div>
    <div className="seg" role="group" aria-label="Period">{Object.keys(PERIOD).map((k) => <button key={k} aria-pressed={p === k} onClick={() => setP(k)}>{k}</button>)}</div>
    <p className="big">{inr(Math.round(total))}</p><p className="muted">spent this {p.toLowerCase()}, across all your accounts</p>
    <div className="bars">{MONTH.map(([k, v]) => (<div key={k}><span>{k}</span><i style={{ "--w": `${(v / 22000) * 100}%` }} /><b>{inr(Math.round(v * f))}</b></div>))}</div>
  </div>);
}
function Act() {
  const [on, setOn] = useState([0, 1]), gain = on.reduce((s, i) => s + RULES[i][1], 0);
  const flip = (i) => setOn((o) => o.includes(i) ? o.filter((x) => x !== i) : [...o, i]);
  return (<div>
    <p className="muted">Switch on the steps that suit you. Fermor keeps an eye on them.</p>
    <ul className="rules">{RULES.map(([t, v], i) => (<li key={t}><label><input type="checkbox" checked={on.includes(i)} onChange={() => flip(i)} /><span className="tick" aria-hidden="true" /><span>{t}</span><em>+{inr(v)}/yr</em></label></li>))}</ul>
    <p className="big" aria-live="polite">{inr(gain)}</p><p className="muted">a year, illustrative</p>
  </div>);
}
function Grow() {
  const [m, setM] = useState(10000), [y, setY] = useState(15), [r, setR] = useState(12);
  const d = sip(m, y, r), end = d[y], put = m * 12 * y, max = end || 1;
  const line = d.map((v, i) => `${(i / y) * 100},${50 - (v / max) * 46}`).join(" ");
  const base = d.map((_, i) => `${(i / y) * 100},${50 - ((m * 12 * i) / max) * 46}`).join(" ");
  const S = ({ l, v, min, max, step, set, f }) => (<label className="sl"><span>{l}<b>{f(v)}</b></span><input type="range" min={min} max={max} step={step} value={v} onChange={(e) => set(+e.target.value)} /></label>);
  return (<div>
    <p className="muted">A monthly SIP of {inr(m)} for {y} years at {r}% a year could become</p>
    <p className="big" aria-live="polite">{short(end)}</p><p className="muted">{short(put)} invested, {short(end - put)} growth</p>
    <svg viewBox="0 0 100 52" preserveAspectRatio="none" className="grow-chart" role="img" aria-label="Projected growth">
      <polyline points={`0,50 ${line} 100,50`} className="g-fill" /><polyline points={line} className="g-line" /><polyline points={base} className="g-base" />
    </svg>
    <div className="sliders"><S l="Per month" v={m} min={500} max={100000} step={500} set={setM} f={inr} /><S l="Years" v={y} min={1} max={30} step={1} set={setY} f={(v) => v} /><S l="Return a year" v={r} min={4} max={15} step={0.5} set={setR} f={(v) => v + "%"} /></div>
    <p className="fine">Illustration only. Market returns are not guaranteed and can be negative.</p>
  </div>);
}
export default function Journey() {
  const [t, setT] = useState("u"), cur = TABS.find((x) => x[0] === t);
  return (
    <section id="journey" className="band band-white"><div className="wrap">
      <p className="eyebrow">How Fermor works</p><h2>Three steps. Each one you can try right here.</h2>
      <div className="journey">
        <div className="tabs" role="tablist" aria-label="Fermor steps">{TABS.map(([k, n, s], i) => (
          <button key={k} role="tab" id={`tab-${k}`} aria-selected={t === k} aria-controls="panel" onClick={() => setT(k)}><span className="num">{i + 1}</span><span><b>{n}</b><small>{s}</small></span></button>))}</div>
        <div className="panel" id="panel" role="tabpanel" aria-labelledby={`tab-${t}`}>{t === "u" ? <Understand /> : t === "a" ? <Act /> : <Grow />}<span className="sr">{cur[1]}</span></div>
      </div>
    </div></section>
  );
}
