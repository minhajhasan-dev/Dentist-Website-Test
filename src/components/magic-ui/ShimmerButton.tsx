"use client"

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { buttonVariants, type ButtonProps } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export interface ShimmerButtonProps extends ButtonProps {
  asChild?: boolean
}

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  ({ className, variant = 'default', size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), 'shimmer bg-brand-gradient text-white')}
        ref={ref}
        {...props}
      />
    )
  }
)
ShimmerButton.displayName = 'ShimmerButton'
