import { winners } from "@/lib/data";
import { Card, PawAvatar, Section } from "@/components/ui";

export default function WinnersPage() { return <Section eyebrow="Gallery" title="Winners gallery"><div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">{winners.concat(winners).map((w, i) => <Card key={`${w.dog}-${i}`}><PawAvatar label={w.dog} /><span className={`mt-4 inline-flex rounded-full ${w.ribbon} px-3 py-1 text-xs font-black`}>{w.place}</span><h3 className="mt-2 text-2xl font-black">{w.dog}</h3><p className="text-cocoa/65">{w.className}</p></Card>)}</div></Section>; }
