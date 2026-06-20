import Link from "next/link";
import type { ReactNode } from "react";

export function Section({ eyebrow, title, children }: { eyebrow?: string; title: string; children: ReactNode }) {
  return <section className="px-5 py-8 sm:px-8">{eyebrow && <p className="text-sm font-bold uppercase tracking-[0.2em] text-terracotta">{eyebrow}</p>}<h2 className="mt-2 text-3xl font-black tracking-tight text-cocoa">{title}</h2><div className="mt-5">{children}</div></section>;
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-[2rem] border border-white/70 bg-white/80 p-5 shadow-soft backdrop-blur ${className}`}>{children}</div>;
}

export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" }) {
  const styles = variant === "primary" ? "bg-cocoa text-white shadow-soft" : "bg-white text-cocoa border border-cocoa/10";
  return <Link href={href} className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-extrabold ${styles}`}>{children}</Link>;
}

export function PawAvatar({ label, className = "" }: { label: string; className?: string }) {
  return <div className={`grid aspect-square place-items-center rounded-[2rem] bg-gradient-to-br from-biscuit to-terracotta text-4xl shadow-soft ${className}`} aria-label={label}>🐶</div>;
}
