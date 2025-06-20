import Header from "../../components/header/header"
import Heading from "../../components/heading/heading"

export default function Home() {
  return (
    <>
      <div className="p-5">
        <Header utmSource="receivables" />
        <Heading size={"h1"} title={"Hello"} />
        <Heading
          title={`Payment Gateway `}
          color="electric-green"
          size="h4"
          weight="7"
        />
      </div>
    </>
  )
}
