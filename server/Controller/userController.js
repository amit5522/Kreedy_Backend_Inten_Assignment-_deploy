const User = require("../Model/UserModel");
const bcryptjs = require('bcryptjs');

const user_register=async(req,res,next)=>{

    try {
      //console.log('come');
       //creating user in DB
        const user=  await  User.create(req.body);

        const token = user.getJWTToken();
        //creating cookies
        const options = {
          expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
          ),
          httpOnly: true,
        };
    
        
        res.status(201).cookie("token", token, options).json({
          success: true,
          message:'User Register',
          user
           });

        
    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message,
          });
        
    }
}

const user_login=async(req,res,next)=>{

  try {
     //creating user in DB
     const {email,password}=req.body;
    
      const user=  await  User.findOne({email}).select("+password");
      
      if(!user){
        res.status(401).json({
          success: false,
          message:'NVALID EMAIL OR PASSWORD',
        });
      }else{
      
      //password compare
      
      const isPasswordatched = await bcryptjs.compare(password, user.password);
      
      if(!isPasswordatched){
        res.status(401).json({
          success: false,
          message:'NVALID EMAIL OR PASSWORD',
        });
      }else{
      const token = user.getJWTToken();
        //creating cookies
        const options = {
          expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
          ),
          httpOnly: true,
        };
    
        
        res.status(201).cookie("token", token, options).json({
          success: true,
          message:'USER LOGIN',
          user
           });}}
      
  } catch (error) {
      res.status(401).json({
          success: false,
          message: error.message,
        });
      
  }
}

//logout user
const logoutUser = async (req, res) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });

    res.status(201).json({
      success: true,
      message: "LogOut",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

//get user details
const getUserDetails=async(req,res,next)=>{
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }

}
module.exports={user_register,user_login,logoutUser,getUserDetails};