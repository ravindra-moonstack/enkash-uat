'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error("Resources Page Error:", error)
    }, [error])

    return (
        <div className="container py-5 text-center">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="mb-4">Something went wrong!</h2>
                    <p className="text-muted mb-4">
                        We encountered an error while loading the resources. Please try refreshing the page.
                    </p>
                    <button
                        className="btn btn-primary"
                        onClick={() => reset()}
                    >
                        Try again
                    </button>
                </div>
            </div>
        </div>
    )
}