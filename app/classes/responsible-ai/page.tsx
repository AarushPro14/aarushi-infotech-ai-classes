import {
  Eye,
  HeartHandshake,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";
import ModulePage from "@/components/ModulePage";

export default function ResponsibleAIPage() {
  return (
    <ModulePage
      number="05"
      title="Responsible AI"
      subtitle="USE AI WITH KNOWLEDGE AND RESPONSIBILITY"
      description="Understand the importance of privacy, fairness, transparency, human judgment, and responsible decision-making when using AI."
      icon={<ShieldCheck className="h-28 w-28" strokeWidth={1.2} />}
      color="emerald"
      topics={[
        "AI ethics fundamentals",
        "Privacy and personal data",
        "Bias and fairness",
        "Human judgment and oversight",
        "Understanding AI limitations",
        "Responsible AI usage",
      ]}
    />
  );
}