
import ArcadeWindow from "@/components/ArcadeWindow";

const workHistory = [
  {
    role: "Founder & Lead Developer",
    company: "Code Heaven Studio",
    period: "Feb 2024 - Present",
    tasks: [
      "Led the design and development of modern, responsive websites, ensuring SEO optimization and user engagement.",
      "Implemented AI-driven features, enhancing project delivery and client satisfaction through innovative solutions.",
      "Guided projects from concept to launch, maintaining transparency and collaboration with clients throughout the process."
    ]
  },
  {
    role: "Full Stack Developer",
    company: "HOPE Private School",
    period: "May 2025 – Aug 2025",
    tasks: [
      "Managed 100+ monthly payment records using Appwrite with full CRUD capabilities, ensuring data integrity and seamless UI integration.",
      "Reduced frontend loading time by 1.2 seconds by optimizing Next.js rendering, image compression, and component–level lazy loading.",
      "Improved SEO visibility by 35% through semantic HTML, dynamic routing, and enhanced meta tagging."
    ]
  },
  {
    role: "Full Stack Developer",
    company: "Blue Bird Haus Sushi",
    period: "Apr 2025 – May 2025",
    tasks: [
      "Designed and deployed a personal portfolio site to showcase professional projects, reducing recruiter drop–off by building an SEO–optimized and fully responsive layout with Tailwind CSS and Next.js.",
      "Enhanced project discoverability and navigation by implementing dynamic routing with clean, smooth–scrolling animations and page transitions.",
      "Reduced deployment issues by 30% through build optimization and fine–tuning settings on Vercel."
    ]
  },
  {
    role: "Full Stack Developer",
    company: "Eco Challenge Web App",
    period: "Mar 2025 – Mar 2025",
    tasks: [
      "Led a 4–member team and solely developed the backend using Node.js and Express for secure, scalable user challenge tracking.",
      "Designed a responsive UI from scratch in Figma and deployed a WCAG–compliant responsive UI.",
      "Built scalable APIs and coordinated GitHub workflow with CI/CD for automated deployments."
    ]
  },
  {
    role: "Software Engineer",
    company: "TripleTen",
    period: "Apr 2024 - Present",
    tasks: [
      "Completed a hands-on apprenticeship in the TripleTen Software Engineering Program, focusing on real-world projects.",
      "Collaborated in team code jams to enhance coding skills and foster teamwork.",
      "Developed full-stack applications utilizing React, Node.js, and MongoDB, improving my technical proficiency.",
      "Received mentorship from experienced engineers, sharpening my problem-solving abilities and understanding of web development workflows."
    ]
  },
  {
    role: "Video Editor",
    company: "International Youth Fellowship, IYF",
    period: "Feb 2019 - Jan 2020",
    tasks: [
      "Edited and produced captivating music videos and social media content tailored for international youth audiences.",
      "Applied advanced video color grading techniques to elevate production quality and enhance visual storytelling.",
      "Designed engaging visual assets and layouts using Figma and Adobe Creative Suite, contributing to brand identity.",
      "Developed impactful multimedia content to support skill development initiatives, fostering creativity among youth."
    ]
  },
  {
    role: "UI/UX developer",
    company: "International Youth Fellowship, IYF",
    period: "Dec 2015 - Jan 2019",
    tasks: [
      "Developed compelling e-commerce designs and marketing visuals, driving online sales growth.",
      "Designed and optimized UI/UX layouts for the company website using Figma, enhancing user experience.",
      "Created engaging digital assets with Adobe Creative Suite for web and social media platforms.",
      "Managed social media graphics to ensure a cohesive brand identity across all channels."
    ]
  },
  {
    role: "Graphic Designer",
    company: "International Youth Fellowship, IYF",
    period: "Jan 2013 - Dec 2015",
    tasks: [
      "Designed eye-catching flyers, billboards, and event tickets to enhance marketing campaigns.",
      "Developed custom templates to ensure brand consistency across various projects.",
      "Collaborated with cross-functional teams to produce engaging print and visual materials.",
      "Delivered high-quality designs under tight deadlines, showcasing strong layout and typography skills."
    ]
  }
];

export default function WorkHistoryPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 md:py-24 crt">
      <h1 className="font-arcade text-xl">WORK HISTORY</h1>
      <p className="mt-3 text-sm">A record of my professional quests and achievements.</p>
      <div className="mt-8 space-y-6">
        {workHistory.map(job => (
          <ArcadeWindow key={`${job.company}-${job.role}`} title={`${job.role}`}>
            <div className="flex justify-between items-center">
              <h3 className="font-arcade text-sm text-coin">{job.company}</h3>
              <span className="font-arcade text-[10px] text-pixel/70">{job.period}</span>
            </div>
            <ul className="mt-3 list-disc list-inside space-y-1 text-sm pl-2">
              {job.tasks.map(task => <li key={task}>{task}</li>)}
            </ul>
          </ArcadeWindow>
        ))}
      </div>
    </main>
  );
}
