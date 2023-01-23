import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    name: String,
    age: String,
    email: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("user", UserSchema);
