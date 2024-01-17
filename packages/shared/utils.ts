export function sharedFunction(source: "client" | "server") {
  console.log(`This function is getting called from the ${source}!`);
  return source === "client" ? 0 : 1;
}
