import React from "react"
import Image from "next/image"
import Styles from "./partnerSectionData.module.scss"
import DynamicHeading from "../dynamic-heading"
import Link from "next/link"

interface Partner {
  icon?: string
  title?: string
  description?: string
  buttonText?: string
  buttonLinks?: string
}

interface PartnerSectionData {
  titleTag?: string
  heading: {
    line1: string
    line2: string
  }
  partners: Partner[]
}

const PartnerSection: React.FC<{ data: PartnerSectionData }> = ({ data }) => {
  return (
    <div className={`${Styles.partner_section_inner}`}>
      {/* Top Section */}
      <div className={`${Styles.partner_top_section}`}>
        {data.titleTag && (
          <div className={`${Styles.partner_badge}`}>
            <span className="">{data.titleTag}</span>
          </div>
        )}

        <div className={`${Styles.partner_title}`}>
          <DynamicHeading
            content={[
              {
                title: (data.heading.line1 || "") + " ",
                color: "color-white f-3 ",
              },
              { title: data.heading.line2 || "", color: "color-white" },
            ]}
            headingTag="h2"
            className="f-6"
          />
        </div>
      </div>

      {/* Partner List */}
      <div className={`${Styles.partner_bottom_section}`}>
        {data.partners?.map((partner, idx) => (
          <div key={idx} className={`${Styles.partnerList}`}>
            {partner.icon ? (
              <Image
                src={partner.icon}
                alt={partner.title || "Partner icon"}
                width={40}
                height={40}
              />
            ) : (
              ""
            )}
            <div className={`${Styles.content}`}>
              {partner.title && (
                <DynamicHeading
                  content={[{ title: partner.title, color: "color-black  " }]}
                  headingTag="h6"
                  className="f-4"
                />
              )}
              {partner.description && (
                <DynamicHeading
                  content={[
                    { title: partner.description, color: "color-black " },
                  ]}
                  headingTag="p"
                  className=""
                />
              )}
              {partner.buttonLinks && partner.buttonText && (
                <div className={`${Styles.buttonsSection}`}>
                  <Link
                    href={partner.buttonLinks}
                    className={`${Styles.buttons}`}
                  >
                    {partner.buttonText}
                    <svg
                      width="12"
                      height="11"
                      viewBox="0 0 12 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M5.85352 10.1846C5.7833 10.1864 5.73724 10.1687 5.6875 10.1221L5.67969 10.1143L5.67188 10.1074C5.62883 10.0704 5.61779 10.0432 5.61621 9.99805C5.61522 9.96248 5.6208 9.93498 5.66895 9.88965L9.25586 6.52246L10.1768 5.6582L0.734375 5.6582C0.665883 5.6582 0.620915 5.6449 0.585938 5.62207L0.553711 5.5957C0.516496 5.56021 0.502018 5.52936 0.501954 5.47168C0.501954 5.41303 0.516862 5.38218 0.554688 5.34668C0.59507 5.30881 0.643628 5.28418 0.734376 5.28418L10.1768 5.28418L9.25586 4.41992L5.66895 1.05371C5.63745 1.02413 5.61854 0.991593 5.61621 0.920898C5.61543 0.890591 5.62086 0.877119 5.62305 0.87207C5.62514 0.867292 5.63093 0.854228 5.65332 0.83496L5.66992 0.821289L5.68457 0.805664C5.71667 0.7728 5.75521 0.75 5.83984 0.75C5.92453 0.750055 5.97803 0.773127 6.02832 0.820312L10.8584 5.35449C10.8722 5.36745 10.8805 5.37774 10.8848 5.38379L10.8896 5.39258C10.8968 5.41217 10.9023 5.4375 10.9023 5.47168C10.9023 5.50556 10.8967 5.53031 10.8896 5.5498C10.8894 5.55041 10.8884 5.55342 10.8848 5.55859C10.8805 5.56463 10.8723 5.57484 10.8584 5.58789L6.02832 10.1221C5.99177 10.1564 5.9442 10.1817 5.85352 10.1846Z"
                        fill="#4B5157"
                        stroke="black"
                      />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
        {/* {data.buttonLinks && data.buttonText && (
          <div className={`${Styles.buttonsSection}`}>
            <Link href={data.buttonLinks} className={`${Styles.buttons}`}>
              {data.buttonText}
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M5.85352 10.1846C5.7833 10.1864 5.73724 10.1687 5.6875 10.1221L5.67969 10.1143L5.67188 10.1074C5.62883 10.0704 5.61779 10.0432 5.61621 9.99805C5.61522 9.96248 5.6208 9.93498 5.66895 9.88965L9.25586 6.52246L10.1768 5.6582L0.734375 5.6582C0.665883 5.6582 0.620915 5.6449 0.585938 5.62207L0.553711 5.5957C0.516496 5.56021 0.502018 5.52936 0.501954 5.47168C0.501954 5.41303 0.516862 5.38218 0.554688 5.34668C0.59507 5.30881 0.643628 5.28418 0.734376 5.28418L10.1768 5.28418L9.25586 4.41992L5.66895 1.05371C5.63745 1.02413 5.61854 0.991593 5.61621 0.920898C5.61543 0.890591 5.62086 0.877119 5.62305 0.87207C5.62514 0.867292 5.63093 0.854228 5.65332 0.83496L5.66992 0.821289L5.68457 0.805664C5.71667 0.7728 5.75521 0.75 5.83984 0.75C5.92453 0.750055 5.97803 0.773127 6.02832 0.820312L10.8584 5.35449C10.8722 5.36745 10.8805 5.37774 10.8848 5.38379L10.8896 5.39258C10.8968 5.41217 10.9023 5.4375 10.9023 5.47168C10.9023 5.50556 10.8967 5.53031 10.8896 5.5498C10.8894 5.55041 10.8884 5.55342 10.8848 5.55859C10.8805 5.56463 10.8723 5.57484 10.8584 5.58789L6.02832 10.1221C5.99177 10.1564 5.9442 10.1817 5.85352 10.1846Z"
                  fill="#4B5157"
                  stroke="black"
                />
              </svg>
            </Link>
          </div>
        )} */}
      </div>
    </div>
  )
}

export default PartnerSection
