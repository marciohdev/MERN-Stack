const express = require("express")
const app = express();
const userRoute = require("./src/routes/user.route")

app.listen(3000, (req, res) => {
    console.log("Funcionando perfeitamente")
})


app.use(userRoute)
