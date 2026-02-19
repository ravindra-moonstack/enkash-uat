
'use client';

import React, { useState } from 'react';

export default function TestUploadPage() {
    const [file, setFile] = useState<File | null>(null);
    const [response, setResponse] = useState<string>('');
    const [status, setStatus] = useState<string>('');

    const handleUpload = async () => {
        if (!file) {
            alert('Please select a file');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        setResponse('Uploading...');

        try {
            const res = await fetch('/api/test-upload', {
                method: 'POST',
                body: formData,
                // No headers needed for FormData; browser sets Content-Type boundary
            });

            setStatus(`Status: ${res.status}`);

            const text = await res.text();
            setResponse(text);

            if (!res.ok) {
                if (text.includes('<!DOCTYPE html>')) {
                    alert('Server returned HTML (likely Cloudflare Block). See response below.');
                } else {
                    alert('Upload failed with error. See response below.');
                }
            } else {
                alert('Upload successful!');
            }

        } catch (e: any) {
            console.error(e);
            setResponse(`Error: ${e.message}`);
        }
    };

    return (
        <div style={{ padding: '20px', paddingTop: "200px" }}>
            <h1>Public Upload Test</h1>
            <input
                type="file"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                accept="image/*"
            />
            <button
                onClick={handleUpload}
                style={{ marginLeft: '10px', padding: '5px 10px', cursor: 'pointer' }}
            >
                Upload Test File
            </button>

            <div style={{ marginTop: '20px' }}>
                <h3>Server Response:</h3>
                <p>{status}</p>
                <pre style={{ background: '#f0f0f0', padding: '10px', whiteSpace: 'pre-wrap' }}>
                    {response}
                </pre>
            </div>
        </div>
    );
}
