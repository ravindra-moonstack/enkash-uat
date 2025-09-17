import {
  voicesEnkash1,
  voicesEnkash2,
  voicesEnkash3,
  voicesEnkash4,
  voicesEnkash5,
} from "./img"

interface Testimonial {
  name: string
  role: string
  text: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    name: "Pramod Dhuriya",
    role: "Customer Support",
    text: "Being part of EnKash for over six years has been an incredible journey of learning, collaboration, and innovation. I’m proud to contribute to a company that values people, ideas, and growth every single day.",
    image: voicesEnkash1.src,
  },
  {
    name: "Kanishk Goyal",
    role: "Engineering",
    text: "From starting as an intern to becoming a full-time team member, my journey at EnKash has been truly rewarding. Working on innovative fintech solutions, guided by supportive mentors, has helped me sharpen my skills.",
    image: voicesEnkash2.src,
  },
  {
    name: "Dinesh Parmar",
    role: "Reconciliation",
    text: "I’m truly grateful to everyone at EnKash for contributing to my journey. The support, collaboration, and opportunities here have helped me grow in confidence, sharpen my skills, and work seamlessly as part of a great team. It’s been an incredible experience.",
    image: voicesEnkash3.src,
  },
  {
    name: "Saraswati Keswani",
    role: "Human Resources",
    text: "From the first employee to today, it’s been an inspiring journey, witnessing EnKash grow, shaping its vision, and thriving in a culture where every idea counts and every milestone matters",
    image: voicesEnkash4.src,
  },
  {
    name: "Vishal Singh",
    role: "Sales Operations",
    text: "In seven years, I’ve grown from our early days to today - guided by great mentors, working with talented colleagues, solving challenges, and delivering impactful solutions. It’s been inspiring, and I’m excited for what’s ahead.",
    image: voicesEnkash5.src,
  },
]

export { testimonials }
