import * as React from 'react'
import { cn } from '@/lib/utils'

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {}

export function BentoGrid({ className, children, ...props }: BentoGridProps) {
  return (
    <div
      className={cn(
        'grid auto-rows-[14rem] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: string
}

export function BentoCard({ className, span, ...props }: BentoCardProps) {
  return (
    <div className={cn('glass rounded-xl p-6 hover-lift', span, className)} {...props} />
  )
}
