const axios = require('axios');

async function solveCaptcha(apikey, sitekey, pageUrl) {
     const response = await axios.post("http://2captcha.com/in.php", {
        key: apikey,
        method: 'usercaptcha',
        googlekey: sitekey,
        pageurl: pageUrl,
    });
    const captchaId = response.data.split('|')[1];
    while (true) {
        const solutionResponse = await axios.get(
            `http://2captcha.com/res.php`
        );
        if (solutionResponse.data === 'Captcha Not Ready') {
            await new Promise((resolve) => setTimeout(resolve, 2000));
        }else {
            const captchaResponse = solutionResponse.data.split('|')[1];
            return captchaResponse;
        }  
        if (error) {
            console.log(error);
            
        }
    }
    
    


}

