import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./auth-context";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  const queryLient = new QueryClient();

  return (
    <QueryClientProvider client={new QueryClient()}>
        <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  );
};
