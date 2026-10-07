import { useState } from "react";
const Q = [
  ["If your income stopped, how long could you cover your costs?", ["Under a month", "1 to 3 months", "6 months or more"]],
  ["How do you save?", ["Whatever is left at month end", "I move money when I remember", "Automatically, on salary day"]],
  ["Do you carry card or loan debt at high interest?", ["Yes, and it is growing", "Yes, but I am paying it down", "No"]],
  ["Do you have a goal with an amount and a date?", ["Not really", "A rough idea", "Yes, and I track it"]],
];
const RESULT = [
  [3, "Let's build a base", "Start with a small emergency fund and one automatic transfer on salary day. Small, steady and automatic beats large and occasional."],
  [6, "Good foundations, loose ends", "You are doing more right than you think. Pick one gap, such as an automatic saving or a dated goal, and close it this month."],
  [9, "In strong shape", "Your basics are covered. The next gains come from making your money work harder, so look at where idle cash and fees leak value."],
];
export default function HealthCheck() {
  const [a, setA] = useState([]), done = a.length === Q.length, score = a.reduce((s, x) => s + x, 0);
  const res = RESULT.find(([max]) => score <= max) || RESULT[2];
  return (
    <section id="check" className="wrap check">
      <div><p className="eyebrow">Two-minute health check</p><h2>Where do you stand today?</h2><p className="lead">Four questions, no sign-up. A quick read on your safety net, saving habits, debt and goals.</p></div>
      <div className="card">
        {done ? (<div aria-live="polite"><p className="score">{score}<small> / 8</small></p><h3>{res[1]}</h3><p className="muted">{res[2]}</p><div className="row-btns"><a className="btn btn-primary" href="#start">Get my plan</a><button className="btn btn-ghost" onClick={() => setA([])}>Start again</button></div></div>) : (
          <fieldset key={a.length}><legend><span className="muted">Question {a.length + 1} of {Q.length}</span>{Q[a.length][0]}</legend>
            {Q[a.length][1].map((o, i) => (<label key={o} className="opt"><input type="radio" name="q" onChange={() => setA([...a, i])} /><span>{o}</span></label>))}
            <div className="prog"><i style={{ width: `${(a.length / Q.length) * 100}%` }} /></div></fieldset>)}
      </div>
    </section>
  );
}
