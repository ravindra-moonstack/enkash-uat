"use client"

import React from "react"
import { Editor as TinyMCEEditor } from "@tinymce/tinymce-react"

interface EditorProps {
    value: string
    onChange: (value: string) => void
    disabled?: boolean
}

export default function Editor({ value, onChange, disabled }: EditorProps) {
    const apiKey = process.env.NEXT_PUBLIC_TINYMCE_API_KEY && process.env.NEXT_PUBLIC_TINYMCE_API_KEY !== "no-api-key"
        ? process.env.NEXT_PUBLIC_TINYMCE_API_KEY
        : "jh7vh9v52fnbaqxly036le6qtmrk1xngd4e3bzqstg3cr2sd";

    return (
        <TinyMCEEditor
            apiKey={"jh7vh9v52fnbaqxly036le6qtmrk1xngd4e3bzqstg3cr2sd"}
            value={value}
            disabled={disabled}
            onEditorChange={(content) => onChange(content)}
            init={{
                height: 500,
                relative_urls: false,
                menubar: "file edit view insert format tools table",
                plugins: [
                    "advlist", "autolink", "lists", "link", "image", "charmap", "preview",
                    "anchor", "searchreplace", "visualblocks", "code", "fullscreen",
                    "insertdatetime", "media", "table", "help", "wordcount", "emoticons",
                    "directionality", "nonbreaking"
                ],
                toolbar1: "blocks | bold italic blockquote | bullist numlist | alignleft aligncenter alignright alignjustify | link unlink undo redo | charmap",
                toolbar2: "nonbreaking fontsize | ltr rtl | anchor emoticons | forecolor backcolor | table | help | fullscreen",
                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
                branding: false,
                promotion: false,
                toolbar_sticky: true,
                fontsize_formats: "8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt",
                link_rel_list: [
                    { title: 'Do Follow (Standard)', value: '' },
                    { title: 'No Follow', value: 'nofollow' },
                    { title: 'Sponsored', value: 'sponsored' }
                ],
                link_list: [
                    { title: 'Home Page', value: '/' },
                    { title: 'About Page', value: '/about-us' },
                    { title: 'Contact Page', value: '/contact-us' },
                    { title: 'Blogs Page', value: '/resources/blogs' }
                ]
            }}
        />
    )
}
