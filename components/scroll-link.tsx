"use client"

import type React from "react"

import type { ReactNode } from "react"
import Link from "next/link"

interface ScrollLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export default function ScrollLink({ href, children, className }: ScrollLinkProps) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()

    // Get the target element
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      // Scroll to the target element
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })

      // Update URL without reloading the page
      window.history.pushState({}, "", href)
    }
  }

  return (
    <Link href={href} onClick={handleScroll} className={className}>
      {children}
    </Link>
  )
}

