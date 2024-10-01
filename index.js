const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const db = require('./dbConnection')
const cors = require("cors");
dotenv.config();

const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post");
const slideRoutes = require("./routes/slide");
const userRoutes = require("./routes/user");

const app = express();

// app.use(cors("*"));

app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


db()


app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/slide", slideRoutes);
app.get("/", async (req, res) => {
  res.status(200).json("Server is up and running");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(process.env.PORT ||4000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
