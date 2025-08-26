'use server';
/**
 * @fileOverview An AI agent that suggests alternative layouts based on content priority and user interaction heatmaps.
 *
 * - optimizeLayout - A function that handles the layout optimization process.
 * - OptimizeLayoutInput - The input type for the optimizeLayout function.
 * - OptimizeLayoutOutput - The return type for the optimizeLayout function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeLayoutInputSchema = z.object({
  contentPriority: z
    .string()
    .describe("Description of content priority for the portfolio."),
  userInteractionHeatmaps: z
    .string()
    .describe("Description of user interaction heatmaps on the portfolio."),
});
export type OptimizeLayoutInput = z.infer<typeof OptimizeLayoutInputSchema>;

const OptimizeLayoutOutputSchema = z.object({
  suggestedLayout: z.string().describe("Suggested alternative layout optimized for arcade-style interfaces."),
});
export type OptimizeLayoutOutput = z.infer<typeof OptimizeLayoutOutputSchema>;

export async function optimizeLayout(input: OptimizeLayoutInput): Promise<OptimizeLayoutOutput> {
  return optimizeLayoutFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeLayoutPrompt',
  input: {schema: OptimizeLayoutInputSchema},
  output: {schema: OptimizeLayoutOutputSchema},
  prompt: `You are an expert web developer specializing in optimizing layouts for arcade-style interfaces. Based on the content priority and user interaction heatmaps, suggest an alternative layout that improves user engagement and content discoverability.

Content Priority: {{{contentPriority}}}
User Interaction Heatmaps: {{{userInteractionHeatmaps}}}

Consider these design principles for arcade-style interfaces:
- High contrast color schemes
- Prominent use of pixel art and retro fonts
- Clear visual hierarchy with attention-grabbing elements
- Intuitive navigation and user-friendly controls

Provide a detailed suggestion for the new layout.`,
});

const optimizeLayoutFlow = ai.defineFlow(
  {
    name: 'optimizeLayoutFlow',
    inputSchema: OptimizeLayoutInputSchema,
    outputSchema: OptimizeLayoutOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
