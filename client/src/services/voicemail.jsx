
let token
let templateId
export const sendVoiceMail = (username, email, phone) => {
    console.log(username+","+ email+","+phone);
    fetch('https://www.call2all.co.il/ym/api/Login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body:{
            
            username,
            email

        }
    }).then((res) => {
        console.log(res);
        token = res
        return res

    });
    fetch('‏https://www.call2all.co.il/ym/api/CreateTemplate', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: { token }

    }).then((res) => {
        return res.json()


    }).then((res) => {
        templateId = res
        return res

    });
    fetch('‏https://call2all.co.il/ym/api/RunCampaign', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: {
            token,
            templateId,
            phone,
            "ttsMessage": "עודכנה נסיעה חדשה"
        }

    }).then((res) => {
        return res.json()


    }).then((res) => {
        return res

    });
}