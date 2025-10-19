import * as React from 'react'
import { cn } from '@/lib/utils'

interface HoverCardLiftProps extends React.HTMLAttributes<HTMLDivElement> {}

export function HoverCardLift({ className, ...props }: HoverCardLiftProps) {
  return <div className={cn('hover-lift glass rounded-xl', className)} {...props} />
}
