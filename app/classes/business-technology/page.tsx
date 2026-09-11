import {
  BriefcaseBusiness,
  Building2,
  Cpu,
  LineChart,
  MonitorCog,
} from "lucide-react";
import ModulePage from "@/components/ModulePage";

export default function BusinessTechnologyPage() {
  return (
    <ModulePage
      number="06"
      title="Business Technology"
      subtitle="CONNECT AI WITH MODERN BUSINESS"
      description="Discover how AI, data, productivity tools, and digital technology can support modern businesses and everyday workflows."
      icon={<BriefcaseBusiness className="h-28 w-28" strokeWidth={1.2} />}
      color="amber"
      topics={[
        "Technology in modern businesses",
        "AI-powered productivity",
        "Business data and insights",
        "Digital workflows",
        "Technology and decision-making",
        "Building a technology-first mindset",
      ]}
    />
  );
}