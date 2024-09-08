"use client";
import { useEffect, useState, useRef, ReactNode, createContext, useContext, Dispatch, SetStateAction } from "react"

interface IObserverContextProps {
    isIntersecting: boolean
    setIsIntersecting: Dispatch<SetStateAction<boolean>>
    ref: React.MutableRefObject<null>
    setRef: (ref: React.MutableRefObject<null>) => void
}

const ObserverContext = createContext<IObserverContextProps>({
    isIntersecting: false,
    setIsIntersecting: () => { },
    ref: { current: null },
    setRef: () => { }
})

export function useObserver() {
    const context = useContext(ObserverContext)
    if (!context) {
        throw new Error("useObserver must be used within a ObserverProvider")
    }
    return context
}


export function ObserverProvider({ children }: { children: ReactNode }) {
    const [isObserved, setIsObserved] = useState<boolean>(false)
    const [isIntersecting, setIsIntersecting] = useState<boolean>(false)
    const [ref, setRef] = useState<React.MutableRefObject<null>>(useRef(null))
    const values = { isIntersecting, ref, setIsIntersecting, setRef, isObserved, setIsObserved }
    return (
        <ObserverContext.Provider value={values}>
            {children}
        </ObserverContext.Provider>
    )
}