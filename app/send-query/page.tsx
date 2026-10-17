import type { Metadata } from "next";
import SendQueryForm from "@/components/SendQueryForm";

export const metadata: Metadata = {
  title: "Send Query",
  description: "Send a question or class enquiry to Aarushi Infotech AI Classes.",
};

export default function SendQueryPage() {
  return <SendQueryForm attachmentsEnabled={process.env.EMAILJS_ATTACHMENTS_ENABLED === "true"} />;
}
