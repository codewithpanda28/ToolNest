import type { ReactNode } from "react";

function renderBlock(block: string, index: number): ReactNode {
  const trimmed = block.trim();

  if (trimmed.startsWith("## ")) {
    return (
      <h2
        key={index}
        className="mb-4 mt-10 text-2xl font-bold text-gray-900"
      >
        {trimmed.slice(3)}
      </h2>
    );
  }

  if (trimmed.startsWith("- ")) {
    const items = trimmed
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.startsWith("- "))
      .map((line) => line.slice(2));
    return (
      <ul key={index} className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
        {items.map((item, i) => (
          <li key={i} className="leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p key={index} className="mb-4 leading-relaxed text-gray-700">
      {trimmed}
    </p>
  );
}

export function renderContent(content: string): ReactNode[] {
  return content
    .split("\n\n")
    .map((block) => block.trim())
    .filter((block) => block.length > 0)
    .map((block, index) => renderBlock(block, index));
}