import catList from "@/data/cats";

export async function GET() {
  return Response.json({ catList });
}
