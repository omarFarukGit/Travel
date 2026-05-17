import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    destinationName: String,
    country: String,
    category: String,
    price: Number,
    duration: String,
    departureDate: String,
    imageUrl: String,
    description: String,
  },
  { timestamps: true },
);

const destinationModel = model("destinations", schema);

export default destinationModel;
