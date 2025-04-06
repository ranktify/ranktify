import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  title: string
}

export default function TestimonialCard({ quote, author, title }: TestimonialCardProps) {
  return (
    <div className="flex flex-col items-center text-center rounded-xl border bg-card p-6 shadow-sm">
      <Quote className="h-8 w-8 text-purple-400 mb-4" />
      <p className="mb-4 text-muted-foreground">{quote}</p>
      <div>
        <h4 className="font-bold">{author}</h4>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
    </div>
  )
}

