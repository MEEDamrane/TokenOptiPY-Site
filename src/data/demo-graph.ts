export type DemoNodeType = "file" | "prompt" | "variable" | "context" | "function" | "model_call" | "finding";
export type DemoNode = { id: string; label: string; type: DemoNodeType; tokens: number; x: number; y: number; source: string; finding?: string };
export type DemoEdge = { source: string; target: string; relation: string; highlighted?: boolean };

const primary: DemoNode[] = [
  { id:"support", label:"support.py", type:"file", tokens:610, x:7, y:46, source:"support.py:1" },
  { id:"system", label:"SYSTEM_PROMPT", type:"prompt", tokens:320, x:27, y:28, source:"support.py:12" },
  { id:"history", label:"conversation_history", type:"context", tokens:2900, x:46, y:47, source:"support.py:41", finding:"TG005 · potentially unbounded context" },
  { id:"answer", label:"answer_customer", type:"function", tokens:84, x:65, y:30, source:"support.py:36" },
  { id:"model", label:"chat.completions.create", type:"model_call", tokens:12470, x:84, y:47, source:"support.py:52", finding:"Largest estimated static input" },
  { id:"catalog", label:"product_catalog", type:"variable", tokens:8500, x:44, y:75, source:"catalog.py:8", finding:"TG001 · large static value" },
  { id:"warning", label:"TG005", type:"finding", tokens:0, x:68, y:73, source:"support.py:41", finding:"Conversation history may grow without a bound" },
];
const types: DemoNodeType[] = ["file","prompt","variable","context","function","model_call","finding"];
const extras: DemoNode[] = Array.from({ length: 53 }, (_, i) => {
  const type = types[i % types.length]!;
  return { id:`n${i}`, label:["routes.ts","RETRIEVAL_PROMPT","user_query","retrieved_docs","format_context","responses.create","TG006"][i%7]!+`_${Math.floor(i/7)+1}`, type, tokens:type==="model_call"?1800+i*43:type==="context"?700+i*31:40+i*17, x:10+((i*17)%78), y:10+((i*29)%76), source:`demo/${i%2?"agent.ts":"context.py"}:${8+i}` };
});
export const demoNodes = [...primary, ...extras];
export const demoEdges: DemoEdge[] = [
  {source:"support",target:"system",relation:"CONTAINS_PROMPT",highlighted:true},
  {source:"system",target:"history",relation:"FLOWS_TO",highlighted:true},
  {source:"history",target:"answer",relation:"FLOWS_TO",highlighted:true},
  {source:"answer",target:"model",relation:"CALLS_MODEL",highlighted:true},
  {source:"catalog",target:"answer",relation:"USES_VARIABLE"},{source:"history",target:"warning",relation:"HAS_FINDING"},
  ...extras.slice(1).map((node,i)=>({source:extras[i]!.id,target:node.id,relation:i%3===0?"FLOWS_TO":"USES_VARIABLE"})),
];
