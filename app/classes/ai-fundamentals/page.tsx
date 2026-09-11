import {
  Brain,
  Cpu,
  Lightbulb,
  Network,
  Sparkles,
} from "lucide-react";
import ModulePage from "@/components/ModulePage";

export default function AIFundamentalsPage() {
  return (
    <ModulePage
      number="01"
      title="AI Fundamentals"
      subtitle="UNDERSTAND THE INTELLIGENCE BEHIND MODERN AI"
      description="Build a strong foundation in Artificial Intelligence, understand how modern AI systems work, and discover where AI is used in the real world."
      icon={<Brain className="h-28 w-28" strokeWidth={1.2} />}
      color="cyan"
      topics={[
        "What is Artificial Intelligence?",
        "How AI systems work",
        "Machine Learning basics",
        "Generative AI fundamentals",
        "AI tools and applications",
        "Real-world uses of AI",
      ]}
    />
  );
}