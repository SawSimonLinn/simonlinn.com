import ArcadeWindow from "@/components/ArcadeWindow";
import PixelButton from "@/components/PixelButton";
import ClipboardCopy from "@/components/ClipboardCopy";

export default function Contact() {
  return (
    <main className="max-w-xl mx-auto px-4 py-16 md:py-24 crt">
      <ArcadeWindow title="CONTACT — INSERT COIN">
        <p className="text-sm">For freelance or roles: a quick call or DM works great. Have an idea? Press Start.</p>
        <ul className="mt-4 space-y-3 text-sm">
          <li>
            <ClipboardCopy textToCopy="sawsimonlinn@gmail.com" />
          </li>
          <li className="flex items-center gap-2">
            <span className="text-pixel/70">Website:</span>
            <a className="text-cyan underline hover:text-magenta transition-colors" href="https://sawsimonlinn.com" target="_blank" rel="noopener noreferrer">sawsimonlinn.com</a>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-pixel/70">LinedIn:</span>
            <a className="text-cyan underline hover:text-magenta transition-colors" href="https://www.linkedin.com/in/sawsimonlinn/" target="_blank" rel="noopener noreferrer">linkedin.com/in/sawsimonlinn/</a>
          </li>

          <li className="flex items-center gap-2">
            <span className="text-pixel/70">GitHub:</span>
            <a className="text-cyan underline hover:text-magenta transition-colors" href="https://github.com/SawSimonLinn" target="_blank" rel="noopener noreferrer">github.com/SawSimonLinn</a>
          </li>
        </ul>
        <div className="mt-6 flex gap-3">
          <PixelButton className="bg-cyan text-cabinet" href="mailto:simon@sawsimonlinn.com">SEND MESSAGE</PixelButton>
          <PixelButton href="/projects">VIEW WORK</PixelButton>
        </div>
      </ArcadeWindow>
    </main>
  );
}
