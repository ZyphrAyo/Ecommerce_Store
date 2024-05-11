import {createRouter} from "next-connect";
import db from "../../../utils/db";
import User from "../../../models/user";
import {  createResetToken } from "../../../utils/tokens";
import { sendEmail } from "@/utils/sendEmail";
import { resetEmailTemplate } from "@/email/resetEmailTemplate";
import bcrypt from "bcrypt"
const router = createRouter();

router.put(async (req, res) => {
  try {
    await db.connectDb();
    const { user_id,password } = req.body;
    const user =await User.findById(user_id)
    if(!user){
        return res.status(400).json({message:"This account does not exist."})
    }
    const cryptedPassword=await bcrypt.hash(password,12)
    await user.updateOne({
        password:cryptedPassword,
    })
    res.json({email:user.email})
    await db.disconnectDb();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router.handler();
