import { useEffect, useRef, useState } from "react";

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

    const toggleHtmlView = () => {
        if (!showHtmlView) {
            setHtmlContent(content);
        } else {
            if (quillInstance.current) {
                quillInstance.current.root.innerHTML = htmlContent;
                setContent(htmlContent);
            }
        }
        setShowHtmlView(!showHtmlView);
    };

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

    useEffect(() => {
        if (viewMode === "form" && typeof window !== "undefined" && editorRef.current && !quillInstance.current) {
            import("quill").then((Quill) => {
                const QuillNamespace = Quill.default || Quill;

                const showHtmlHandler = function (this: any) {
                    toggleHtmlView();
                };

                //@ts-ignore
                const quill = new QuillNamespace(editorRef.current, {
                    modules: {
                        toolbar: {
                            container: [
                                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                                [{ size: ["small", false, "large", "huge"] }],
                                [{ color: [] }, { background: [] }],
                                ["bold", "italic", "underline", "strike"],
                                [{ list: "ordered" }, { list: "bullet" }],
                                [{ indent: "-1" }, { indent: "+1" }],
                                [{ align: [] }],
                                ["blockquote", "code-block"],
                                [{ script: "sub" }, { script: "super" }],
                                ["link", "image"],
                                ["clean"],
                                ["showHtml"],
                            ],
                            handlers: {
                                showHtml: showHtmlHandler,
                            },
                        },
                    },
                    theme: "snow",
                    placeholder: "Write the definition or content here...",
                });

                quillInstance.current = quill;

                if (content) {
                    quill.root.innerHTML = content;
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
    }, [viewMode]);

    return {
        editorRef,
        quillInstance,
        showHtmlView,
        setShowHtmlView,
        htmlContent,
        setHtmlContent,
        toggleHtmlView,
        handleHtmlChange,
        applyHtmlChanges
    };
};
