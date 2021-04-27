const mongoose = require("mongoose");

mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb+srv://admin:admin@cluster0.gtaxr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("Connection succcessful");
  })
  .catch((e) => {
    console.log(e);
  });
