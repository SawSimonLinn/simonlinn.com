"use client";
import { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';

export default function ClipboardCopy({ textToCopy }: { textToCopy: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="flex items-center gap-2 text-sm bg-cabinet pixel-border p-2">
      <Mail className="w-4 h-4 text-cyan" />
      <a className="text-cyan underline flex-grow hover:text-magenta transition-colors" href={`mailto:${textToCopy}`}>{textToCopy}</a>
      <button onClick={handleCopy} className="p-1.5 bg-screen pixel-border text-pixel hover:bg-magenta focus-ring transition-colors">
        {copied ? <Check className="w-4 h-4 text-up" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  );
}
