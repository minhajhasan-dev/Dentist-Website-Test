"use client"

import { motion, useReducedMotion } from 'framer-motion'
import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
  as?: keyof JSX.IntrinsicElements
} & HTMLAttributes<HTMLElement>

export function FadeInUp({ children, className, delay = 0, as: Tag = 'div', ...props }: Props) {
  const prefersReducedMotion = useReducedMotion()

  const variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: 'easeOut', delay }}
      variants={variants}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
