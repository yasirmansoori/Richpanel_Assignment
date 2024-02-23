// Dependencies
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const db = require("./src/db/db");
const cors = require('cors');
const userRouter = require('./src/routes/user.route');
const pageRouter = require('./src/routes/page.route');
const authRouter = require('./src/routes/auth.route');
const { notFoundMiddleware, defaultErrorHandler } = require('./src/middlewares/error');
const authenticationMiddleware = require('./src/middlewares/authenticationMiddleware');
const cookieParser = require('cookie-parser');

// Environment variables
const PORT = process.env.PORT || 3001;
const CONNECTION_STRING = process.env.CONNECTION_URI;

// Connect the database
db.connect(CONNECTION_STRING)
  .then(() => {
    console.log("Database connected.");
  })
  .catch((err) => {
    console.log(err.message);
  });

// configure express app
const app = express();

// Session
app.use(session({
  secret: 'mainhibataunga',
  resave: true,
  saveUninitialized: true
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());
require('./src/config/passportConfig');

// Middlewares
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.get('/', (req, res) => {
  res.send('Server is running on ngrok');
});

// protected route
app.get('/protected', authenticationMiddleware, (req, res) => {
  res.send('Protected route');
});

// auth routes
app.use("/auth", authRouter);

// user routes
app.use("/api/users", userRouter);

// page routes
app.use('/api/pages', pageRouter);

// 404 Not Found middleware
app.use(notFoundMiddleware);

// Error Handling Middleware
app.use(defaultErrorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});