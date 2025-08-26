import ArcadeWindow from "@/components/ArcadeWindow";
import PixelButton from "@/components/PixelButton";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16 crt">
      <section className="text-center">
        <h1 className="font-arcade text-2xl md:text-3xl">
          — SAW SIMON LINN —<br /> <span className="text-cyan">FRONTEND</span>{" "}
          <span className="text-magenta">DEVELOPER</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto">
          I build fast, clear, and playful web apps with React, Next.js, and
          Tailwind. Design-driven. Pixel-precise. Ready to level up your
          project.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <PixelButton href="/projects">PRESS START</PixelButton>
          <PixelButton className="bg-cyan text-cabinet" href="/contact">
            INSERT COIN
          </PixelButton>
        </div>
      </section>

      <section className="mt-16">
        <ArcadeWindow title="LATEST RUN">
          <ul className="grid md:grid-cols-3 gap-4 text-sm">
            <li>
              ✅{" "}
              <a
                href="https://www.codeheavenstudio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline poninter hover:text-cyan transition"
              >
                Deployed: Code Heaven Studio
              </a>
            </li>
            <li>
              🎮{" "}
              <a
                href="https://bluebirdhaus.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline poninter hover:text-cyan transition"
              >
                Building: Blue Bird Haus Sushi
              </a>
            </li>
            <li>
              ⭐{" "}
              <a
                href="https://github.com/SawSimonLinn/pixel-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline poninter hover:text-cyan transition"
              >
                Favorite: This Portfolio Site
              </a>
            </li>
          </ul>
        </ArcadeWindow>
      </section>

      <section className="mt-16 max-w-sm mx-auto">
        <ArcadeWindow title="HIGH SCORES">
          <ul className="space-y-2 text-xs font-arcade">
            <li className="flex justify-between items-center">
              <span>1. SL</span>
              <span className="text-cyan">95000</span>
            </li>
            <li className="flex justify-between items-center">
              <span>2. MAX</span>
              <span className="text-cyan">88000</span>
            </li>
            <li className="flex justify-between items-center">
              <span>3. EVA</span>
              <span className="text-cyan">85000</span>
            </li>
          </ul>
        </ArcadeWindow>
      </section>
    </main>
  );
}
