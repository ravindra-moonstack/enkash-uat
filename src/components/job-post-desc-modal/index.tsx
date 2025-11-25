"use client"
import React, { useState } from "react"
import { Modal } from "react-bootstrap"
import DynamicHeading from "../dynamic-heading"
import styles from "./JobPostDescModal.module.scss"
const JobPostDescModal = (): React.JSX.Element => {
  //

  const [show, setShow] = useState<boolean>(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // Data Array
  const hiringSteps = [
    {
      description:
        " Take ownership of the full product lifecycle, from ideation through launch and ongoing optimization. ",
    },
    {
      description:
        " Ensure ongoing compliance with RBI regulations and maintain robust KYC processes. ",
    },
    {
      description:
        " Develop, execute, and manage the product roadmap to achieve strategic business objectives. ",
    },
    {
      description:
        " Oversee transaction processes, settlement procedures, and fund flows for PPI and wallet products. ",
    },
    {
      description:
        " Collaborate effectively with cross-functional teams across technology, operations, compliance, and business partners. ",
    },
    {
      description:
        " Analyze market trends and customer needs to drive product adoption and continuous improvement.  ",
    },
  ]

  return (
    <>
      <div onClick={handleShow} className={`${styles.buttonHeading}  `}>
        <DynamicHeading
          content={[
            {
              title: "Product Manager",
              color: "color-white subHeading",
            },
          ]}
          headingTag="p"
          className="mb-2"
        />
      </div>

      <Modal
        show={show}
        className="careersPagepopupbox"
        onHide={handleClose}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Job Description</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ol className="list-group list-group-numbered">
            {hiringSteps.map((step, index) => (
              <li key={index} className="list-group-item">
                {step.description}
              </li>
            ))}
          </ol>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default JobPostDescModal
