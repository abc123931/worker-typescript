import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const handleRequest = async (): Promise<Response> => {
  try {
    const test = await prisma.test.findFirst();
    return new Response(`test first id: ${test?.id}`);
  } catch (error) {
    console.error(error);
  }
  return new Response(`test first id: error`);
};
