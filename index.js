const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const PORT = 3011;


const user = require("./routes/user");
const cards = require("./routes/cards")

dotenv.config();
const app = express();

app.use(express.json());

app.use(cors());
app.use(helmet());


app.use("/api", user);

app.listen(process.env.PORT || PORT, () => {
  console.log(`connected to port ${PORT}`);
});
