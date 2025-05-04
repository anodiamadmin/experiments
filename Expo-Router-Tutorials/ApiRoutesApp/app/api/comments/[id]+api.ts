import { comments } from "@/data/comments";

export async function GET(_req: Request, { id }: Record<string, string>) {
    const comment = comments.find((comment) => comment.id === parseInt(id));
    if (!comment) {
        return Response.json({ error: "Comment not found" }, { status: 404 });
    }
    return Response.json(comment, { status: 200 });
}

export async function PATCH(request: Request, { id }: Record<string, string>) {
    const { name, comment } = await request.json();
    const index = comments.findIndex((comment) => comment.id === parseInt(id));
    if (index === -1) {
        return Response.json({ error: "Comment not found" }, { status: 404 });
    }
    comments[index] = { ...comments[index], name, comment };
    return Response.json(comments[index], { status: 200 });
}

export async function DELETE(_req: Request, { id }: Record<string, string>) {
    const index = comments.findIndex((comment) => comment.id === parseInt(id));
    if (index === -1) {
        return Response.json({ error: "Comment not found" }, { status: 404 });
    }
    comments.splice(index, 1);
    return Response.json({ message: "Comment deleted" }, { status: 200 });
}
