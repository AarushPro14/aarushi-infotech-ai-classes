import type { Metadata } from "next";
import ClassBookingForm from "@/components/ClassBookingForm";

export const metadata: Metadata = {
  title: "Book a Class",
  description: "Choose your preferred Aarushi Infotech AI and technology classes and send a booking request.",
};

export default function BookingPage() {
  return <ClassBookingForm />;
}
