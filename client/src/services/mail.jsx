export const mailToServer = (email,em,phoneNumber) => {
    fetch('http://localhost:3000/mail', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({

            email,
            em,
            phoneNumber

        })
    });
}