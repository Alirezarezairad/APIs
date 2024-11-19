import mongoose from "mongoose";

export const connectToDb = async (url) => {
  try {
    await mongoose.connect(url);
  } catch (e) {
    console.error(e);
    process.exit(2);
  }
};
