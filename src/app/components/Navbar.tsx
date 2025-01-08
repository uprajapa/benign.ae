import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-gray-500 text-white text- p-5 sm:p-4 md:flex md:justify-between md:items-center">
      <div className="container mx-auto flex justify-between items-center">
        <a href="" className="text-2xl font-bold">
          Benign
        </a>
        <div>
        <Link href="../" className="mx-2 hover:text-gray-700">
          Home 
        </Link>
        <Link href="/login" className="mx-2 hover:text-gray-700">
          Login 
        </Link>
        <Link href="/store " className="mx-2 hover:text-gray-700">
          Store
        </Link>
        </div>
      </div>
    </nav>
  )
}