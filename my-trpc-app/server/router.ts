import { initTRPC } from "@trpc/server";
import { z } from "zod";
import { createContext } from "./context";

const t = initTRPC.context<typeof createContext>().create();

const users: { id: string; name: string }[] = [
  { id: "123", name: "John Doe" },
];

export const appRouter = t.router({
  getUser: t.procedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) => {
      return users.find((user) => user.id === input.id) || null;
    }),
  createUser: t.procedure
    .input(z.object({ name: z.string() }))
    .mutation(({ input }) => {
      const newUser = { id: Date.now().toString(), name: input.name };
      users.push(newUser);
      return newUser;
    }),
  listUsers: t.procedure.query(() => {
    return users;
  }),
});

export type AppRouter = typeof appRouter;
