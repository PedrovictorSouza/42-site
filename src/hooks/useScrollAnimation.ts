import { useRef } from 'react'
import { useIntersectionObserver } from './useIntersectionObserver'

type AnimationType = 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'fade-in-scale'

interface UseScrollAnimationOptions {
  animationType?: AnimationType
  delay?: number
  threshold?: number
  rootMargin?: string
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(ref, {
    threshold: options.threshold,
    rootMargin: options.rootMargin,
  })

  const animationClass = options.animationType || 'fade-in-up'
  const className = isVisible ? animationClass : 'hidden'
  const style = isVisible && options.delay ? { animationDelay: `${options.delay}ms` } : {}

  return { ref, className, style }
}

