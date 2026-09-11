import {
  Database,
  FileText,
  FolderOpen,
  Lock,
  Search,
} from "lucide-react";
import ModulePage from "@/components/ModulePage";

export default function DataHandlingPage() {
  return (
    <ModulePage
      number="02"
      title="Data Handling"
      subtitle="ORGANIZE. UNDERSTAND. PROTECT."
      description="Learn how digital data is collected, organized, stored, managed, and handled responsibly in modern technology environments."
      icon={<Database className="h-28 w-28" strokeWidth={1.2} />}
      color="blue"
      topics={[
        "Understanding digital data",
        "Data collection and organization",
        "Files, folders and structured data",
        "Data storage fundamentals",
        "Data quality and accuracy",
        "Safe and responsible data handling",
      ]}
    />
  );
}