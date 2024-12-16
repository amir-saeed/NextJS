"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc, trpcClient } from "@/utils/trpc";
import UserList from "@/components/UserList";
import { useState } from "react";

export default function HomePage() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <main>
          <h1>Welcome to tRPC with Next.js 14</h1>
          <UserList />
        </main>
      </QueryClientProvider>
    </trpc.Provider>
  );
}
