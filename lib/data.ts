export type Competition = {
  slug: string;
  title: string;
  theme: string;
  month: string;
  entries: number;
  closes: string;
  prize: string;
  color: string;
  classes: string[];
  description: string;
};

export const competitions: Competition[] = [
  {
    slug: "summer-smiles",
    title: "Summer Smiles",
    theme: "Bright, happy portraits",
    month: "June 2026",
    entries: 284,
    closes: "30 Jun",
    prize: "$500 + winner rosette",
    color: "from-amber-200 to-orange-200",
    classes: ["Puppy", "Senior Sweethearts", "Best Rescue", "Action Shot"],
    description: "Celebrate beach days, garden zoomies, and sunny sofa snoozes with a warm seasonal showcase."
  },
  {
    slug: "rescue-heroes",
    title: "Rescue Heroes",
    theme: "Stories with heart",
    month: "July 2026",
    entries: 172,
    closes: "31 Jul",
    prize: "$300 shelter donation",
    color: "from-skysoft to-blue-200",
    classes: ["Glow Up", "Bonded Pair", "Golden Oldie", "People's Choice"],
    description: "A month dedicated to rescue dogs and the humans who gave them a second chapter."
  },
  {
    slug: "tiny-paws-big-attitude",
    title: "Tiny Paws, Big Attitude",
    theme: "Small dogs, huge charm",
    month: "August 2026",
    entries: 96,
    closes: "31 Aug",
    prize: "Premium treat hamper",
    color: "from-pink-200 to-rose-200",
    classes: ["Sassy Sit", "Mini Athlete", "Couch Royalty", "Best Outfit"],
    description: "For pocket rockets, lap legends, and compact canines with main-character energy."
  }
];

export const dogs = [
  { name: "Mabel", breed: "Cocker Spaniel", age: "3 years", points: 1240, badges: ["June Finalist", "Referral Star", "Rescue Fan"] },
  { name: "Otis", breed: "French Bulldog", age: "5 years", points: 860, badges: ["Top 10", "Community Pick"] }
];

export const winners = [
  { place: "1st", dog: "Luna", className: "Puppy", caption: "A golden hour grin that won the crowd.", ribbon: "bg-amber-300" },
  { place: "2nd", dog: "Biscuit", className: "Action Shot", caption: "Mid-air ears and maximum joy.", ribbon: "bg-slate-300" },
  { place: "3rd", dog: "Pepper", className: "Best Rescue", caption: "Soft eyes, strong story, beautiful portrait.", ribbon: "bg-orange-300" }
];

export const faqs = [
  ["How does entry work?", "Choose a monthly competition class, add your dog's details, and upload a photo in the mock entry flow."],
  ["Is payment built yet?", "Not yet. This MVP uses mock data only and is ready for a future checkout and backend."],
  ["How are winners picked?", "The concept supports judges' picks, community voting, class winners, and rosette-style placements."],
  ["What are Paw Points?", "Paw Points are a loyalty concept for entries, referrals, streaks, and community participation."]
];
