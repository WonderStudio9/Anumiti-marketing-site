import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export function TestimonialCard({ quote, name, title, company }: TestimonialCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <Quote className="mb-4 h-8 w-8 text-teal-300" />
      <p className="mb-6 text-gray-700 leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <div>
        <div className="font-semibold text-navy">{name}</div>
        <div className="text-sm text-gray-500">
          {title}, {company}
        </div>
      </div>
    </div>
  );
}
