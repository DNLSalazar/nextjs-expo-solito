import { NextRequest } from "next/server";
import { z } from "zod";
import { createUser } from "../../../server/services/db";

const signUpSchema = z.object({
  email: z.string(),
  pass: z.string()
});

export async function POST(request: NextRequest) {
  try {
    const body = await signUpSchema.parseAsync(await request.json());
    const response = await createUser(body.email, body.pass);
    return Response.json({ response });
  } catch (error) {
    console.error("Error on sign up", error);
    return Response.json({ message: "Error creating user" }, {
      status: 500
    });
  }
}
