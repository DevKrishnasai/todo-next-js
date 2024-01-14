import mongoose from "mongoose";

export const DB = async () => {
  await mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("DB Connected");
    })
    .catch((e) => {
      console.log(e);
    });
};
