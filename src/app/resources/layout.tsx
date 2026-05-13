import ConsultationModal from "@/src/components/consultation-modal/ConsultationModal"
import { Suspense } from "react"

export default function ResourcesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
            <Suspense fallback={null}>
                <ConsultationModal />
            </Suspense>
        </>
    )
}