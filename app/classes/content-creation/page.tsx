import {
  Clapperboard,
  ImageIcon,
  PenTool,
  Sparkles,
  Video,
} from "lucide-react";
import ModulePage from "@/components/ModulePage";

export default function ContentCreationPage() {
  return (
    <ModulePage
      number="04"
      title="Content Creation"
      subtitle="TURN IDEAS INTO DIGITAL EXPERIENCES"
      description="Explore how modern AI tools can support creative workflows for writing, visual concepts, presentations, videos, and digital content."
      icon={<Sparkles className="h-28 w-28" strokeWidth={1.2} />}
      color="pink"
      topics={[
        "AI-assisted writing",
        "Creative brainstorming",
        "Visual content concepts",
        "Presentation creation",
        "Video and multimedia workflows",
        "Responsible AI-assisted creativity",
      ]}
    />
  );
}