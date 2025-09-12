import styles from "./logo-slider.module.scss"

import {
  britishAirwaysFilled,
  rakutenFilled,
  starbucksFilled,
  prystnCareFilled,
  dtdcFilled,
  relianceFilled,
  mahindraFinancsFilled,
  macdonaldsFilled,
  pnbHousingFilled,
  adidasFilled,
  tataAigFilled,
  vijaySalesFilled,
  behrousFilled,
} from "./img"

const coloredLogos = [
  britishAirwaysFilled,
  rakutenFilled,
  starbucksFilled,
  prystnCareFilled,
  dtdcFilled,
  relianceFilled,
  mahindraFinancsFilled,
  macdonaldsFilled,
  pnbHousingFilled,
  adidasFilled,
  tataAigFilled,
  vijaySalesFilled,
  behrousFilled,
]

const logos = [
  {
    filled: britishAirwaysFilled,
    alt: "British Airways",
    className: styles.britishAirways,
  },
  { filled: rakutenFilled, alt: "Rakuten", className: styles.rakuten },
  { filled: starbucksFilled, alt: "Starbucks", className: styles.starbucks },
  {
    filled: prystnCareFilled,
    alt: "Pristyn Care",
    className: styles.prystnCare,
  },
  { filled: dtdcFilled, alt: "DTDC", className: styles.dtdc },
  { filled: relianceFilled, alt: "Reliance", className: styles.reliance },
  {
    filled: mahindraFinancsFilled,
    alt: "Mahindra Finance",
    className: styles.mahindraFinance,
  },
  { filled: macdonaldsFilled, alt: "MacDonalds", className: styles.macdonalds },
  {
    filled: pnbHousingFilled,
    alt: "PNB Housing",
    className: styles.pnbHousing,
  },
  { filled: adidasFilled, alt: "Adidas", className: styles.adidas },
  { filled: tataAigFilled, alt: "Tata AIG", className: styles.tataAig },
  {
    filled: vijaySalesFilled,
    alt: "Vijay Sales",
    className: styles.vijaySales,
  },
  { filled: behrousFilled, alt: "Behrous", className: styles.behrous },
]

export { coloredLogos, logos }
