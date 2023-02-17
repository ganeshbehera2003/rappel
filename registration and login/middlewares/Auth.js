const jwt = require('jsonwebtoken');

// i want to protect my routes from malicious login by token by making a middleware named auth
const Auth = async(req,res,next)=>{
    // console.log(req.headers);
    // console.log(req.body);
    
    // console.log(req.headers);
    // console.log(req.headers.x-auth-token); //here you can't access a object i.e req.headers's property i.e .x-auth-token like this here
    // if any property has dash(-),or space( ) or underscore(_) then we have to do like array notation
    // if nothing like space ,dash is not there then we can use it using dot operator
    // console.log(req.headers['x-auth-token']); //use like array notation
    // now after getting token we have to verify whether it is a malicious token or a good token

    try{
        const token = req.headers['x-auth-token'];
        if(!token){
            return res.status(400).json({ //  400 means bad request - means browser need something called token but you are not giving it to the browser
                message:"Missing Auth Token"
            })
        }
        console.log(await jwt.verify(token,'siliconMERNCourse',));
        if(await jwt.verify(token,'siliconMERNCourse',)){
            next();
        }
        // else part is not working ask that one
        else{
            return res.status(401).json({ // 401 means unauthorised access
                message:"Unauthorised"
            })
        }
    }
    catch(err){
        return res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    }
    // 501 is some specific problem occured with your code or syntax error or logic error
    // next(); // next is responsible for forwarding the data to the next middleware
}

module.exports = Auth;