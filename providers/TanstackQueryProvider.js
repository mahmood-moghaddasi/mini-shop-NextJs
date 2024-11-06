import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

function TanstackQueryProvider({ children }) {
  const querClient = new QueryClient();
  return (
    <QueryClientProvider client={querClient}>{children}</QueryClientProvider>
  );
}

export default TanstackQueryProvider;
