import { Response, Request } from "express";
import mongoose from "mongoose";
import stackModel from "../model/stacksModel";
import studenmodel from "../model/studenmodel";

const postStack = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userId = req.params.id;
    const newStack = await stackModel.create(req.body);
    const ownUser = await studenmodel.findById(userId);

    ownUser?.stack.push(new mongoose.Types.ObjectId(newStack._id))
    ownUser?.save()
    
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
