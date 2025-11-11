import { useState, useEffect } from 'react'
import type { RefObject } from 'react'

export function useIntersectionObserver(
  ref: RefObject<HTMLElement | null>,
  options?: IntersectionObserverInit
): boolean {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
        ...options,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [ref, options])

  return isVisible
}

