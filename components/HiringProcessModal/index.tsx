"use client"
import React, { useState } from "react"
import { Modal, Button } from "react-bootstrap"

import styles from "./HiringProcessModal.module.scss"

const HiringProcessModal = (): React.JSX.Element => {
  //

  const [show, setShow] = useState<boolean>(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // Data Array
  const hiringSteps = [
    {
      title: "Apply Online",
      description:
        "Submit your application through our Careers page — we read every one.",
    },
    {
      title: "HR Screening",
      description:
        "Our Talent Acquisition team reviews your profile. If it’s a match, you’ll have a quick intro call to learn more about EnKash and share your story.",
    },
    {
      title: "Skills Interview",
      description:
        "Meet with a hiring manager or domain expert for a deep dive into your skills. Some roles may include a short assignment, technical test, or case study.",
    },
    {
      title: "Team Interaction",
      description:
        "Have conversations with potential teammates or cross-functional partners. We want to see how you collaborate and give you a feel for our work culture.",
    },
    {
      title: "Culture & Values Conversation",
      description:
        "A chat with a senior leader or founder (sometimes combined with other stages) to ensure our values—agility, innovation, ownership, and more—align with yours.",
    },
    {
      title: "Offer & Onboarding",
      description:
        "If it’s a “yes” on both sides, we’ll extend an offer and get you onboarded so you’re set up for success from Day 1.",
    },
  ]

  return (
    <>
      {/* Button */}
      <Button
        className={`${styles.button} btn btn-primary text-uppercase fw-bold px-4 py-2 `}
        onClick={handleShow}
      >
        Learn About Our Hiring Process
      </Button>

      {/* Popup Modal */}
      <Modal
        show={show}
        className="careersPagepopupbox"
        onHide={handleClose}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Our Hiring Process</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-muted">
            We keep things simple, transparent, and human. Here’s what you can
            expect:
          </p>

          <ol className="list-group list-group-numbered">
            {hiringSteps.map((step, index) => (
              <li key={index} className="list-group-item">
                <strong>{step.title}</strong> – {step.description}
              </li>
            ))}
          </ol>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default HiringProcessModal
