import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser(email: string, pass: string) {
  try {
    const response = await prisma.user.create({
      data: {
        id: email,
        email: email,
        pass: pass
      }
    });
    return response;
  } catch (error) {
    console.error("Error creating user", error);
    throw error;
  }
}

export async function getUserByEmail(email: string) {
  try {
    const result = await prisma.user.findUnique({
      where: {
        id: email
      }
    });
    if (!result) return null;
    return result;
  } catch (error) {
    console.error("Error getting user", email, error);
    throw error;
  }
} 
