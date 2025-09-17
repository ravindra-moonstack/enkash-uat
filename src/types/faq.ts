export interface TAnswerItemProp {
  heading?: string
  bullets?: string[]
}

export interface TFAQProps {
  question: string
  answerHTML?: React.ReactNode
  answer?: TAnswerItemProp[]
  answerVisible?: boolean
  onToggleAnswerVisibility?: () => void
  index?: number
}
