import ArcadeWindow from "@/components/ArcadeWindow";
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Aung Ko Latt",
    company: "Product Designer, DevBridge Myanmar",
    quote: "His attention to UI detail and responsiveness is top-notch. Simon takes design seriously and it shows.",
    rating: 5,
  },
  {
    name: "Nandar Moe",
    company: "Project Manager, Tech Wave Co.",
    quote: "I watched Simon grow as a developer and a leader. He supports his team and always brings positive energy.",
    rating: 5,
  },
  {
    name: "Myo Min Htut",
    company: "Backend Engineer, CodeStream Myanmar",
    quote: "Simon’s Git skills and team workflow understanding are excellent. He kept our repo clean and everyone on track.",
    rating: 5,
  },
  {
    name: "Ei Mon Kyaing",
    company: "UX Specialist, Creative Flow",
    quote: "Every time I work with Simon, I’m reminded of his creativity and dedication. He’s not just skilled—he’s passionate.",
    rating: 5,
  },
  {
    name: "Thiri Htun",
    company: "Frontend Developer, Yangon Tech Circle",
    quote: "Simon’s consistency and calm problem-solving energy made our entire sprint smooth. He’s someone you want on your team.",
    rating: 5,
  },
];

const renderStars = (rating: number) => {
  return Array(rating).fill(0).map((_, i) => (
    <Star key={i} className="w-4 h-4 text-coin fill-coin" />
  ));
}

export default function TestimonialsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 md:py-24 crt">
      <h1 className="font-arcade text-xl">TESTIMONIALS</h1>
      <p className="mt-3 text-sm">What clients and collaborators say about my work.</p>
      <div className="mt-8 grid md:grid-cols-1 gap-6">
        {testimonials.map(t => (
          <ArcadeWindow key={t.name} title={`MESSAGE FROM: ${t.name}`}>
            <blockquote className="text-sm italic">"{t.quote}"</blockquote>
            <div className="mt-3 flex justify-between items-center">
                <p className="font-arcade text-xs text-cyan">{t.name}, {t.company}</p>
                <div className="flex gap-1">{renderStars(t.rating)}</div>
            </div>
          </ArcadeWindow>
        ))}
      </div>
    </main>
  );
}
