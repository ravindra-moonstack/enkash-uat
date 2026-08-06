import { Monster } from "@/src/types"

const monsters: Monster[] = [
  {
    id: 1,
    name: "Complica",
    tagline: "As The Integration Nightmare",
    image: "/images/monsters-of-checkout/monsters/spiky_hair.png",
    accent: "#8BC53F",
    btnGradient:
      "linear-gradient(var(--angle), #CFDA0B 2.23%, #00BF9E 34.49%, rgba(28, 90, 244, 0) 103.44%)",
    expandedBg: "url('/images/camplica_expanded_bg.webp')",
    description:
      "Broken docs, tangled APIs, errors that say nothing. Turns a three-day integration into a three-week one.",
    quote: "“It depends… it's a little complicated.”",
    subtext: "She never gives a direct answer.",
    audio: "/monsters/audio/complica-1.mp3",
  },
  {
    id: 2,
    name: "Lazlo",
    tagline: "As The Checkout Killer",
    image: "/images/monsters-of-checkout/monsters/cream_monster.png",
    accent: "#D8CFC4",
    btnGradient:
      "linear-gradient(var(--angle), #FAC696 2.23%, #EAD3BE 34.49%, rgba(253, 205, 118, 0) 103.44%)",
    expandedBg:
      "url('/images/monsters-Integrationof-checkout/camplica_expanded_bg.png')",
    description:
      "Makes loading bars crawl, and carts vanish. Customers give up before they ever finish paying.",
    quote: "“One second…”",
    subtext: "That second becomes forever.",
    audio: "/monsters/audio/complica-2.mp3",
  },
  {
    id: 3,
    name: "PayNo",
    tagline: "As The Payment-Failure Boss",
    image: "/images/monsters-of-checkout/monsters/yellow_monster.png",
    accent: "#F2C230",
    btnGradient:
      "linear-gradient(var(--angle), #F2C66B 2.23%, #FFF317 34.49%, rgba(242, 198, 107, 0) 103.44%)",
    expandedBg: "url('/images/monsters-of-checkout/camplica_expanded_bg.png')",
    description:
      "The final boss. Kills the sale at the worst possible moment and high-fives the other monsters after every decline.",
    quote: "“Transaction failed.”",
    subtext: "He says it proudly.",
    audio: "/monsters/audio/complica-3.mp3",
  },
  {
    id: 4,
    name: "Botzila",
    tagline: "As The Human-Support Destroyer",
    image: "/images/monsters-of-checkout/monsters/orange_monster.png",
    accent: "#F2793A",
    btnGradient:
      "linear-gradient(var(--angle), #FF8B5B 2.23%, #FF4C62 34.49%, rgba(255, 139, 91, 0) 103.44%)",
    expandedBg: "url('/images/monsters-of-checkout/camplica_expanded_bg.png')",
    description:
      "Traps every question in an infinite chatbot loop. You never reach a human; nothing is ever solved.",
    quote: "“I understand your concern.”",
    subtext: "He never actually understands.",
    audio: "/monsters/audio/complica-4.mp3",
  },
]
export { monsters }
