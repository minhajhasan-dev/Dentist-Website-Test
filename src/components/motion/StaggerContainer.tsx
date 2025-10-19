"use client"

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  delayChildren?: number
  staggerChildren?: number
  className?: string
}

export function StaggerContainer({ children, delayChildren = 0.1, staggerChildren = 0.08, className }: Props) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden: {}, show: {} }}
      transition={{
        staggerChildren: prefersReducedMotion ? 0 : staggerChildren,
        delayChildren: prefersReducedMotion ? 0 : delayChildren,
      }}
    >
      {children}
    </motion.div>
  )
}
