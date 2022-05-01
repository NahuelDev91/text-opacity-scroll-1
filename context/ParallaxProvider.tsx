import React, { FC, ReactElement, useCallback } from 'react'

import { ParallaxContext } from './ParallaxContext'
import { useState, useEffect } from 'react';

interface Props {
    children: ReactElement;
}

export const ParallaxProvider = ({ children }: Props) => {

    const [scrollY, setScrollY] = useState(0)
    const handleScroll = useCallback(() => setScrollY(window.scrollY), [])

    useEffect(() => {
        document.addEventListener('scroll', handleScroll, { passive: true })
        return () => document.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    return (
        <ParallaxContext.Provider value={{
            scrollY
        }}>
            {children}
        </ParallaxContext.Provider>
    )
}