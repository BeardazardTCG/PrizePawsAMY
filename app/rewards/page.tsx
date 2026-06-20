import { dogs } from "@/lib/data";
import { Card, Section } from "@/components/ui";

export default function RewardsPage() { return <Section eyebrow="Loyalty" title="Paw Points & referrals"><div className="grid gap-4 md:grid-cols-3"><Card><p className="text-sm font-black uppercase tracking-widest text-terracotta">Balance</p><p className="mt-2 text-5xl font-black">{dogs[0].points}</p><p className="mt-2 text-cocoa/65">Earn points for entries, votes, streaks, and referrals.</p></Card>{["Refer a friend: +250 points", "Enter 3 months: bonus badge", "Top voter: community perk"].map(item => <Card key={item}><h3 className="text-xl font-black">{item}</h3><p className="mt-2 text-cocoa/65">A simple reward concept ready for future account and payment integrations.</p></Card>)}</div></Section>; }
