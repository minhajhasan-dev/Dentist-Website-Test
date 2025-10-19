"use client"

import { useEffect, useState } from 'react'
import { ShimmerButton } from './ShimmerButton'

export function StickyCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setVisible(y > 600)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (dismissed || !visible) return null

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex items-center justify-center">
      <div className="glass mx-auto flex w-[min(720px,95%)] items-center justify-between gap-3 rounded-full p-2 pl-4 shadow-lg">
        <p className="hidden text-sm text-muted-foreground sm:block">Ready for a brighter smile?</p>
        <div className="flex items-center gap-2">
          <ShimmerButton className="rounded-full px-5">Book an appointment</ShimmerButton>
          <button
            className="rounded-full p-2 text-sm text-muted-foreground hover:bg-accent"
            aria-label="Dismiss"
            onClick={() => setDismissed(true)}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}
