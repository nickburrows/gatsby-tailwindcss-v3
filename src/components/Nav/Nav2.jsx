import React from "react"

const Nav2 = () => {
  return (
    <nav className="container flex justify-between px-4 py-8 mx-auto bg-white">
      <div>
        <h3 className="text-2xl font-medium text-blue-500">LOGO</h3>
      </div>
      <div className="hidden space-x-8 lg:flex">
        <a href="/">Home</a>
        <a href="/">About Us</a>
        <a href="/">Blogs</a>
        <a href="/">Our Team</a>
        <a href="/">Contact Us</a>
      </div>
      <div className="flex lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </nav>
  )
}

export default Nav2
