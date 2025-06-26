import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

categorySchema.plugin(toJSON);

export default mongoose.models.Category || mongoose.model("Category", categorySchema);
