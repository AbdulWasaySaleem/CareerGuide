import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  questionIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
      required: true
    }
  ],
  fieldPoints: {
    type: Map,
    of: Number,
    required: true
  },
  recommendedField: {
    type: String,
    required: true
  }
}, { timestamps: true });

const ResultModel = mongoose.model("Result", resultSchema);
export default ResultModel;
