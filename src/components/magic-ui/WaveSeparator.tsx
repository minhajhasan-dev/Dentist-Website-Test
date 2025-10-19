import * as React from 'react'
import { cn } from '@/lib/utils'

interface WaveSeparatorProps extends React.SVGAttributes<SVGSVGElement> {
  flip?: boolean
}

export function WaveSeparator({ className, flip = false, ...props }: WaveSeparatorProps) {
  return (
    <svg
      className={cn('wave-separator', className)}
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden
      {...props}
    >
      <path
        d={flip ? 'M0,0 C300,80 600,0 900,40 C1200,80 1440,0 1440,0 L1440,80 L0,80 Z' : 'M0,80 C300,0 600,80 900,40 C1200,0 1440,80 1440,80 L1440,0 L0,0 Z'}
        fill="currentColor"
        className="text-background"
      />
    </svg>
  )
}
