import { Project } from "@/lib/projects";
import Image from "next/image";
import PixelButton from "./PixelButton";

export default function ProjectCard({ title, tags, desc, hrefDemo, hrefCode, slug, coverImage }: Project) {
  return (
    <div className="bg-screen pixel-border p-4 flex flex-col animate-pop">
        <div className="pixel-border mb-4">
            <Image 
                src={coverImage}
                alt={`${title} pixel art cover`}
                width={600}
                height={400}
                className="w-full h-auto"
                data-ai-hint="pixel art game"
            />
        </div>
      <h3 className="font-arcade text-sm text-coin">{title}</h3>
      <p className="mt-2 text-sm flex-grow">{desc}</p>
      <ul className="mt-3 flex flex-wrap gap-2 text-[11px]">
        {tags?.map((t: string) => (
          <li key={t} className="bg-cabinet pixel-border px-2 py-1">{t}</li>
        ))}
      </ul>
      <div className="mt-4 flex flex-col sm:flex-row gap-3">
        {hrefDemo && <PixelButton href={hrefDemo}>PLAY DEMO</PixelButton>}
        {hrefCode && <PixelButton className="bg-cyan text-cabinet" href={hrefCode}>VIEW CODE</PixelButton>}
        {slug && <PixelButton className="bg-up text-cabinet" href={`/projects/${slug}`}>VIEW DETAILS</PixelButton>}
      </div>
    </div>
  );
}
