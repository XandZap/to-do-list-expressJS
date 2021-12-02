const express = require("express");
const path = require("path");

const checkListRouter = require("./src/routes/checklist");
const rootRouter = require("./src/routes/index");

require("./config/database");

const app = express();
app.use(express.json());

//usar arquivos estaticos
app.use(express.static(path.join(__dirname, "public")));

//carregar views e instalar engine
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

//importando root e checklist como middleware
app.use("/", rootRouter);
app.use("/checklists", checkListRouter);

app.listen(3000, () => {
    console.log("Servidor iniciado");
});
