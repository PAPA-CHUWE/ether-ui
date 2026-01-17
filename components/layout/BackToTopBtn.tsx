"use client"

import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { ChevronUpSquare } from 'lucide-react'

const BackToTopBtn = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight =
        document.querySelector('section')?.offsetHeight ?? 300

      setVisible(window.scrollY > heroHeight)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <Button
      onClick={handleBackToTop}
      aria-label="Back to top"
      size="icon"
      className={`
        fixed bottom-6 right-6 z-50
        bg-white ring-1 ring-ring text-[#000066]
        hover:text-white shadow-lg
        hover:scale-105 transition
        ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
    >
      <ChevronUpSquare className="h-6 w-6" />
    </Button>
  )
}

export default BackToTopBtn
