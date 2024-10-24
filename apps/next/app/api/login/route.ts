import { NextRequest } from "next/server";
import { z } from "zod";
import { getUserByEmail } from "../../../server/services/db";

const signUpSchema = z.object({
  email: z.string(),
  pass: z.string()
});

export async function POST(request: NextRequest) {
  try {
    console.log("Trying to login: body");
    const body = await signUpSchema.parseAsync(await request.json());
    console.log("Trying to login: body", body);
    const user = await getUserByEmail(body.email);
    return Response.json({ user });
  } catch (error) {
    console.error("Error on sign up", error);
    return Response.json({ message: "Error getting user", error: error }, {
      status: 500
    });
  }
}
