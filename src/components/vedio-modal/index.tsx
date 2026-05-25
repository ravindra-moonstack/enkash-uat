"use client"

import Modal from "react-bootstrap/Modal"
import React from "react"

interface VideoModalProps {
  videoUrl: string
  open: boolean
  onClose: () => void
}

const VideoModal: React.FC<VideoModalProps> = ({ videoUrl, open, onClose }) => {
  if (!open || !videoUrl) return null

  const isEmbedCode = videoUrl.trim().startsWith("<iframe")

  const getEmbedUrl = (url: string): string => {
    let videoId = ""

    // Extract video ID from any YouTube format
    if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1]?.split("?")[0] || ""
    } else if (url.includes("youtube.com/watch")) {
      videoId = url.split("v=")[1]?.split("&")[0] || ""
    } else if (url.includes("youtube.com/embed/")) {
      videoId = url.split("embed/")[1]?.split("?")[0] || ""
    } else if (url.includes("youtube.com/shorts/")) {
      videoId = url.split("shorts/")[1]?.split("?")[0] || ""
    } else {
      videoId = url.trim()
    }

    if (!videoId || videoId.length < 11) return ""
    return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3`
  }

  const embedUrl = !isEmbedCode ? getEmbedUrl(videoUrl) : ""

  if (!isEmbedCode && !embedUrl) {
    return null
  }

  return (
    <Modal
      show={open}
      onHide={onClose}
      centered
      size="lg"
      dialogClassName="video-modal-dialog"
      backdropClassName="video-backdrop-blur"
      contentClassName="border-0 bg-transparent shadow-none"
    >
      <Modal.Body className="p-0">
        <div className="position-relative">
          <button
            onClick={onClose}
            className="position-absolute top-0 end-0 btn-close btn-close-white m-3 z-10"
            style={{ filter: "drop-shadow(0 0 8px rgba(0,0,0,0.8))", zIndex: 1000 }}
            aria-label="Close"
          />

          <div className="ratio ratio-16x9">
            {isEmbedCode ? (
              <div
                className="w-100 h-100 rounded-3 overflow-hidden shadow-lg"
                dangerouslySetInnerHTML={{ __html: videoUrl }}
                style={{
                  // Ensure the iframe inside matches the container
                }}
              />
            ) : (
              <iframe
                src={embedUrl}
                title="Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-3 shadow-lg"
                referrerPolicy="strict-origin-when-cross-origin"
                sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
              />
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default VideoModal
