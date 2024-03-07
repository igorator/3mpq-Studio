import { create } from 'zustand'

interface MenuState {
    isMenuOpen: boolean
    toggleMenu: () => void
}

export const useMenu = create<MenuState>((set) => ({
    isMenuOpen: false,
    toggleMenu: () =>
        set((state) => ({
            isMenuOpen: !state.isMenuOpen,
        })),
}))
