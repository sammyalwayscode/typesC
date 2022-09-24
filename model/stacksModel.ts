import mongoose from "mongoose";

type stackRecord = {
  stackName: string;
  user: {};
};
interface StackRecord extends stackRecord, mongoose.Document {}
const stackSchema = new mongoose.Schema(
  {
    stackName: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

export default mongoose.model<stackRecord>("stacks", stackSchema);
