import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

function Header() {
    const [visible, setVisible] = useState(false)
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 50){
                handleShow(true)
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", null);
        };
    }, [])

    return (
        <div className={`sticky top-0 w-screen p-3 flex items-center justify-between md:justify-evenly space-x-3 overflow-x-hidden ${show && "border-b-1 bg-white"}`}>
            <div className="flex-start cursor-pointer md:pt-5">
                <Link href="/">
                    <Image src="/logo.png" alt="me" width={163} height={30} />
                </Link>
            </div>
            {/* Computer Size */}
            <div className="hidden md:inline-flex items-center cursor-pointer flex-end text-gray-700 font-medium">
                <Link href="/tech"><p className="px-5">Technology</p></Link>
                <Link href="/cricket"><p className="px-5">Cricket</p></Link>
                <Link href="/opinion"><p className="px-5">Opinion</p></Link>
                <Link href="/books"><p className="px-5">Books</p></Link>
            </div>
            {/* Tablet */}
            <div className="inline-flex md:hidden">
                {
                    visible ?
                    <div className="fixed top-0 right-0 bottom-0 z-10 bg-white w-72 h-screen"> {/* X */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer absolute top-3 right-4 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setVisible(!visible)}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <div className="font-medium text-lg mt-10 cursor-pointer">
                            <Link href="/tech"><p className="mx-5 py-2 border-b-2 border-gray-200">Technology</p></Link>
                            <Link href="/cricket"><p className="mx-5 py-2 border-b-2 border-gray-200">Cricket</p></Link>
                            <Link href="/opinion"><p className="mx-5 py-2 border-b-2 border-gray-200">Opinion</p></Link>
                            <Link href="/books"><p className="mx-5 py-2 border-b-2 border-gray-200">Books</p></Link>
                        </div>
                    </div>  
                    :
                    <div> {/* Hamburger Menu */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer absolute top-3 right-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setVisible(!visible)}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                }
            </div>
        </div>
    )
}

export default Header
