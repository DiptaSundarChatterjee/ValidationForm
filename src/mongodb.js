const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/Login_signup")
    .then(() => console.log("Mongo connected"))
    .catch(() => console.log("Failed to connect"));

const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const collection = mongoose.model("Collection1", LoginSchema);

module.exports = collection;