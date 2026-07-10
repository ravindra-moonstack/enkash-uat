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
                extended_valid_elements: "iframe[*],script[*],style[*]",
                custom_elements: "script,iframe,style",
                media_live_embeds: true,
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
                ],
                setup: (editor: any) => {
                    editor.addCommand('mceCodeEditor', () => {
                        const originalHtml = editor.getContent({ source_view: true });
                        
                        // Insert marker at cursor
                        const rng = editor.selection.getRng();
                        const marker = editor.getDoc().createElement('span');
                        marker.id = 'temp-cursor-marker';
                        
                        try {
                            const collapsedRng = rng.cloneRange();
                            collapsedRng.collapse(true);
                            collapsedRng.insertNode(marker);
                        } catch (e) {
                            // If inserting marker fails
                        }
                        
                        const htmlWithMarker = editor.getContent({ source_view: true });
                        
                        // Clean up marker in the editor DOM immediately
                        if (marker.parentNode) {
                            marker.parentNode.removeChild(marker);
                        }
                        
                        // Locate marker in HTML string to get cursor position
                        const markerString = '<span id="temp-cursor-marker"></span>';
                        let cursorIndex = htmlWithMarker.indexOf(markerString);
                        let cleanHtml = originalHtml;
                        
                        if (cursorIndex !== -1) {
                            // Strip marker from HTML
                            cleanHtml = htmlWithMarker.replace(markerString, '');
                        } else {
                            // Try variations (self-closing or empty attributes)
                            const markerRegex = /<span\s+id="temp-cursor-marker"[^>]*><\/span>/;
                            const match = markerRegex.exec(htmlWithMarker);
                            if (match) {
                                cursorIndex = match.index;
                                cleanHtml = htmlWithMarker.replace(markerRegex, '');
                            } else {
                                cursorIndex = originalHtml.length;
                            }
                        }
                        
                        // Open TinyMCE custom dialog
                        editor.windowManager.open({
                            title: 'Source Code',
                            size: 'large',
                            body: {
                                type: 'panel',
                                items: [
                                    {
                                        type: 'textarea',
                                        name: 'code',
                                        label: 'HTML Source Code'
                                    }
                                ]
                            },
                            buttons: [
                                {
                                    type: 'cancel',
                                    text: 'Cancel'
                                },
                                {
                                    type: 'submit',
                                    text: 'Save',
                                    primary: true
                                }
                            ],
                            initialData: {
                                code: cleanHtml
                            },
                            onSubmit: (api: any) => {
                                const data = api.getData();
                                const newHtml = data.code || '';
                                
                                // Retrieve selection index from textarea
                                const textarea = document.querySelector('.tox-dialog textarea') as HTMLTextAreaElement;
                                const newCursorIndex = textarea ? textarea.selectionStart : newHtml.length;
                                
                                // Insert marker in new HTML
                                const newHtmlWithMarker = newHtml.substring(0, newCursorIndex) + 
                                    '<span id="temp-cursor-marker"></span>' + 
                                    newHtml.substring(newCursorIndex);
                                
                                editor.setContent(newHtmlWithMarker);
                                
                                // Close dialog first, then asynchronously restore selection to bypass automatic close bookmarker
                                setTimeout(() => {
                                    const newMarker = editor.getDoc().getElementById('temp-cursor-marker');
                                    if (newMarker) {
                                        editor.focus();
                                        const body = editor.getBody();
                                        
                                        if (newMarker.parentNode === body) {
                                            // If marker is directly inside body (root level), wrap in a paragraph or insert empty paragraph
                                            const p = editor.getDoc().createElement('p');
                                            const br = editor.getDoc().createElement('br');
                                            br.setAttribute('data-mce-bogus', '1');
                                            p.appendChild(br);
                                            
                                            newMarker.parentNode.insertBefore(p, newMarker);
                                            
                                            const newRange = editor.dom.createRng();
                                            newRange.setStart(p, 0);
                                            newRange.setEnd(p, 0);
                                            editor.selection.setRng(newRange);
                                            newMarker.parentNode.removeChild(newMarker);
                                        } else {
                                            // Standard cursor position
                                            const newRange = editor.dom.createRng();
                                            newRange.setStartBefore(newMarker);
                                            newRange.setEndBefore(newMarker);
                                            editor.selection.setRng(newRange);
                                            newMarker.parentNode.removeChild(newMarker);
                                        }
                                        editor.nodeChanged();
                                    }
                                }, 50);
                                
                                api.close();
                            }
                        });
                        
                        // Poll for the textarea inside the newly opened modal to focus and set selection range
                        let attempts = 0;
                        const interval = setInterval(() => {
                            attempts++;
                            const textarea = document.querySelector('.tox-dialog textarea') as HTMLTextAreaElement;
                            if (textarea) {
                                clearInterval(interval);
                                textarea.focus();
                                textarea.setSelectionRange(cursorIndex, cursorIndex);
                            } else if (attempts > 30) {
                                clearInterval(interval);
                            }
                        }, 50);
                    });

                    // Intercept Enter key inside <div> elements to create a new block outside/inside instead of cloning <div>
                    editor.on('keydown', (e: any) => {
                        if (e.keyCode === 13 && !e.shiftKey) {
                            const startNode = editor.selection.getStart();
                            const div = editor.dom.getParent(startNode, 'div');
                            if (div) {
                                e.preventDefault();
                                
                                // Insert a temporary marker at selection
                                const marker = editor.getDoc().createElement('span');
                                marker.id = 'temp-enter-marker';
                                
                                const rng = editor.selection.getRng();
                                const collapsedRng = rng.cloneRange();
                                collapsedRng.collapse(true);
                                collapsedRng.insertNode(marker);
                                
                                // Split the div at the marker using TinyMCE's robust DOM split utility
                                const secondPart = editor.dom.split(div, marker);
                                
                                if (secondPart) {
                                    const firstChild = secondPart.firstChild;
                                    const isBlock = firstChild && editor.dom.isBlock(firstChild);
                                    
                                    if (isBlock) {
                                        // Unwrap the secondPart div so its block children are at the root level (outside the div)
                                        editor.dom.remove(secondPart, true);
                                    } else {
                                        // Rename the secondPart div itself to 'p'
                                        editor.dom.rename(secondPart, 'p');
                                    }
                                }
                                
                                // Set selection right at the marker
                                editor.focus();
                                const targetParent = marker.parentNode;
                                if (targetParent) {
                                    const markerIndex = Array.from(targetParent.childNodes).indexOf(marker);
                                    
                                    // Remove the marker first
                                    targetParent.removeChild(marker);
                                    
                                    const newRng = editor.dom.createRng();
                                    if (targetParent.childNodes.length === 0 || 
                                        (targetParent.childNodes.length === 1 && targetParent.firstChild?.nodeName === 'BR')) {
                                        
                                        // Ensure there is a bogus BR for visual caret rendering
                                        if (targetParent.childNodes.length === 0) {
                                            const br = editor.getDoc().createElement('br');
                                            br.setAttribute('data-mce-bogus', '1');
                                            targetParent.appendChild(br);
                                        }
                                        newRng.setStart(targetParent, 0);
                                        newRng.setEnd(targetParent, 0);
                                    } else {
                                        newRng.setStart(targetParent, markerIndex);
                                        newRng.setEnd(targetParent, markerIndex);
                                    }
                                    editor.selection.setRng(newRng);
                                }
                                
                                editor.nodeChanged();
                            }
                        }
                    });
                }
            }}
        />
    )
}