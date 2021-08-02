import { products } from "./constants/product.js";
import product from "./model/productSchema.js";



const DefaultData = async () =>{
    try{
        await product.deleteMany({}) // we can use this statement if the data is repeteadly addded in duplicate form
        await product.insertMany(products)
        console.log('data added in database')
    }catch(error){
        console.log('error sending to database: ', error.message)
    }

}
export default DefaultData;