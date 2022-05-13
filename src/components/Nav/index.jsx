import React from "react"
import { CgMonday } from "react-icons/cg"
import { Link } from "gatsby"

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: "home",
  },
  {
    name: "Blog",
    link: "blog",
    icon: "rss_feed",
  },
  {
    name: "Demo",
    link: "demo",
    icon: "emoji_symbols",
  },
  {
    name: "Page 2",
    link: "page-2",
    icon: "bug_report",
  },
  {
    name: "DSG",
    link: "DSG",
    icon: "dns",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Nav = ({ currentPath }) => {
  return (
    <>
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <CgMonday className="logo" />
        </div>
        <div className="hidden md:block">
          <div className="flex items-baseline ml-10 space-x-4">
            <Link
              to="/"
              className={classNames(
                currentPath === "/"
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "px-3 py-2 rounded-md text-sm font-medium"
              )}
            >
              Home
            </Link>
            <Link
              to="blog"
              className={classNames(
                currentPath === "blog"
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "px-3 py-2 rounded-md text-sm font-medium"
              )}
            >
              Blog
            </Link>
            <Link
              to="demo"
              className={classNames(
                currentPath === "demo"
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "px-3 py-2 rounded-md text-sm font-medium"
              )}
            >
              Demo
            </Link>
            <Link
              to="page-2"
              className={classNames(
                currentPath === "page-2"
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "px-3 py-2 rounded-md text-sm font-medium"
              )}
            >
              Page 2
            </Link>
            <Link
              to="DSG"
              className={classNames(
                currentPath === "DSG"
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "px-3 py-2 rounded-md text-sm font-medium"
              )}
            >
              DSG
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
