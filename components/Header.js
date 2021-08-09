import Link from "next/link"
import { useState } from "react"

function Header() {
    const [visible, setVisible] = useState(false)

    return (
        <div className="w-screen bg-gray-100 p-3 flex items-center justify-between space-x-3">
            <div className="flex-start cursor-pointer">
                <Link href="/">
                    <strong>Sheil Gandhi</strong>
                </Link>
            </div>
            {/* Computer Size */}
            <div className="hidden md:inline-flex items-center flex-end text-gray-700">
                <p className="px-5">Link1</p>
                <p className="px-5">Link2</p>
                <p className="px-5">Link3</p>
                <p className="px-5">Link4</p>
            </div>
            {/* Tablet */}
            <div className="inline-flex md:hidden" onClick={() => setVisible(!visible)}>
                {
                    visible ?
                    <div className="fixed top-0 right-0 bottom-0 z-10 bg-white w-72 h-screen"> {/* X */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-3 right-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <div className="font-medium text-lg pt-10">
                        <p className="px-5 py-2 border-b-2 border-gray-500">Link1</p>
                        <p className="px-5 py-2 border-b-2 border-gray-500">Link2</p>
                        <p className="px-5 py-2 border-b-2 border-gray-500">Link3</p>
                        <p className="px-5 py-2 border-b-2 border-gray-500">Link4</p>
                        </div>
                    </div>  
                    :
                    <div> {/* Hamburger Menu */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                }
            </div>
        </div>
    )
}

export default Header
