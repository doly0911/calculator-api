const app = require("./api.calculator")
var port = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log("running")
});