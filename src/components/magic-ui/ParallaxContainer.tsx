"use client"

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface ParallaxContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  strength?: number // amount of parallax on mouse move
}

export function ParallaxContainer({ strength = 20, className, children, ...props }: ParallaxContainerProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const move = (e: MouseEvent) => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReduced) return
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      el.style.setProperty('--px', `${(x - 0.5) * strength}px`)
      el.style.setProperty('--py', `${(y - 0.5) * strength}px`)
    }

    el.addEventListener('mousemove', move)
    return () => el.removeEventListener('mousemove', move)
  }, [strength])

  return (
    <div
      ref={ref}
      className={cn('relative will-change-transform', className)}
      style={{ transform: 'translate3d(var(--px, 0), var(--py, 0), 0)' }}
      {...props}
    >
      {children}
    </div>
  )
}
