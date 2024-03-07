'use server'

export type ContactFormData = {
    fullName: string
    email: string
    phoneNumber: string
    companyName: string
    projectInfo: string
    agreement: boolean
}

const BASE_URL = ''

export const sendContactFormData = async (data: ContactFormData) => {
    let response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            Authorization: ``,
        },
        body: JSON.stringify({
            data: [
                {
                    Lead_Source: '3mpq-studio',
                    Last_Name: data.fullName,
                    Email: data.email,
                    Phone: data.phoneNumber,
                    Company: data.companyName,
                    Description: data.projectInfo,
                },
            ],
        }),
    })

    if (!response.ok) {
        throw new Error('Error sending contact form data')
    }

    return response.json()
}
