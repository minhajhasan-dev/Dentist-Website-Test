"use client"

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface SpotlightProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Spotlight({ className, children, ...props }: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const move = (e: MouseEvent) => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReduced) return
      const rect = el.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      el.style.setProperty('--spot-x', `${x}%`)
      el.style.setProperty('--spot-y', `${y}%`)
    }
    el.addEventListener('mousemove', move)
    return () => el.removeEventListener('mousemove', move)
  }, [])

  return (
    <div ref={ref} className={cn('spotlight', className)} {...props}>
      {children}
    </div>
  )
}
