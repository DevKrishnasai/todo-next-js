import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Task =
  mongoose.models.Tasks || mongoose.model("Tasks", TaskSchema);
