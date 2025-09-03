export interface FAQProps {
  question: string
  answerHTML?: React.ReactNode
  answer?: {
    heading?: string
    bullets?: string[]
  }[]
  answerVisible?: boolean
  onToggleAnswerVisibility?: () => void
  index: number
}
