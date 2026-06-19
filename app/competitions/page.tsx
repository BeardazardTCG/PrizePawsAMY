import Link from "next/link";
import { competitions } from "@/lib/data";
import { Card, Section } from "@/components/ui";

export default function CompetitionsPage() {
  return <Section eyebrow="Live classes" title="Monthly competitions"><div className="grid gap-4 md:grid-cols-3">{competitions.map(c => <Link key={c.slug} href={`/competitions/${c.slug}`}><Card className="h-full transition hover:-translate-y-1"><div className={`h-28 rounded-[1.5rem] bg-gradient-to-br ${c.color}`} /><p className="mt-4 text-sm font-black uppercase tracking-widest text-terracotta">{c.month}</p><h3 className="mt-1 text-2xl font-black">{c.title}</h3><p className="mt-2 text-cocoa/65">{c.theme}</p><div className="mt-4 flex items-center justify-between text-sm font-bold"><span>{c.entries} entries</span><span>Closes {c.closes}</span></div></Card></Link>)}</div></Section>;
}
