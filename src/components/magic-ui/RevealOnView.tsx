"use client"

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface RevealOnViewProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number
}

export function RevealOnView({ className, children, delay = 0, ...props }: RevealOnViewProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delay * 1000)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.15 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-500 ease-out will-change-transform',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
