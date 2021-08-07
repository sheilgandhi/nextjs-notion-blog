import Link from "next/link"

function Header() {
    return (
        <div className="w-screen bg-gray-100 p-3 flex items-center justify-between space-x-3">
            <div className="flex-start cursor-pointer">
                <Link href="/">
                    <strong>Sheil Gandhi</strong>
                </Link>
            </div>
            <div className="flex items-center flex-end text-gray-700">
                <p className="px-5">Link1</p>
                <p className="px-5">Link2</p>
                <p className="px-5">Link3</p>
                <p className="px-5">Link4</p>
            </div>
        </div>
    )
}

export default Header
