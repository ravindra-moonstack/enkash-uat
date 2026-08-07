import { Monster } from "@/src/types"

const monsters: Monster[] = [
  {
    id: 1,
    name: "Complica",
    tagline: "As The Integration Nightmare",
    image: "/images/monsters-of-checkout/monsters/green_monster2.png",
    accent: "#8BC53F",
    btnGradient:
      "rgba(0,0,0,0) 0deg, #CFDA0B 120deg, #00BF9E 180deg, rgba(0,0,0,0) 360deg",
    btnColor1: "#CFDA0B",
    btnColor2: "#00BF9E",
    expandedBg: "url('/images/camplica_ecpanded_bg.webp')",
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
      "rgba(0,0,0,0) 0deg, #FAC696 120deg, #EAD3BE 180deg, rgba(0,0,0,0) 360deg",
    btnColor1: "#FAC696",
    btnColor2: "#EAD3BE",
    expandedBg: "url('/images/cream_ecpanded_bg.webp')",
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
      "rgba(0,0,0,0) 0deg, #F2C66B 120deg, #FFF317 180deg, rgba(0,0,0,0) 360deg",
    btnColor1: "#F2C66B",
    btnColor2: "#FFF317",
    expandedBg: "url('/images/yellow_ecpanded_bg.webp')",
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
      "rgba(0,0,0,0) 0deg, #FF8B5B 120deg, #FF4C62 180deg, rgba(0,0,0,0) 360deg",
    btnColor1: "#FF8B5B",
    btnColor2: "#FF4C62",
    expandedBg: "url('/images//orange_ecpanded_bg.webp')",
    description:
      "Traps every question in an infinite chatbot loop. You never reach a human; nothing is ever solved.",
    quote: "“I understand your concern.”",
    subtext: "He never actually understands.",
    audio: "/monsters/audio/complica-4.mp3",
  },
]
export { monsters }
