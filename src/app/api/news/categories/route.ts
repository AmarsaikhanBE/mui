import mongodb from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const categories = await (await mongodb("newsCategories")).find({}).toArray();
  const subCategories = await (await mongodb("newsSubCategories"))
    .find({})
    .toArray();

  categories.map(
    (main) =>
      (main.subCategories = subCategories.filter(
        (sub) => sub.mainCategoryId.toHexString() === main._id.toHexString()
      ))
  );

  return NextResponse.json(categories);
};
