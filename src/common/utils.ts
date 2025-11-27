/// <reference types="grecaptcha" />
//
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

const submitForm = async (action: string, formData: any): Promise<string> => {
    console.log("Submitting form");

    // 1. Get the reCAPTCHA token
    return new Promise((resolve, reject) => {
        grecaptcha.ready(() => {
            grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: action }).then(async (token: string) => {
                formData.captcha = token;

                // 2. Send form data (including the token) to your backend
                try {
                    const response = await fetch(`${import.meta.env.VITE_API_URL}/${action}`, { 
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(formData)
                    })

                    if (response.ok) {
                        const result = await response.json();
                        resolve(result);
                    } else {
                        const errorData = await response.json();
                        reject(new Error(`Failed to send: ${errorData}`));
                    }
                } catch (error) {
                    console.error('Submission error:', error);
                    reject(error);
                }
            });
        });
    })
}

export default submitForm
