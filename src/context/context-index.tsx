import React, { ReactNode } from "react";
import { AuthProvider } from "./auth-context";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  // const queryClient = new QueryClient({
  //   defaultOptions: {
  //     queries: {
  //       refetchOnWindowFocus: false,
  //     },
  //   },
  // });

  return (
    //<QueryClientProvider client={queryClient}>
    //  <Router>
        <AuthProvider>
          {children}
        </AuthProvider>
    // </Router>
    //</QueryClientProvider>
  );
};
