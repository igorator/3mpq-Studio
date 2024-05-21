'use server'

export type ContactFormData = {
    fullName: string
    email: string
    phoneNumber: string
    companyName: string
    projectInfo: string
    agreement: boolean
}

const FORMSPARK_ACTION_URL = process.env.FORMSPARK_ACTION_URL

if (!FORMSPARK_ACTION_URL) {
    throw new Error('FORMSPARK_ACTION_URL is not defined')
}

export const sendContactFormData = async (message: ContactFormData) => {
    const response = await fetch(FORMSPARK_ACTION_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            message,
        }),
    })

    if (!response.ok) {
        throw new Error('Error sending contact form data')
    }

    console.log(response)
    return response.json()
}
