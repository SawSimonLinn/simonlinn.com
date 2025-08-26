"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import PixelButton from "@/components/PixelButton";

const INITIAL_VISIBLE_PROJECTS = 6;

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(INITIAL_VISIBLE_PROJECTS);

  const showMoreProjects = () => {
    setVisibleProjects(projects.length);
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-16 md:py-24 crt">
      <h1 className="font-arcade text-xl">PROJECTS</h1>
      <p className="mt-3 text-sm">Playable builds and clean code. Select a cartridge.</p>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.slice(0, visibleProjects).map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
      {visibleProjects < projects.length && (
        <div className="mt-8 text-center">
            <PixelButton onClick={showMoreProjects}>
                VIEW MORE
            </PixelButton>
        </div>
      )}
    </main>
  );
}
