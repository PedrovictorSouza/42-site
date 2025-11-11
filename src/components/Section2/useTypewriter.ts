import { useState, useEffect } from 'react'

export function useTypewriter(text: string, speed: number = 50, freezeTime: number = 3000) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFreezing, setIsFreezing] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    if (isFreezing) {
      const freezeTimeout = setTimeout(() => {
        setIsFreezing(false)
        setCurrentIndex(0)
        setDisplayedText('')
      }, freezeTime)
      return () => clearTimeout(freezeTimeout)
    }

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, speed)
      return () => clearTimeout(timeout)
    } else {
      setIsFreezing(true)
    }
  }, [currentIndex, text, speed, freezeTime, isFreezing])

  return { displayedText, showCursor }
}

