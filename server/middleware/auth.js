import jwt from "jsonwebtoken";

const secret = 'test';

// user wants to lika a post
// click the like button => auth middleware ,confirms or denies request(next) => like controller

const auth = async (req, res, next) => {
    try {
      // an error is coming , that's why import jwt like this
      console.log(req.headers);
      const token = req.headers.authorization.split(" ")[1];
      const isCustomAuth = token.length < 500;
  
      let decodedData;
  
      if (token && isCustomAuth) {      
        decodedData = jwt.verify(token, secret);
  
        req.userId = decodedData?.id;
      } else {
        decodedData = jwt.decode(token);
  
        req.userId = decodedData?.sub;
      }    
  
      next();
    } catch (error) {
      console.log(error);
    }
  };
  
  export default auth;