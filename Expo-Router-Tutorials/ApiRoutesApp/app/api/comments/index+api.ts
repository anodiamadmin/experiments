import { comments } from "@/data/comments";

export async function GET() {
  return Response.json(comments)
}

export async function POST(request: Request) {
  const { name, comment } = await request.json();
  const newComment = {
    id: comments.length + 1,
    name,
    comment,
    date: new Date().toISOString(),
  };
  comments.push(newComment);
  return Response.json(newComment, { status: 201 });
}
