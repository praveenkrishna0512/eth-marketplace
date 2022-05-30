import { Navbar, Footer } from "@components/common"

export default function BaseLayout({children}) {
    return (
        <>
            <div className="max-w-8xl mx-auto px-4">
                <Navbar />
                <div className="fit">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
}