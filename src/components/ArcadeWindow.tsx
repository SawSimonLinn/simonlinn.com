import { cn } from "@/lib/utils";

type ArcadeWindowProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function ArcadeWindow({ title, children, className }: ArcadeWindowProps) {
  return (
    <div className={cn("bg-screen pixel-border", className)}>
      <div className="bg-cabinet text-pixel flex items-center justify-between px-3 py-2 font-arcade text-[10px] border-b-2 border-black">
        <span>{title}</span>
        <div className="flex gap-1.5">
          <span className="w-3 h-3 bg-coin pixel-border" />
          <span className="w-3 h-3 bg-cyan pixel-border" />
          <span className="w-3 h-3 bg-magenta pixel-border" />
        </div>
      </div>
      <div className="p-4 md:p-6">{children}</div>
    </div>
  );
}
