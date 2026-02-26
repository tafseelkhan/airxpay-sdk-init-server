// src/performance/index.ts
export function measureExecutionTime<T>(fn: () => Promise<T>): Promise<T> {
  const start = Date.now();
  return fn().finally(() => console.log("Execution time:", Date.now() - start, "ms"));
}