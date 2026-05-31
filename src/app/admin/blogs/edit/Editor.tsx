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
                                
                                // Find marker in the DOM and position selection
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
                                }
                                
                                api.close();
                            }
                        });
                        
                        // Set selection inside the modal's textarea once it's rendered
                        setTimeout(() => {
                            const textarea = document.querySelector('.tox-dialog textarea') as HTMLTextAreaElement;
                            if (textarea) {
                                textarea.focus();
                                textarea.setSelectionRange(cursorIndex, cursorIndex);
                            }
                        }, 80);
                    });
                }
            }}
        />
    )
}
