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
      // If it's already just the ID (e.g. "EgWI_tkBpk0")
      videoId = url.trim()
    }

    // Final fallback
    if (!videoId || videoId.length < 11) return ""

    // This is the magic combo that defeats Error 153
    return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3`
  }

  const embedUrl = getEmbedUrl(videoUrl)

  // Safety: if URL parsing failed
  if (!embedUrl) {
    return null
  }

  return (
    <Modal
      show={open}
      onHide={onClose}
      centered
      size="lg" // better for video
      dialogClassName="video-modal-dialog"
      backdropClassName="video-backdrop-blur"
      contentClassName="border-0 bg-transparent shadow-none"
    >
      <Modal.Body className="p-0">
        <div className="position-relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="position-absolute top-0 end-0 btn-close btn-close-white m-3 z-10"
            style={{ filter: "drop-shadow(0 0 8px rgba(0,0,0,0.8))" }}
            aria-label="Close"
          />

          {/* Responsive 16:9 Container */}
          <div className="ratio ratio-16x9">
            <iframe
              src={embedUrl}
              title="YouTube Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-3 shadow-lg"
              // These two lines are CRITICAL to fix Error 153
              referrerPolicy="strict-origin-when-cross-origin"
              sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
            />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default VideoModal
