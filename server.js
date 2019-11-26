const Port = process.env.Port || 8080;
const exephbs = require("express-handlebars");
const morgan = require("morgan");

const db = require("./models/index");

const app = express();


// View Engine
app.engine("handlebars", express({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use(require("./controllers/staticController"))

// Synchronize my Schema
db.sequelize.sync({ force: true });



// Port Listen
app.listen(Port, () => {
    console.log("listening on port" + Port);
});