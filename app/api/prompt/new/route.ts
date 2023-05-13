import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import { Request, Response } from "express";

export const POST = async (request: Request, response: Response): Promise<Response> => {
  const { userId, prompt, tag } = await request.json();

  try {
    await connectToDB();
    const newPrompt = new Prompt({ creator: userId, prompt, tag });

    await newPrompt.save();
    return response.status(201).json(newPrompt);
  } catch (error) {
    return response.status(500).send("Failed to create a new prompt");
  }
};
