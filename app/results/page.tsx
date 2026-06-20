import { winners } from "@/lib/data";
import { Card, Section } from "@/components/ui";

export default function ResultsPage() { return <Section eyebrow="June results" title="Rosette board"><div className="space-y-4">{winners.map(w => <Card key={w.dog} className="flex items-center gap-4"><span className={`grid h-16 w-16 place-items-center rounded-full ${w.ribbon} text-lg font-black`}>{w.place}</span><div><h3 className="text-2xl font-black">{w.dog}</h3><p className="text-cocoa/65">{w.className} · {w.caption}</p></div></Card>)}</div></Section>; }
