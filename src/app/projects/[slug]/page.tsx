
import { getProjectBySlug, projects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import ArcadeWindow from '@/components/ArcadeWindow';
import PixelButton from '@/components/PixelButton';
import Image from 'next/image';
import Link from 'next/link';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

type ProjectDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map(project => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-16 md:py-24 crt">
        <div className="mb-8">
            <Link href="/projects" className="font-arcade text-sm text-cyan hover:text-magenta transition-colors">
                &lt; ALL PROJECTS
            </Link>
        </div>

      <ArcadeWindow title={`PROJECT: ${project.title.toUpperCase()}`}>
        <div className="space-y-6">
            <Carousel className="w-full pixel-border">
                <CarouselContent>
                    {project.images.map((imgSrc, index) => (
                    <CarouselItem key={index}>
                        <Image
                            src={imgSrc}
                            alt={`${project.title} screenshot ${index + 1}`}
                            width={600}
                            height={400}
                            className="w-full h-auto"
                            data-ai-hint="screenshot application"
                        />
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
            </Carousel>

            <h1 className="font-arcade text-xl text-coin">{project.title}</h1>
            
            <ul className="flex flex-wrap gap-2 text-xs">
                {project.tags.map((tag) => (
                <li key={tag} className="bg-cabinet pixel-border px-2 py-1">
                    {tag}
                </li>
                ))}
            </ul>

            <p className="text-sm leading-relaxed">{project.longDesc}</p>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h2 className="font-arcade text-lg text-up">Challenges</h2>
                    <ul className="mt-3 list-disc list-inside space-y-1 text-sm pl-2">
                        {project.challenges.map((challenge, i) => (
                            <li key={i}>{challenge}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="font-arcade text-lg text-up">Learnings</h2>
                    <ul className="mt-3 list-disc list-inside space-y-1 text-sm pl-2">
                        {project.learnings.map((learning, i) => (
                            <li key={i}>{learning}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mt-6">
                <h2 className="font-arcade text-lg text-up">Outcomes &amp; Key Results</h2>
                <ul className="mt-3 list-disc list-inside space-y-1 text-sm pl-2">
                    {project.outcomes.map((outcome, i) => (
                        <li key={i}>{outcome}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                {project.hrefDemo && <PixelButton href={project.hrefDemo}>PLAY DEMO</PixelButton>}
                {project.hrefCode && <PixelButton className="bg-cyan text-cabinet" href={project.hrefCode}>VIEW CODE</PixelButton>}
            </div>
        </div>
      </ArcadeWindow>
    </main>
  );
}
