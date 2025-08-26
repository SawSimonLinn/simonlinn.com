"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { optimizeLayout, OptimizeLayoutInput } from "@/ai/flows/optimize-layout";
import ArcadeWindow from "@/components/ArcadeWindow";
import PixelButton from "@/components/PixelButton";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  contentPriority: z.string().min(10, "Please describe the content priority in more detail."),
  userInteractionHeatmaps: z.string().min(10, "Please describe the user interaction heatmaps in more detail."),
});

export default function AiOptimizerPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestedLayout, setSuggestedLayout] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OptimizeLayoutInput>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<OptimizeLayoutInput> = async (data) => {
    setIsLoading(true);
    setError(null);
    setSuggestedLayout(null);
    try {
      const result = await optimizeLayout(data);
      setSuggestedLayout(result.suggestedLayout);
    } catch (e: any) {
      setError("Failed to get suggestion. Please try again.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-16 md:py-24 crt">
      <ArcadeWindow title="AI LAYOUT OPTIMIZER">
        <h1 className="font-arcade text-xl text-cyan">Optimize Your Layout</h1>
        <p className="mt-2 text-sm">
          Describe your portfolio's content and user behavior. Our AI will suggest a new layout optimized for an arcade-style interface.
        </p>
        
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <div>
            <Label htmlFor="contentPriority" className="font-arcade text-pixel text-xs tracking-wider">Content Priority</Label>
            <Textarea 
              id="contentPriority" 
              {...register("contentPriority")} 
              placeholder="e.g., 'Most important is the project grid, followed by the contact button. The about section is least important.'"
              className="mt-2 bg-cabinet text-pixel pixel-border focus-ring"
              rows={3}
            />
            {errors.contentPriority && <p className="mt-1 text-danger text-xs font-arcade">{errors.contentPriority.message}</p>}
          </div>

          <div>
            <Label htmlFor="userInteractionHeatmaps" className="font-arcade text-pixel text-xs tracking-wider">User Interaction Heatmaps</Label>
            <Textarea 
              id="userInteractionHeatmaps" 
              {...register("userInteractionHeatmaps")}
              placeholder="e.g., 'Users click most on project demos. The about page has very few clicks. The contact form gets high engagement.'"
              className="mt-2 bg-cabinet text-pixel pixel-border focus-ring"
              rows={3}
            />
            {errors.userInteractionHeatmaps && <p className="mt-1 text-danger text-xs font-arcade">{errors.userInteractionHeatmaps.message}</p>}
          </div>

          <PixelButton type="submit" disabled={isLoading} className="bg-cyan text-cabinet">
            {isLoading ? "Analyzing..." : "Get Suggestion"}
          </PixelButton>
        </form>

        {error && (
            <div className="mt-6 p-4 bg-danger/20 text-danger pixel-border">
                <p className="font-arcade text-sm">Error</p>
                <p className="mt-2 text-xs">{error}</p>
            </div>
        )}

        {suggestedLayout && (
          <div className="mt-6">
              <h2 className="font-arcade text-lg text-up">Suggested Layout</h2>
              <div className="mt-4 p-4 bg-cabinet pixel-border space-y-3 text-sm">
                  {suggestedLayout.split('\n').map((line, index) => (
                    line.trim() && <p key={index}>{line}</p>
                  ))}
              </div>
          </div>
        )}

      </ArcadeWindow>
    </main>
  );
}
