
export async function GET() {
    const output = {message: {sender: "Syan Bot", statement: "Hello, Anodiam Client, This is Syan Bot!"}, status: 200, statusText: "OK", time: new Date().toISOString()};
  return Response.json(output);
}
