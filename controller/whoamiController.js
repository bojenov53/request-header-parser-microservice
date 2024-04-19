class WhoamiController {
    async whoami(req, res) {
        Promise.resolve()
            .then(() => {
                const ipAddress = req.ip; 
                const preferredLanguage = req.headers['accept-language']; 
                const userAgent = req.headers['user-agent']; 
    
                
                const responseData = {
                    ipaddress: ipAddress,
                    language: preferredLanguage,
                    software: userAgent
                }; 
                
                res.json(responseData);
            })
            .catch(error => {
                res.status(400).json({ error: error.message });
            });
            
        
    }

}


const whoamiController = new WhoamiController;


export default whoamiController;