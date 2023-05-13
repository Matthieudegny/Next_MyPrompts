import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import { NextApiRequest, NextApiResponse } from "next";

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { userId, prompt, tag } = await request.body;

  try {
    await connectToDB();
    const newPrompt = new Prompt({ creator: userId, prompt, tag });

    await newPrompt.save();
    return response.status(201).json(newPrompt);
  } catch (error) {
    return response.status(500).send("Failed to create a new prompt");
  }
};
