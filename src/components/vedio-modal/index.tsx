"use client"

import Modal from "react-bootstrap/Modal"
import React from "react"

interface VideoModalProps {
  videoUrl: string
  open: boolean
  onClose: () => void
}

const VideoModal: React.FC<VideoModalProps> = ({ videoUrl, open, onClose }) => {
  if (!open) return null

  const convertToEmbedUrl = (url: string) => {
    if (url.includes("embed")) return url

    if (url.includes("youtu.be")) {
      const id = url.split("youtu.be/")[1].split("?")[0]
      return `https://www.youtube.com/embed/${id}`
    }

    if (url.includes("watch?v=")) {
      const id = url.split("watch?v=")[1].split("&")[0]
      return `https://www.youtube.com/embed/${id}`
    }

    return url
  }

  return (
    <Modal
      show={open}
      onHide={onClose}
      centered
      size="lg"
      dialogClassName="video-modal-dialog"
      backdropClassName="video-backdrop-blur"
    >
      <iframe
        className="w-full"
        style={{ height: "400px", border: "8px", borderRadius: "8px" }}
        src={convertToEmbedUrl(videoUrl)}
        title="Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </Modal>
  )
}

export default VideoModal
