import  mongoose  from "mongoose";


const prodcutSchema = new mongoose.Schema({
    id: String,
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    description: String,
    discount: String,
    tagline: String,
}) 

const product = mongoose.model('products ',prodcutSchema)

export default product;

