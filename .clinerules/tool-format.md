# Local Qwen Tool Calling

You are operating as an agent inside Cline with a local Ollama model.

CRITICAL:
- Do not output tool calls as JSON.
- Do not output tool calls as markdown code blocks.
- When you need to use a Cline tool, use the tool format expected by the current Cline environment.
- Do not merely describe the tool call. Actually invoke the tool.
- When a file needs to be created or edited, use the editor/file tool rather than only providing the file contents in chat.
- After making a change, verify that the change was actually applied.
- Do not claim a task is complete if the requested file operation did not execute.

For file creation, use the appropriate Cline file-writing tool.
For file reading, use the appropriate Cline file-reading tool.
For commands, use the appropriate Cline command-execution tool.

Never pretend that a tool operation succeeded when it did not.