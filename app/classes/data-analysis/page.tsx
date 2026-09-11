import {
  BarChart3,
  Calculator,
  ChartNoAxesCombined,
  LineChart,
  TrendingUp,
} from "lucide-react";
import ModulePage from"@/components/ModulePage";

export default function DataAnalysisPage() {
  return (
    <ModulePage
      number="03"
      title="Data Analysis"
      subtitle="TURN DATA INTO UNDERSTANDING"
      description="Learn how to examine information, discover patterns, interpret results, and communicate useful insights from data."
      icon={<BarChart3 className="h-28 w-28" strokeWidth={1.2} />}
      color="violet"
      topics={[
        "Introduction to data analysis",
        "Finding patterns in data",
        "Tables and data organization",
        "Charts and visualizations",
        "Basic analytical thinking",
        "Turning findings into insights",
      ]}
    />
  );
}