"use client"

import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

type Props = HTMLMotionProps<'div'> & {
  children: ReactNode
  lift?: number
}

export function HoverLift({ children, className, lift = 6, ...props }: Props) {
  const prefersReducedMotion = useReducedMotion()

  const hoverVariants = prefersReducedMotion
    ? { rest: { y: 0, boxShadow: 'none' }, hover: { y: 0, boxShadow: 'none' } }
    : {
        rest: { y: 0, boxShadow: 'var(--shadow-card)' },
        hover: { y: -lift, boxShadow: 'var(--shadow-card-hover)' },
      }

  return (
    <motion.div
      variants={hoverVariants}
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileFocus="hover"
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
