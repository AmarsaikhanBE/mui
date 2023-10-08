import mongodb from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const news = await (await mongodb("news")).find({}).toArray();
  return NextResponse.json({ message: "testing", news });
};
