import mongoose from "mongoose";
const boookSchema = mongoose.Schema({
  name: String,
  title: String,
  price: Number,
  catagory: String,
  image: String,
});
const Book = mongoose.model("Book", boookSchema);
export default Book;
