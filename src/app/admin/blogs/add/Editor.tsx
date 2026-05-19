// "use client"

// import React from "react"
// import { Editor as TinyMCEEditor } from "@tinymce/tinymce-react"

// interface EditorProps {
//     value: string
//     onChange: (value: string) => void
// }

// export default function Editor({ value, onChange }: EditorProps) {
//     return (
//         <TinyMCEEditor
//             apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
//             value={value}
//             onEditorChange={(content) => onChange(content)}
//             init={{
//                 height: 600,
//                 menubar: "file edit view insert format tools table",
//                 plugins: [
//                     'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
//                     'checklist', 'mediaembed', 'casechange', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'advtemplate', 'tinymceai', 'uploadcare', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown', 'importword', 'exportword', 'exportpdf'
//                 ],
//                 toolbar: 'undo redo | tinymceai-chat tinymceai-quickactions tinymceai-review | blocks fontfamily fontsize | bold italic underline strikethrough | link media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography uploadcare | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
//                 tinycomments_mode: 'embedded',
//                 tinycomments_author: 'Author name',
//                 mergetags_list: [
//                     { value: 'First.Name', title: 'First Name' },
//                     { value: 'Email', title: 'Email' },
//                 ],
//                 // @ts-ignore
//                 tinymceai_token_provider: async () => {
//                     await fetch(`https://demo.api.tiny.cloud/1/jh7vh9v52fnbaqxly036le6qtmrk1xngd4e3bzqstg3cr2sd/auth/random`, { method: "POST", credentials: "include" });
//                     return { token: await fetch(`https://demo.api.tiny.cloud/1/jh7vh9v52fnbaqxly036le6qtmrk1xngd4e3bzqstg3cr2sd/jwt/tinymceai`, { credentials: "include" }).then(r => r.text()) };
//                 },
//                 uploadcare_public_key: 'b3983b2622af09b2c062',
//                 content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
//                 branding: false,
//                 promotion: false,
//             }}
//         />
//     )
// }
"use client"

import React from "react"
import { Editor as TinyMCEEditor } from "@tinymce/tinymce-react"

interface EditorProps {
    value: string
    onChange: (value: string) => void
}

export default function Editor({ value, onChange }: EditorProps) {
    const apiKey = process.env.NEXT_PUBLIC_TINYMCE_API_KEY && process.env.NEXT_PUBLIC_TINYMCE_API_KEY !== "no-api-key"
        ? process.env.NEXT_PUBLIC_TINYMCE_API_KEY
        : "jh7vh9v52fnbaqxly036le6qtmrk1xngd4e3bzqstg3cr2sd";

    return (
        <TinyMCEEditor
            apiKey={"jh7vh9v52fnbaqxly036le6qtmrk1xngd4e3bzqstg3cr2sd"}
            value={value}
            onEditorChange={(content) => onChange(content)}
            init={{
                height: 500,
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
                    { title: 'About Page', value: '/about' },
                    { title: 'Contact Page', value: '/contact' },
                    { title: 'Blogs Page', value: '/blogs' }
                ]

            }}
        />
    )
}