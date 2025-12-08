"use client"
import Image, { StaticImageData } from "next/image"
import React from "react"
import { Card, Row, Col } from "react-bootstrap"

interface IfscDetailProps {
  bankLogo?: string | StaticImageData
  bankName: string
  ifsc: string
  micr: string
  state: string
  district: string
  branch: string
  address: string
  phone: string
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
    <Card className="shadow-sm p-4">
      {/* Header */}
      <Row className="align-items-center mb-3">
        <Col xs="auto">
          {bankLogo && <Image src={bankLogo} alt="Bank Logo" height={45} />}
        </Col>

        <Col>
          <h5 className="mb-0 fw-bold color-alternate-grey">
            {bankName} IFSC Code
          </h5>
        </Col>
      </Row>

      <hr />

      {/* Details */}
      <Row className="mb-2 fs-13 color-alternate-grey">
        <Col xs={12}>
          <b>IFSC Code:</b>{" "}
          <span className="text-equity-blue fw-semibold">{ifsc}</span>
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

        <Col xs={12} className="mt-2">
          <b>Mob No.:</b> {phone}
        </Col>
      </Row>
    </Card>
  )
}

export default IfscDetailCard
