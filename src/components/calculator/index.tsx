"use client"
import React, { useEffect, useState } from "react"
import { Form, Row, Col } from "react-bootstrap"

type TaxType = "Inclusive" | "Exclusive"

const gstRates = [0, 5, 18, 40]

const GstCalculator: React.FC = () => {
  const [amount, setAmount] = useState<number | undefined>(undefined)
  const [gst, setGst] = useState<number | undefined>(undefined)
  const [taxType, setTaxType] = useState<TaxType>("Exclusive")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  let actualAmount = 0
  let gstAmount = 0
  let totalAmount = 0

  if (amount !== undefined && gst !== undefined) {
    if (taxType === "Exclusive") {
      gstAmount = (amount * gst) / 100
      actualAmount = amount
      totalAmount = amount + gstAmount
    } else {
      gstAmount = amount - (amount * 100) / (100 + gst)
      actualAmount = amount - gstAmount
      totalAmount = amount
    }
  }

  return (
    <Form className="calculator text-black py-4 px-md-0 px-4">
      {/* Inputs Row */}
      <Row className="mb-3 g-3">
        {/* Amount */}
        <Col xs={12} md>
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
              value={amount ?? ""}
              onChange={(e) =>
                setAmount(
                  e.target.value === "" ? undefined : Number(e.target.value)
                )
              }
              style={{ paddingLeft: "25px" }}
              placeholder="Enter amount"
            />
          </div>
        </Col>

        {/* GST % */}
        <Col xs={12} md>
          <Form.Label>GST%</Form.Label>
          <Form.Select
            value={gst ?? ""}
            onChange={(e) =>
              setGst(e.target.value === "" ? undefined : Number(e.target.value))
            }
          >
            <option value="">Select</option>
            {gstRates.map((rate) => (
              <option key={rate} value={rate}>
                {rate}%
              </option>
            ))}
          </Form.Select>
        </Col>

        {/* Tax Type */}
        <Col xs={12} md>
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

      {/* Result Row */}
      <Row className="text-center align-items-center mt-4">
        <Col xs={12} md>
          <div>
            <span className="fs-2 fw-semibold">₹{actualAmount.toFixed(2)}</span>
            <br />
            <span className="fs-6 color-equity-blue">Actual Amount</span>
          </div>
        </Col>

        <Col xs={12} md="auto" className="">
          <div className="fs-1 color-equity-blue">+</div>
        </Col>

        <Col xs={12} md>
          <div>
            <span className="fs-2 fw-semibold">₹{gstAmount.toFixed(2)}</span>
            <br />
            <span className="fs-6 color-electric-green">GST Amount</span>
          </div>
        </Col>

        <Col xs={12} md="auto" className="">
          <div className="fs-1 color-equity-blue">=</div>
        </Col>

        <Col xs={12} md>
          <div>
            <span className="fs-2 fw-semibold">₹{totalAmount.toFixed(2)}</span>
            <br />
            <span className="fs-6 color-equity-blue">Total Amount</span>
          </div>
        </Col>
      </Row>

      {/* Mobile symbols (stacked view) */}
    </Form>
  )
}

export default GstCalculator
