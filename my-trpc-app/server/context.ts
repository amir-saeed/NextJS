export async function createContext() {
    // Add authentication, db connection, etc.
    return {};
  }
  
  export type Context = Awaited<ReturnType<typeof createContext>>;
  