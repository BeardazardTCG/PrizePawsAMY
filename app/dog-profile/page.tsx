import { dogs } from "@/lib/data";
import { Card, PawAvatar, Section } from "@/components/ui";

export default function DogProfilePage() { const dog = dogs[0]; return <Section eyebrow="Dog profile" title={dog.name}><div className="grid gap-5 md:grid-cols-[0.7fr_1.3fr]"><PawAvatar label={dog.name} /><Card><p className="text-xl font-black">{dog.breed}</p><p className="mt-1 text-cocoa/65">{dog.age}</p><p className="mt-5 text-4xl font-black text-terracotta">{dog.points} Paw Points</p><div className="mt-5 flex flex-wrap gap-2">{dog.badges.map(b => <span key={b} className="rounded-full bg-biscuit/60 px-3 py-2 text-sm font-bold">{b}</span>)}</div></Card></div></Section>; }
