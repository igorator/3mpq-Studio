'use server'

import { cookies } from 'next/headers'

export async function getCookie(name: string) {
    return cookies().get(name)
}

export async function setCookie(name: string, value: any, options = {}) {
    cookies().set(name, value, options)
}

export async function hasCookie(name: string) {
    return cookies().has(name)
}

export async function deleteCookie(name: string) {
    cookies().delete(name)
}
