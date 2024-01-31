import Image from "next/image"
import Link from "next/link"
import logo from '../assets/favicon.svg'

const Navbar = () => {
    return (
        <header className="flex justify-between items-center px-4 md:px12 py-2 fixed top-0
    w-full z-50 shadow bg-white">
            <Link href={'/'}>
                <Image src={logo} alt="logo" />
            </Link>
            <div className="flex items-center space-x-2.5 text-sm">
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href={'/'} className="mr-5 hover:text-gray-900">
                        Home page
                    </Link>
                    <Link href={'/products'} className="mr-5 hover:text-gray-900">
                        All products
                    </Link>
                </nav>
                <Link href={'shopping'}>
                    <button className="button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:text-blue-600 hover:bg-transparent">
                        Shopping cart
                    </button>
                </Link>

            </div>
        </header>
    )
}

export default Navbar