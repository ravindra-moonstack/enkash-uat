import { useEffect, useRef, useState } from "react";
import 'quill/dist/quill.snow.css';

interface UseQuillEditorProps {
    content: string;
    setContent: (content: string) => void;
    viewMode: string;
}

export const useQuillEditor = ({ content, setContent, viewMode }: UseQuillEditorProps) => {
    const editorRef = useRef<HTMLDivElement>(null);
    const quillInstance = useRef<any>(null);
    const [showHtmlView, setShowHtmlView] = useState(false);
    const [htmlContent, setHtmlContent] = useState("");
    
    // Alt Text Modal State
    const [showAltModal, setShowAltModal] = useState(false);
    const [pendingImage, setPendingImage] = useState<File | null>(null);

    const toggleHtmlView = () => {
        if (!showHtmlView) {
            // Switch to HTML View
            if (quillInstance.current) {
                setHtmlContent(quillInstance.current.root.innerHTML);
            }
        } else {
            // Switch back to Visual View
            if (quillInstance.current) {
                quillInstance.current.root.innerHTML = htmlContent; 
                setContent(htmlContent);
            }
        }
        setShowHtmlView(!showHtmlView);
    };

    const [savedRange, setSavedRange] = useState<any>(null);

    const handleHtmlChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setHtmlContent(e.target.value);
    };

    const applyHtmlChanges = () => {
        if (quillInstance.current) {
            quillInstance.current.root.innerHTML = htmlContent;
            setContent(htmlContent);
        }
        setShowHtmlView(false);
    };

    const handleAltCancel = () => {
        setShowAltModal(false);
        setPendingImage(null);
    };

    const handleAltSubmit = async (altText: string) => {
        setShowAltModal(false);
        if (!pendingImage || !quillInstance.current) return;

        const file = pendingImage;
        setPendingImage(null);

        const formData = new FormData();
        formData.append('file', file);

        try {
            const quill = quillInstance.current;
            // Get selection from saved state or current selection
            const range = savedRange || quill.getSelection(true) || { index: quill.getLength() };
            
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData
            });
            
            if (res.ok) {
                console.log("image uploaded");
                const data = await res.json();
                quill.insertEmbed(range.index, 'image', data.url);
                
                setTimeout(() => {
                    const img = quill.root.querySelector(`img[src="${data.url}"]`);
                    if (img) {
                        img.setAttribute('alt', altText);
                    }
                }, 0);
                
                quill.setSelection(range.index + 1);
            } else {
                const text = await res.text();
                console.error('Image upload failed. Status:', res.status, 'Response:', text);
                try {
                     const errorData = JSON.parse(text);
                     alert(`Image upload failed: ${errorData.error}\nCheck console for details.`);
                } catch {
                     // If response is not JSON (e.g. HTML 403/500 page)
                     alert(`Image upload failed: ${text.substring(0, 500)}`);
                }
            }
        } catch (e) {
            console.error('Error uploading image:', e);
            alert('Error uploading image');
        }
    };

    useEffect(() => {
        if (viewMode === "form" && typeof window !== "undefined" && editorRef.current && !quillInstance.current) {
            import("quill").then(async (QuillModule) => {
                const QuillNamespace = QuillModule.default || QuillModule;
                 
                //@ts-expect-error Quill is not typed directly on window
                window.Quill = QuillNamespace;

                // Load quill-image-resize-module (Compatible with Quill 1.x)
                try {
                    const mod = await import('quill-image-resize-module');
                    const ImageResize = mod.default || mod;
                    
                    if (QuillNamespace && QuillNamespace.register) {
                        QuillNamespace.register('modules/imageResize', ImageResize);
                        console.log("ImageResize module registered successfully (Quill 1.x)");
                    } else {
                        console.error("QuillNamespace.register is not available");
                    }
                } catch (error) {
                    console.error("Failed to load image resize module", error);
                }

                const showHtmlHandler = function (this: any) {
                    // Switch to HTML view
                    const html = quill.root.innerHTML;
                    setHtmlContent(html);
                    setShowHtmlView(true);
                };

                const imageHandler = function (this: any) {
                    // Save current selection before losing focus to file dialog
                    const range = quill.getSelection();
                    setSavedRange(range);

                    const input = document.createElement('input');
                    input.setAttribute('type', 'file');
                    input.setAttribute('accept', 'image/webp, image/svg+xml');
                    input.click();

                     input.onchange = () => {
                         const file = input.files ? input.files[0] : null;
                         if (file) {
                              const fileType = file.type;
                              const validTypes = ['image/webp', 'image/svg+xml'];
                              
                              if (!validTypes.includes(fileType)) {
                                  alert('Only .webp and .svg images are allowed.');
                                  return;
                              }
                              
                              // Instead of direct upload, trigger Modal
                              console.log("File selected, triggering Alt Text Modal:", file.name);
                              setPendingImage(file);
                              setShowAltModal(true);
                         }
                     };
                };

                // Configure custom font sizes
                const Size = QuillNamespace.import('attributors/style/size');
                const outputSizeList = ['10px', '12px', '14px', '16px', '18px', '20px', '24px', '30px', '32px', '48px'];
                Size.whitelist = outputSizeList;
                QuillNamespace.register(Size, true);

                const editorElement = editorRef.current;
                if (!editorElement) return;

                const quill = new QuillNamespace(editorElement, {
                    modules: {
                        imageResize: {
                            displaySize: true
                        },
                        toolbar: {
                            container: [
                                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                                [{ size: outputSizeList }],
                                [{ color: ["#000000", "#2b2b2b", "#5b5b5b", "#1c5af4", "#f03d3e"] }, { background: ["#000000", "#2b2b2b", "#5b5b5b", "#1c5af4", "#f03d3e"] }],                                ["bold", "italic", "underline", "strike"],
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
                });

                quillInstance.current = quill;

                if (content && (quill as any).history) {
                    quill.root.innerHTML = content;
                    (quill as any).history.clear();
                }

                quill.on("text-change", () => {
                    const html = quill.root.innerHTML;
                    setContent(html);
                });
            });
        }
        
        return () => {
            if (viewMode !== "form") {
                quillInstance.current = null;
            }
        };
    }, [viewMode, content, setContent]);

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
        handleAltSubmit,
        handleAltCancel
    };
};
