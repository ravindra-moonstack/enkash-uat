"use client"
import React, { useEffect, useState } from "react"
import { Form, Row, Col } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import styles from "./ifscCodeList.module.scss"

const SEARCH_API =
  "https://ekpayout-uat.enkash.in/api/v0/bankIfsc/public/search"

const IFSC_DETAIL_API = "https://ekpayout-uat.enkash.in/api/v0/bankIfsc/public"

const IfscCode: React.FC = () => {
  const [banks, setBanks] = useState<string[]>([])
  const [states, setStates] = useState<string[]>([])
  const [districts, setDistricts] = useState<string[]>([])
  const [branches, setBranches] = useState<string[]>([])

  const [bankName, setBankName] = useState("")
  const [state, setState] = useState("")
  const [district, setDistrict] = useState("")
  const [branchName, setBranchName] = useState("")
  const [ifscInput, setIfscInput] = useState("")

  const [ifscDetail, setIfscDetail] = useState<any>(null)

  // ---------------- Fetch Banks ----------------
  useEffect(() => {
    fetch(SEARCH_API)
      .then((r) => r.json())
      .then((data) => setBanks(data?.payload?.banks || []))
  }, [])

  // ---------------- Fetch States ----------------
  useEffect(() => {
    if (!bankName) return
    fetch(`${SEARCH_API}?bankName=${bankName}`)
      .then((r) => r.json())
      .then((data) => setStates(data?.payload?.states || []))
  }, [bankName])

  // ---------------- Fetch Districts ----------------
  useEffect(() => {
    if (!bankName || !state) return
    fetch(`${SEARCH_API}?bankName=${bankName}&state=${state}`)
      .then((r) => r.json())
      .then((data) => setDistricts(data?.payload?.districts || []))
  }, [bankName, state])

  // ---------------- Fetch Branches ----------------
  useEffect(() => {
    if (!bankName || !state || !district) return
    fetch(
      `${SEARCH_API}?bankName=${bankName}&state=${state}&district=${district}`
    )
      .then((r) => r.json())
      .then((data) => setBranches(data?.payload?.branches || []))
  }, [bankName, state, district])

  // ---------------- IFSC Detail from Dropdown ----------------
  useEffect(() => {
    if (!bankName || !state || !district || !branchName) return

    fetch(
      `${SEARCH_API}?bankName=${bankName}&state=${state}&district=${district}&branchName=${branchName}`
    )
      .then((r) => r.json())
      .then((data) => setIfscDetail(data?.payload || null))
  }, [bankName, state, district, branchName])

  // ---------------- IFSC Detail from Manual Input (PUBLIC API) ----------------
  useEffect(() => {
    if (ifscInput.length < 4) return

    fetch(`${IFSC_DETAIL_API}/${ifscInput}`)
      .then((r) => r.json())
      .then((data) => {
        if (data?.response_code === 0) {
          setIfscDetail(data.payload)
        } else {
          setIfscDetail(null)
        }
      })
      .catch(() => setIfscDetail(null))
  }, [ifscInput])

  return (
    <>
      <Form className={` text-black ${styles.gst_calclulator}`}>
        <Row className="mb-3 g-3">
          {/* Bank Dropdown */}
          <Col md>
            <Form.Select
              value={bankName}
              onChange={(e) => {
                setBankName(e.target.value)
                setState("")
                setDistrict("")
                setBranchName("")
                setIfscInput("")
                setIfscDetail(null)
              }}
            >
              <option value="">Select Bank</option>
              {banks.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </Form.Select>
          </Col>

          {/* State */}
          <Col md>
            <Form.Select
              value={state}
              onChange={(e) => {
                setState(e.target.value)
                setDistrict("")
                setBranchName("")
                setIfscInput("")
                setIfscDetail(null)
              }}
            >
              <option value="">Select State</option>
              {states.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </Form.Select>
          </Col>

          {/* District */}
          <Col md>
            <Form.Select
              value={district}
              onChange={(e) => {
                setDistrict(e.target.value)
                setBranchName("")
                setIfscInput("")
                setIfscDetail(null)
              }}
            >
              <option value="">Select District</option>
              {districts.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </Form.Select>
          </Col>

          {/* Branch */}
          <Col md>
            <Form.Select
              value={branchName}
              onChange={(e) => setBranchName(e.target.value)}
            >
              <option value="">Select Branch</option>
              {branches.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </Form.Select>
          </Col>
        </Row>

        {/* OR divider */}
        <div className="text-center color-alternate-grey fw-bold my-3">OR</div>

        {/* Manual IFSC Input */}
        <Row className="mb-4">
          <Col md className="d-flex justify-content-center">
            <Form.Control
              type="text"
              placeholder="Enter IFSC"
              value={ifscInput}
              onChange={(e) => {
                setIfscInput(e.target.value.toUpperCase())
                setBankName("")
                setState("")
                setDistrict("")
                setBranchName("")
              }}
            />
          </Col>
        </Row>
      </Form>

      {/* IFSC RESULT */}
      {ifscDetail && (
        <div
          className={`calculator color-alternate-grey fs-14 ${styles.gst_calclulator}`}
        >
          <Container>
            <Row>
              <Col>
                <b>IFSC:</b>
                <span className=" color-equity-blue f-6">
                  {" "}
                  {ifscDetail.ifsc}
                </span>
              </Col>

              <Col>
                <b>State:</b> {ifscDetail.state}
              </Col>
              <Col>
                <b>Branch:</b> {ifscDetail.branch}
              </Col>
              <Col rowSpan={2}>
                <b>Address:</b> {ifscDetail.address}
              </Col>
            </Row>

            <Row className="mt-2">
              <Col>
                <b>MICR Code:</b> {ifscDetail.micr}
              </Col>{" "}
              <Col>
                <b>District:</b> {ifscDetail.city}
              </Col>
              <Col>
                <b>Phone No:</b> {ifscDetail.phone}
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  )
}

export default IfscCode
