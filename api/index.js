export default function handler(req, res) {
  const { name } = req.query;

  // If no tool is provided
  if (!name) {
    return res.status(200).json({
      status: "MCP server online",
      message: "Use /api/tool/:name"
    });
  }

  // TOOL: hello
  if (name === "hello") {
    return res.status(200).json({
      tool: "hello",
      result: "Hello from MCP server!"
    });
  }

  // TOOL: sum?a=10&b=20
  if (name === "sum") {
    const a = Number(req.query.a || 0);
    const b = Number(req.query.b || 0);

    return res.status(200).json({
      tool: "sum",
      result: a + b
    });
  }

  // Unknown tool
  return res.status(404).json({
    error: "Tool not found",
    tool: name
  });
}
