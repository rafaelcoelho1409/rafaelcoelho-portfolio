export function estimateReadingMinutes(body: string): number {
  const readableText = body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<Image[\s\S]*?\/>/g, " ");
  const wordCount =
    readableText.match(/[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu)?.length ?? 0;

  return Math.max(1, Math.ceil(wordCount / 220));
}
