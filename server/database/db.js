import mongoose from 'mongoose';

const URL = "mongodb+srv://nomanali:khanbhai12345@cluster0.rmdrt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


const connection = async () => {

 

  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Database successfully connected");
  } catch (error) {
    console.log("error: ", error.messsage);
  }
};
export default connection;
