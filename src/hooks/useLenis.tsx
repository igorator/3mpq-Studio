import { create } from 'zustand'
import Lenis from '@studio-freight/lenis'

interface LenisStore {
    lenisInstance: Lenis | null
    setLenisInstance: (instance: Lenis | null) => void
}

export const useLenisStore = create<LenisStore>((set) => ({
    lenisInstance: null,
    setLenisInstance: (instance) => set({ lenisInstance: instance }),
}))
