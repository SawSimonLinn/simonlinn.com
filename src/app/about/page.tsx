import ArcadeWindow from "@/components/ArcadeWindow";
import Image from "next/image";
import PixelButton from "@/components/PixelButton";
import { Check } from "lucide-react";

const whatIBring = [
    "A sharp eye for UI/UX, refined over 6+ years in graphic design.",
    "Modern frontend skills in React, Next.js, and TypeScript.",
    "Full-stack experience with a passion for building great user interfaces.",
    "Discipline and focus, honed from years of experience as a chef.",
    "A collaborative spirit, eager to build products that make an impact."
];

const techStack = {
    "Frontend": ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML & CSS", "Tailwind CSS"],
    "Backend": ["Node.js", "Express", "MongoDB", "REST APIs"],
    "Tools": ["Git & GitHub", "Figma", "Postman", "Vercel & Netlify", "Sanity.io", "Appwrite.io", "Sentry.io"],
    "Other": ["Responsive Design", "UI/UX Thinking", "Agile Workflow", "Video Editing"]
};


export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 md:py-24 crt">
      <ArcadeWindow title="PLAYER 1 — PROFILE">
        <div className="md:flex md:gap-8">
          <div className="md:w-1/3 text-center mb-8 md:mb-0">
            <div className="inline-block p-2 bg-cabinet pixel-border">
                <Image 
                    src="/profile/itsme.png"
                    alt="Pixel art portrait of Simon Linn"
                    width={200}
                    height={200}
                    className="pixel-border"
                    data-ai-hint="pixel art portrait"
                />
            </div>
            <p className="font-arcade text-lg text-cyan mt-4">SAW SIMON LINN</p>
            <p className="text-xs text-pixel/80">Frontend Developer</p>
          </div>

          <div className="md:w-2/3 space-y-4 text-sm">
            <p>
                I’m Simon, a frontend developer with a background in design and video editing. I’ve built fullstack projects like a restaurant ordering app with an admin menu panel and a franchise performance dashboard using React, Next.js, and Appwrite.
            </p>
            <p>
                With my design background, I like to build clean, easy-to-use web apps that people actually enjoy. Outside of coding, I love design challenges and finding creative solutions.
            </p>
            <p>
                Right now, I’m looking for frontend developer opportunities where I can bring both my technical skills and design eye to a fast-moving team.
            </p>
          </div>
        </div>
        
        <div className="mt-12">
            <h2 className="font-arcade text-lg text-up">What I Bring to the Table</h2>
            <ul className="mt-4 space-y-2 text-sm">
                {whatIBring.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-up mt-0.5 shrink-0" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>

        <div className="mt-12">
            <h2 className="font-arcade text-lg text-up">My Tech Stack</h2>
            <div className="mt-4 space-y-4">
                {Object.entries(techStack).map(([category, techs]) => (
                    <div key={category}>
                        <h3 className="font-arcade text-sm text-cyan tracking-widest">{category}</h3>
                        <ul className="mt-2 flex flex-wrap gap-2 text-xs">
                            {techs.map((tech) => (
                                <li key={tech} className="bg-cabinet pixel-border px-2 py-1">
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        <div className="mt-12 flex gap-4 justify-center">
            <PixelButton href="/contact" className="bg-cyan text-cabinet">CONTACT ME</PixelButton>
            <PixelButton href="https://www.linkedin.com/in/sawsimonlinn/" target="_blank" rel="noopener noreferrer">LINKEDIN</PixelButton>
        </div>
      </ArcadeWindow>
    </main>
  );
}
