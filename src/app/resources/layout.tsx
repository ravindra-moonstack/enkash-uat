import ConsultationModal from "@/src/components/consultation-modal/ConsultationModal"
import { Suspense } from "react"

export default function ResourcesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <main>{children}</main>
                <Suspense fallback={null}>
                    <ConsultationModal />
                </Suspense>
            </body>
        </html>
    )
}