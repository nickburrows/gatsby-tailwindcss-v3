import React from "react"

const Nav1 = () => {
  return (
    <nav className="container flex justify-around w-full py-8 mx-auto bg-white">
      <div>
        <h3 className="text-2xl font-medium text-blue-500">LOGO</h3>
      </div>
      <div className="space-x-8">
        <a href="/">Home</a>
        <a href="/">About Us</a>
        <a href="/">Blogs</a>
        <a href="/">Our Team</a>
        <a href="/">Contact Us</a>
      </div>
    </nav>
  )
}

export default Nav1
