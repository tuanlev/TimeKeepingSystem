const auth =async (req, res, next) =>{
  // Check if the user is authenticated
  const token  = request.get("Authorization");
  if (!token) {
    next(new Error("Unauthorized: No token provided"));
  }
    try {
        // Verify the token
        const decoded = await require("../services/jsonwebtoken.service").verifyJwtToken(token);
        req.user = decoded;
        next(); 
    } catch (error) {
        console.error('JWT verification failed:', error);
        next(new Error("Unauthorized: Invalid token"));
    }

}