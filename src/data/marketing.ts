export type LanguageRow = { language: string; parser: string; imports: string; prompts: string; calls: string; status: "Stable" | "Experimental" };

export const languages: LanguageRow[] = [
  { language: "Python", parser: "AST", imports: "Yes", prompts: "Yes", calls: "Yes", status: "Stable" },
  { language: "JavaScript", parser: "Tree-sitter", imports: "Yes", prompts: "Yes", calls: "Yes", status: "Stable" },
  { language: "TypeScript", parser: "Tree-sitter", imports: "Yes", prompts: "Yes", calls: "Yes", status: "Stable" },
  ...["PHP", "Java", "C", "C++", "C#", "Go", "Rust"].map((language) => ({ language, parser: "Structural", imports: "Local", prompts: "Yes", calls: "Conservative", status: "Experimental" as const })),
];

export const mcpTools = ["inspect_workspace", "get_prompt_flow", "validate_prompt_change", "build_graph_report"];

export const faqs = [
  ["Does TokenOptiPy upload my code?", "No. Analysis runs locally by default and TokenOptiPy does not upload source code or prompts."],
  ["Does it execute the project?", "No. It does not execute analyzed code, imports, compilers, package scripts, or project dependencies."],
  ["Are token counts exact?", "No. They are static estimates. Runtime inputs and model-specific tokenizers can produce different counts."],
  ["Does reducing tokens preserve quality?", "Not automatically. Validate every optimization with representative evaluation cases."],
  ["Which languages are supported?", "Python, JavaScript, and TypeScript are stable. PHP, Java, C, C++, C#, Go, and Rust use experimental structural analysis."],
  ["Does it require an OpenAI key?", "No mandatory API key or remote service is required."],
  ["What files are generated?", "A standard build produces graph.html, graph.json, and TOKEN_REPORT.md in tokenoptipy-out/."],
  ["How is TokenOptiPy different from a tokenizer?", "A tokenizer counts text. TokenOptiPy connects token-bearing content, functions, context, and model calls in a queryable graph."],
  ["How is static analysis different from runtime tracing?", "Static analysis inspects possible flows without executing the app. Runtime tracing observes real requests. They complement each other."],
  ["Can an MCP-compatible agent query the graph?", "Yes. The local stdio MCP server exposes graph and prompt-flow tools to compatible clients."],
] as const;

export const comparison = [
  ["Cross-file token-flow visibility", "Yes", "Manual", "No", "Sometimes"],
  ["Prompt and context relationships", "Yes", "Manual", "No", "Observed requests"],
  ["Local static analysis", "Yes", "No", "Text only", "No"],
  ["Runtime accuracy", "No", "No", "Input only", "Yes"],
  ["Model-call execution required", "No", "No", "No", "Yes"],
  ["Optimization findings", "Yes", "Manual", "No", "Varies"],
  ["Machine-readable graph", "Yes", "No", "No", "Varies"],
  ["MCP accessibility", "Yes", "No", "No", "Varies"],
] as const;
