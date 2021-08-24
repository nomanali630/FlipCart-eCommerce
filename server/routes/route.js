import  express  from "express";
import {userSignup,userLogin} from "../controller/user-controller.js"
import {getproducts} from '../controller/product-controller.js'

const router = express.Router();
// console.log("hello")
router.post('/signup', userSignup);
router.post('/login', userLogin);

router.get('/products', getproducts)


export default router;