import React, { Suspense, ReactNode } from "react"

const LoadingUI = () => {
    return (
        <div className="py-5 text-center w-100">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="mt-2 text-muted fw-medium">Loading...</div>
        </div>
    )
}

interface SuspenseLoadingProps {
    children: ReactNode;
    fallback?: ReactNode;
}

const SuspenseLoading = ({ children, fallback }: SuspenseLoadingProps) => {
    return (
        <Suspense fallback={fallback || <LoadingUI />}>
            {children}
        </Suspense>
    )
}

export { LoadingUI };
export default SuspenseLoading;