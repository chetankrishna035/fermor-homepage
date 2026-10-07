import { useEffect, useRef, useState } from "react";
export const inr = (n) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
export const short = (n) => n >= 1e7 ? `₹${(n / 1e7).toFixed(2)} Cr` : n >= 1e5 ? `₹${(n / 1e5).toFixed(1)} L` : inr(n);
// future value of a monthly SIP, one point per year
export function sip(m, years, rate) {
  const i = rate / 1200; let v = 0; const pts = [0];
  for (let k = 1; k <= years * 12; k++) { v = (v + m) * (1 + i); if (k % 12 === 0) pts.push(v); }
  return pts;
}
export function useCountUp(target, ms = 1200) {
  const [v, set] = useState(0);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return set(target);
    let raf, t0; const step = (t) => { t0 ??= t; const p = Math.min((t - t0) / ms, 1); set(target * (1 - Math.pow(1 - p, 3))); if (p < 1) raf = requestAnimationFrame(step); };
    raf = requestAnimationFrame(step); return () => cancelAnimationFrame(raf);
  }, [target, ms]);
  return v;
}
export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return ref;
}
