import * as React from 'react'
import { cn } from '@/lib/utils'

interface GradientBlobsProps extends React.HTMLAttributes<HTMLDivElement> {}

export function GradientBlobs({ className, ...props }: GradientBlobsProps) {
  return (
    <div aria-hidden className={cn('gradient-blobs', className)} {...props}>
      <div className="gradient-blob blue -top-20 -left-10" />
      <div className="gradient-blob teal -bottom-20 right-0" />
    </div>
  )
}
