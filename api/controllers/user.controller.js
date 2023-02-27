// import userModel from "../models/user.model";
import User from "../models/user.model.js";
import createError from "../utils/createError.js";
// import createError from "../utils/createError.js";

// export const deleteUser = async (req, res, next) => {
//   const user = await User.findById(req.params.id);

//   if (req.userId !== user._id.toString()) {
//     return next(createError(403, "You can delete only your account!"));
//   }
//   await User.findByIdAndDelete(req.params.id);
//   res.status(200).send("deleted.");
// };
// export const getUser = async (req, res, next) => {
//   const user = await User.findById(req.params.id);

//   res.status(200).send(user);
// };


export const deleteUser = async (req, res, next) => {
    const user = await User.findById(req.params.id)
    
        if(req.userId !== user._id.toString()){
           return next(createError(401, 'You are not authorised to delete this account!'))
        }
        await User.findByIdAndDelete(req.params.id)
        res.status(200).send('User deleted successfully!')
   
}