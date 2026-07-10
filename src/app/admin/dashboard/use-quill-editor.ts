import { useEffect, useRef, useState } from "react"
import "quill/dist/quill.snow.css"

interface UseQuillEditorProps {
  content: string
  setContent: (content: string) => void
  viewMode: string
}

// ---------------------------------------------------------------------------
// Custom image-resize overlay
// Supports 8 handles. Corners resize width + height freely (no aspect lock).
// Side handles (top/bottom) resize height only; (left/right) resize width only.
// ---------------------------------------------------------------------------
function createImageResizer(
  quill: any,
  onContentChange: (html: string) => void
) {
  // Handle definitions: [name, cursor, affects-x, affects-y, x-direction, y-direction]
  // affects-x / affects-y: whether this handle changes width / height
  // x-direction: +1 means dragging right grows width, -1 means dragging right shrinks width
  // y-direction: +1 means dragging down grows height, -1 means dragging down shrinks height
  const HANDLES: Array<{
    name: string
    cursor: string
    ax: boolean
    ay: boolean
    dx: number
    dy: number
    // position on the overlay (top/bottom/left/right as % or keyword)
    top: string
    left: string
    transform: string
  }> = [
    {
      name: "nw",
      cursor: "nw-resize",
      ax: true,
      ay: true,
      dx: -1,
      dy: -1,
      top: "0%",
      left: "0%",
      transform: "translate(-50%,-50%)",
    },
    {
      name: "n",
      cursor: "n-resize",
      ax: false,
      ay: true,
      dx: 0,
      dy: -1,
      top: "0%",
      left: "50%",
      transform: "translate(-50%,-50%)",
    },
    {
      name: "ne",
      cursor: "ne-resize",
      ax: true,
      ay: true,
      dx: 1,
      dy: -1,
      top: "0%",
      left: "100%",
      transform: "translate(-50%,-50%)",
    },
    {
      name: "e",
      cursor: "e-resize",
      ax: true,
      ay: false,
      dx: 1,
      dy: 0,
      top: "50%",
      left: "100%",
      transform: "translate(-50%,-50%)",
    },
    {
      name: "se",
      cursor: "se-resize",
      ax: true,
      ay: true,
      dx: 1,
      dy: 1,
      top: "100%",
      left: "100%",
      transform: "translate(-50%,-50%)",
    },
    {
      name: "s",
      cursor: "s-resize",
      ax: false,
      ay: true,
      dx: 0,
      dy: 1,
      top: "100%",
      left: "50%",
      transform: "translate(-50%,-50%)",
    },
    {
      name: "sw",
      cursor: "sw-resize",
      ax: true,
      ay: true,
      dx: -1,
      dy: 1,
      top: "100%",
      left: "0%",
      transform: "translate(-50%,-50%)",
    },
    {
      name: "w",
      cursor: "w-resize",
      ax: true,
      ay: false,
      dx: -1,
      dy: 0,
      top: "50%",
      left: "0%",
      transform: "translate(-50%,-50%)",
    },
  ]

  let overlay: HTMLDivElement | null = null
  let activeImg: HTMLImageElement | null = null
  let startX = 0,
    startY = 0
  let startW = 0,
    startH = 0
  let activeHandle: (typeof HANDLES)[0] | null = null

  const MIN_SIZE = 20

  function removeOverlay() {
    if (overlay) {
      overlay.remove()
      overlay = null
    }
    activeImg = null
  }

  function positionOverlay(img: HTMLImageElement) {
    if (!overlay) return
    const editorRect = quill.root.getBoundingClientRect()
    const imgRect = img.getBoundingClientRect()
    overlay.style.left = `${imgRect.left - editorRect.left + quill.root.scrollLeft}px`
    overlay.style.top = `${imgRect.top - editorRect.top + quill.root.scrollTop}px`
    overlay.style.width = `${imgRect.width}px`
    overlay.style.height = `${imgRect.height}px`
  }

  function buildOverlay(img: HTMLImageElement) {
    removeOverlay()
    activeImg = img

    // Ensure the editor container is positioned so the overlay can be
    // positioned absolutely relative to it.
    const editorRoot = quill.root as HTMLElement
    const container = editorRoot.parentElement as HTMLElement
    if (container && getComputedStyle(container).position === "static") {
      container.style.position = "relative"
    }

    overlay = document.createElement("div")
    overlay.style.cssText = [
      "position:absolute",
      "box-sizing:border-box",
      "border:2px solid #1c5af4",
      "pointer-events:none",
      "z-index:100",
    ].join(";")

    HANDLES.forEach((h) => {
      const dot = document.createElement("div")
      dot.dataset.handle = h.name
      dot.style.cssText = [
        "position:absolute",
        `top:${h.top}`,
        `left:${h.left}`,
        `transform:${h.transform}`,
        "width:10px",
        "height:10px",
        "background:#1c5af4",
        "border:2px solid #fff",
        "border-radius:2px",
        `cursor:${h.cursor}`,
        "pointer-events:all",
        "box-sizing:border-box",
      ].join(";")

      dot.addEventListener("mousedown", (e) => {
        e.preventDefault()
        e.stopPropagation()
        activeHandle = h
        startX = e.clientX
        startY = e.clientY
        startW = activeImg ? activeImg.offsetWidth : 0
        startH = activeImg ? activeImg.offsetHeight : 0
        document.addEventListener("mousemove", onMouseMove)
        document.addEventListener("mouseup", onMouseUp)
      })

      overlay!.appendChild(dot)
    })

    // Size label
    const label = document.createElement("div")
    label.id = "__img_resize_label"
    label.style.cssText = [
      "position:absolute",
      "bottom:-24px",
      "left:50%",
      "transform:translateX(-50%)",
      "background:rgba(28,90,244,0.85)",
      "color:#fff",
      "font-size:11px",
      "padding:2px 6px",
      "border-radius:3px",
      "pointer-events:none",
      "white-space:nowrap",
    ].join(";")
    overlay.appendChild(label)

    updateLabel(img.offsetWidth, img.offsetHeight)
    container.appendChild(overlay)
    positionOverlay(img)
  }

  function updateLabel(w: number, h: number) {
    if (!overlay) return
    const label = overlay.querySelector(
      "#__img_resize_label"
    ) as HTMLElement | null
    if (label) label.textContent = `${Math.round(w)} × ${Math.round(h)}`
  }

  function onMouseMove(e: MouseEvent) {
    if (!activeImg || !activeHandle || !overlay) return
    const deltaX = e.clientX - startX
    const deltaY = e.clientY - startY

    let newW = startW
    let newH = startH

    if (activeHandle.ax) {
      newW = Math.max(MIN_SIZE, startW + deltaX * activeHandle.dx)
    }
    if (activeHandle.ay) {
      newH = Math.max(MIN_SIZE, startH + deltaY * activeHandle.dy)
    }

    // Apply dimensions as both HTML attributes (preserved by Quill's ImageBlot)
    // AND inline style (for immediate visual feedback during drag).
    if (activeHandle.ax) {
      activeImg.setAttribute("width", String(Math.round(newW)))
      activeImg.style.width = `${newW}px`
    }
    if (activeHandle.ay) {
      activeImg.setAttribute("height", String(Math.round(newH)))
      activeImg.style.height = `${newH}px`
    }

    updateLabel(
      activeHandle.ax ? newW : activeImg.offsetWidth,
      activeHandle.ay ? newH : activeImg.offsetHeight
    )
    positionOverlay(activeImg)
  }

  function onMouseUp() {
    document.removeEventListener("mousemove", onMouseMove)
    document.removeEventListener("mouseup", onMouseUp)
    activeHandle = null

    if (activeImg) {
      // Quill's MutationObserver watches childList/characterData — NOT
      // attribute mutations — so quill.update() / dispatchEvent never
      // reliably fires text-change after an img resize. The only
      // guaranteed way to persist the new size is to call setContent
      // directly with the current innerHTML (which already has the
      // updated width/height attributes AND inline styles).
      onContentChange(quill.root.innerHTML)
      if (overlay) positionOverlay(activeImg)
    }
  }

  // Click on editor images → show overlay
  function onImgClick(e: MouseEvent) {
    const target = e.target as HTMLElement
    if (target.tagName === "IMG") {
      buildOverlay(target as HTMLImageElement)
    } else {
      removeOverlay()
    }
  }

  // Reposition overlay on scroll / window resize
  function onScroll() {
    if (activeImg && overlay) positionOverlay(activeImg)
  }

  quill.root.addEventListener("click", onImgClick)
  quill.root.addEventListener("scroll", onScroll)
  window.addEventListener("resize", onScroll)

  // Cleanup function (call when editor is destroyed)
  return () => {
    quill.root.removeEventListener("click", onImgClick)
    quill.root.removeEventListener("scroll", onScroll)
    window.removeEventListener("resize", onScroll)
    removeOverlay()
  }
}

export const useQuillEditor = ({
  content,
  setContent,
  viewMode,
}: UseQuillEditorProps) => {
  const editorRef = useRef<HTMLDivElement>(null)
  const quillInstance = useRef<any>(null)
  // Ref that always holds the latest content without being a useEffect dep.
  // Reading it inside the effect avoids the cleanup/re-run cycle that
  // destroyed the image resizer on every setContent call.
  const contentRef = useRef(content)
  contentRef.current = content
  // Resizer cleanup is kept in a ref so it survives effect re-runs that are
  // triggered by content changes (deps: [viewMode] only).
  const resizerCleanupRef = useRef<(() => void) | null>(null)
  const [showHtmlView, setShowHtmlView] = useState(false)
  const [htmlContent, setHtmlContent] = useState("")

  // Alt Text Modal State
  const [showAltModal, setShowAltModal] = useState(false)
  const [pendingImage, setPendingImage] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)

  const toggleHtmlView = () => {
    if (!showHtmlView) {
      if (quillInstance.current) {
        setHtmlContent(quillInstance.current.root.innerHTML)
      }
    } else {
      if (quillInstance.current) {
        quillInstance.current.root.innerHTML = htmlContent
        setContent(htmlContent)
      }
    }
    setShowHtmlView(!showHtmlView)
  }

  const [savedRange, setSavedRange] = useState<any>(null)

  const handleHtmlChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHtmlContent(e.target.value)
  }

  const applyHtmlChanges = () => {
    if (quillInstance.current) {
      quillInstance.current.root.innerHTML = htmlContent
      setContent(htmlContent)
    }
    setShowHtmlView(false)
  }

  const handleAltCancel = () => {
    setShowAltModal(false)
    setPendingImage(null)
  }

  const handleAltSubmit = async (altText: string) => {
    if (!pendingImage || !quillInstance.current) {
      setShowAltModal(false)
      return
    }

    setIsUploading(true)
    const file = pendingImage

    const formData = new FormData()
    formData.append("file", file)

    try {
      const quill = quillInstance.current
      // Get selection from saved state or current selection
      const range = savedRange ||
        quill.getSelection(true) || { index: quill.getLength() }
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      })

      if (res.ok) {
        const data = await res.json()
        quill.insertEmbed(range.index, "image", data.url)

        setTimeout(() => {
          const img = quill.root.querySelector(`img[src="${data.url}"]`)
          if (img) {
            img.setAttribute("alt", altText)
          }
        }, 0)

        quill.setSelection(range.index + 1)
        setShowAltModal(false)
        setPendingImage(null)
      } else {
        const text = await res.text()
        console.error(
          "Image upload failed. Status:",
          res.status,
          "Response:",
          text
        )
        try {
          const errorData = JSON.parse(text)
          if (errorData.details) {
            console.error("S3 Upload Error Details:", errorData.details)
          }
          const errorMessage =
            errorData.details?.message ||
            errorData.details ||
            errorData.message ||
            errorData.error
          alert(
            `Image upload failed: ${errorMessage}\nCheck console for details.`
          )
        } catch {
          if (text.includes("<!DOCTYPE html>")) {
            alert(
              `Request Blocked by Firewall (Cloudflare). The server treated this upload as a bot request.\n\nTechncial Detail: Received HTML challenge page instead of JSON.`
            )
          } else {
            alert(`Image upload failed: ${text.substring(0, 500)}`)
          }
        }
      }
    } catch (e) {
      console.error("Error uploading image:", e)
      alert("Error uploading image")
    } finally {
      setIsUploading(false)
    }
  }

  // -----------------------------------------------------------------------
  // IMPORTANT: deps = [viewMode] only.
  // • `content` is intentionally excluded: we read it via contentRef.current
  //   so that the effect doesn’t re-run (and destroy/re-create the resizer)
  //   every time setContent is called from inside the resize handler.
  // • `setContent` is a React useState setter and is guaranteed stable
  //   across renders, so excluding it from deps is safe.
  // -----------------------------------------------------------------------
  useEffect(() => {
    if (
      viewMode === "form" &&
      typeof window !== "undefined" &&
      editorRef.current &&
      !quillInstance.current
    ) {
      import("quill").then(async (QuillModule) => {
        const QuillNamespace = QuillModule.default || QuillModule

        ;(window as any).Quill = QuillNamespace

        const showHtmlHandler = function (this: any) {
          // Switch to HTML view
          const html = quill.root.innerHTML
          setHtmlContent(html)
          setShowHtmlView(true)
        }

        const imageHandler = function (this: any) {
          // Save current selection before losing focus to file dialog
          const range = quill.getSelection()
          setSavedRange(range)

          const input = document.createElement("input")
          input.setAttribute("type", "file")
          input.setAttribute("accept", "image/webp, image/svg+xml")
          input.click()

          input.onchange = () => {
            const file = input.files ? input.files[0] : null
            if (file) {
              const fileType = file.type
              const validTypes = ["image/webp", "image/svg+xml"]

              if (!validTypes.includes(fileType)) {
                alert("Only .webp and .svg images are allowed.")
                return
              }
              setPendingImage(file)
              setShowAltModal(true)
            }
          }
        }

        // Configure custom font sizes
        const Size = QuillNamespace.import("attributors/style/size")
        const outputSizeList = [
          "10px",
          "12px",
          "14px",
          "16px",
          "18px",
          "20px",
          "24px",
          "30px",
          "32px",
          "48px",
        ]
        Size.whitelist = outputSizeList
        QuillNamespace.register(Size, true)

        // Custom TableEmbedBlot to preserve raw HTML tables
        const BlockEmbed = QuillNamespace.import('blots/block/embed')
        class TableEmbedBlot extends BlockEmbed {
          static create(value: any) {
            const node = super.create() as HTMLElement
            
            if (value instanceof HTMLElement) {
              node.innerHTML = value.innerHTML
              Array.from(value.attributes).forEach(attr => {
                node.setAttribute(attr.name, attr.value)
              })
            } else if (typeof value === 'object' && value.html) {
              node.innerHTML = value.html
              if (value.attributes) {
                Object.keys(value.attributes).forEach(key => {
                  node.setAttribute(key, value.attributes[key])
                })
              }
            } else if (typeof value === 'string') {
              node.innerHTML = value
            }
            
            // Make uneditable in Quill visual mode so it's not destroyed by typing
            node.setAttribute('contenteditable', 'false')
            
            return node
          }

          static value(node: HTMLElement) {
            return {
              html: node.innerHTML,
              attributes: Array.from(node.attributes).reduce((acc: any, attr) => {
                if (attr.name !== 'contenteditable') {
                  acc[attr.name] = attr.value
                }
                return acc
              }, {})
            }
          }
        }
        TableEmbedBlot.blotName = 'tableEmbed'
        TableEmbedBlot.tagName = 'TABLE'
        QuillNamespace.register(TableEmbedBlot, true)

        const editorElement = editorRef.current
        if (!editorElement) return

        const quill = new QuillNamespace(editorElement, {
          modules: {
            toolbar: {
              container: [
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                [{ size: outputSizeList }],
                [
                  {
                    color: [
                      "#000000",
                      "#2b2b2b",
                      "#5b5b5b",
                      "#1c5af4",
                      "#f03d3e",
                    ],
                  },
                  {
                    background: [
                      "#000000",
                      "#2b2b2b",
                      "#5b5b5b",
                      "#1c5af4",
                      "#f03d3e",
                    ],
                  },
                ],
                ["bold", "italic", "underline", "strike"],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ indent: "-1" }, { indent: "+1" }],
                [{ align: [] }],
                ["blockquote", "code-block"],
                [{ script: "sub" }, { script: "super" }],
                ["link", "image"],
                ["showHtml"],
              ],
              handlers: {
                showHtml: showHtmlHandler,
                image: imageHandler,
              },
            },
          },
          theme: "snow",
          placeholder: "Write the definition or content here...",
        })

        quillInstance.current = quill

        // Attach custom image resizer (8-handle, no aspect-ratio lock).
        // Store cleanup in a ref so it survives content-change re-renders.
        resizerCleanupRef.current = createImageResizer(quill, setContent)

        // Load initial content via ref so we capture the latest value
        // without the effect depending on the `content` prop.
        if (contentRef.current && (quill as any).history) {
          quill.root.innerHTML = contentRef.current
          ;(quill as any).history.clear()
        }

        quill.on("text-change", () => {
          const html = quill.root.innerHTML
          setContent(html)
        })
      })
    }

    return () => {
      // Only destroy the resizer and Quill when truly leaving form mode
      // (not on content-change re-renders, which no longer happen because
      // `content` is not in the deps array).
      if (viewMode !== "form") {
        resizerCleanupRef.current?.()
        resizerCleanupRef.current = null
        quillInstance.current = null
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewMode])

  return {
    editorRef,
    quillInstance,
    showHtmlView,
    setShowHtmlView,
    htmlContent,
    setHtmlContent,
    toggleHtmlView,
    handleHtmlChange,
    applyHtmlChanges,
    showAltModal,
    pendingImage,
    isUploading,
    handleAltSubmit,
    handleAltCancel,
  }
}
