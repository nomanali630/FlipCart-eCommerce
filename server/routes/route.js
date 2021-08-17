import  express  from "express";
import {userSignup,userLogin} from "../controller/user-controller.js"

const router = express.Router();
// console.log("hello")
router.post('/signup', userSignup);
router.post('/login', userLogin);



export default router;