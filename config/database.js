const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose
    .connect("mongodb://localhost/to-do-list", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Conectando ao MongoDB"))
    .catch((e) => console.log(e));
