import { Response, Request } from "express";
import studenmodel from "../model/studenmodel";

type newStudent = {
  name: string;
  height: number;
  short: boolean;
  color: string;
};

const getStudent = async (req: Request, res: Response): Promise<Response> => {
  try {
    const studentData = await studenmodel.find();
    return res.status(200).json({
      message: studentData,
    });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

const getOne = async (req: Request, res: Response): Promise<Response> => {
  try {
    const studentData: newStudent | null = await studenmodel.findById(
      req.params.id
    );
    return res.status(200).json({
      message: "result has been found",
      data: studentData?.name,
    });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

const updateOne = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, height, short, color } = req.body;
    const studentData: newStudent | null = await studenmodel.findByIdAndUpdate(
      req.params.id,
      { name, height, short, color },
      { new: true }
    );
    return res.status(200).json({
      message: "updates suesfully",
    });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};
const CreateStudent = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, height, short, color } = req.body;
    const studentData = await studenmodel.create({
      name,
      height,
      color,
      short,
    });
    return res.status(200).json({
      message: `{studentData.name}`,
      data: studentData,
    });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};
const deleteOne = async (req: Request, res: Response): Promise<Response> => {
  try {
    const studentData: newStudent | null = await studenmodel.findByIdAndDelete(
      req.params.id
    );
    return res.status(200).json({
      message: "delete sucerssfully",
      data: studentData?.name,
    });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

export { CreateStudent, getOne, getStudent, updateOne, deleteOne };
