import product from '../model/productSchema.js'


export const getproducts = async (request, response) =>{

    try{
       const products =  await product.find({});
       response.json(products)
    }catch(error){
        console.log('error ', error.message)
    }
}