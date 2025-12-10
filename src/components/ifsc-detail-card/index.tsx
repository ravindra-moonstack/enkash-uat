"use client"
import Image, { StaticImageData } from "next/image"
import React from "react"
import { Card, Row, Col } from "react-bootstrap"
import DynamicHeading from "../dynamic-heading"
import styles from "./ifsc-detail-card.module.scss"

interface IfscDetailProps {
  bankLogo?: string | StaticImageData
  bankName: string
  ifsc: string
  micr: string
  state: string
  district: string
  branch: string
  address: string
  phone?: string
}

const IfscDetailCard: React.FC<IfscDetailProps> = ({
  bankLogo,
  bankName,
  ifsc,
  micr,
  state,
  district,
  branch,
  address,
  phone,
}) => {
  return (
    <Card className="shadow-sm p-4 rounded-3">
      {/* Header */}
      <Row className="align-items-center mb-3">
        <Col xs="auto" className="bank-logo-col">
          {bankLogo && (
            <Image src={bankLogo} alt="Bank Logo" className="bank-logo" />
          )}
        </Col>
        <Col>
          <DynamicHeading
            content={[
              {
                title: bankName,
                color: " color-alternate-grey f-7 ",
              },
            ]}
            headingTag="p"
            className="mb-0"
          />
        </Col>
      </Row>

      <hr />

      {/* Details */}
      <Row className={`mb-2 fs-14 color-alternate-grey ${styles.myText}`}>
        <Col xs={12}>
          <b>IFSC Code:</b>{" "}
          <span className="color-equity-blue fw-semibold">{ifsc}</span>
        </Col>

        <Col xs={12} className="mt-2">
          <b>MICR Code:</b> {micr}
        </Col>

        <Col xs={12} className="mt-2">
          <b>State:</b> {state}
        </Col>

        <Col xs={12} className="mt-2">
          <b>District:</b> {district}
        </Col>

        <Col xs={12} className="mt-2">
          <b>Branch:</b> {branch}
        </Col>

        {/* Multi-line Address */}
        <Col xs={12} className="mt-2">
          <b>Address:</b>
          <div style={{ whiteSpace: "pre-line" }}>{address}</div>
        </Col>

        {phone && (
          <Col xs={12} className="mt-2">
            <b>Mob No.:</b> {phone}
          </Col>
        )}
      </Row>
    </Card>
  )
}

export default IfscDetailCard
