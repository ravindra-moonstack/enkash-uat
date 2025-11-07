"use client"
import React, { useEffect, useState } from "react"
import { Form, Row, Col } from "react-bootstrap"

type TaxType = "Inclusive" | "Exclusive"

const gstRates = [0, 5, 18, 40]

const GstCalculator: React.FC = () => {
  const [amount, setAmount] = useState<number>(10000)
  const [gst, setGst] = useState<number>(5)
  const [taxType, setTaxType] = useState<TaxType>("Inclusive")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Prevent SSR markup mismatch
  if (!isMounted) return null

  // Calculation logic
  let actualAmount = 0
  let gstAmount = 0
  let totalAmount = 0

  if (taxType === "Exclusive") {
    gstAmount = (amount * gst) / 100
    actualAmount = amount
    totalAmount = amount + gstAmount
  } else {
    gstAmount = amount - (amount * 100) / (100 + gst)
    actualAmount = amount - gstAmount
    totalAmount = amount
  }

  return (
    <Form className="calculator text-black py-4">
      <Row className="mb-3">
        <Col>
          <Form.Label>Amount</Form.Label>
          <div className="position-relative">
            <span
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#2B2B2B",
              }}
            >
              ₹
            </span>
            <Form.Control
              type="number"
              min={0}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value) || 0)}
              style={{ paddingLeft: "25px" }}
            />
          </div>
        </Col>

        <Col>
          <Form.Label>GST%</Form.Label>
          <Form.Select
            value={gst}
            onChange={(e) => setGst(Number(e.target.value))}
          >
            {gstRates.map((rate) => (
              <option key={rate} value={rate}>
                {rate}%
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col>
          <Form.Label>Tax</Form.Label>
          <Form.Select
            value={taxType}
            onChange={(e) => setTaxType(e.target.value as TaxType)}
          >
            <option value="Inclusive">Inclusive</option>
            <option value="Exclusive">Exclusive</option>
          </Form.Select>
        </Col>
      </Row>

      <Row className="text-center">
        <Col>
          <div>
            <span className="fs-2">₹{actualAmount.toFixed(2)}</span>
            <br />
            <span className="fs-6 color-equity-blue">Actual Amount</span>
          </div>
        </Col>
        <Col>
          <div className="fs-1 color-equity-blue text-center">+</div>
        </Col>
        <Col>
          <div className="secondRow">
            <span className="fs-2">₹{gstAmount.toFixed(2)}</span>
            <br />
            <span className="fs-6 color-electric-green">GST Amount</span>
          </div>
        </Col>
        <Col>
          <div className="fs-1 color-equity-blue text-center">=</div>
        </Col>
        <Col>
          <div>
            <span className="fs-2">₹{totalAmount.toFixed(2)}</span>
            <br />
            <span className="fs-6 color-equity-blue">Total Amount</span>
          </div>
        </Col>
      </Row>
    </Form>
  )
}

export default GstCalculator
