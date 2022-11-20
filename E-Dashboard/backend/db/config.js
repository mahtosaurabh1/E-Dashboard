const mongoose=require('mongoose')
const url="mongodb+srv://dbUser:<password>@cluster0.qhzt788.mongodb.net/?retryWrites=true&w=majority"
// mongoose.connect('mongodb://localhost:27017/e-commerce');
mongoose.connect('mongodb://127.0.0.1:27017/e-commerce').then(() => {
    console.log("connected to database");
})