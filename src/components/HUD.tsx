export default function HUD() {
  return (
    <div className="relative z-30 w-full">
        <div className="max-w-6xl mx-auto px-4">
            <div className="font-arcade text-[10px] bg-screen/80 pixel-border px-3 py-2 text-pixel flex items-center gap-4 border-t-2 border-b-2 border-screen -mt-px">
                <span>SCORE: <span className="text-coin animate-wobble inline-block">001280</span></span>
                <span>COINS: <span className="text-coin animate-wobble inline-block">05</span></span>
                <span>LIVES: <span className="text-up animate-wobble inline-block">♥ ♥ ♥</span></span>
            </div>
      </div>
    </div>
  );
}
