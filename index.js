import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "MCP Server Online", version: "1.0.0" });
});

app.get("/api/tool/:name", (req, res) => {
  const name = req.params.name;
  res.json({ tool: name, status: "ready-to-load" });
});

app.listen(3000, () =>
  console.log("MCP Server running on http://localhost:3000")
);
