import {
  QueryClient,
  QueryClientProvider,
  dehydrate,
} from "@tanstack/react-query";
import React, { useState } from "react";

function TanstackQueryProvider({ children }) {
  // const queryClient = new QueryClient();
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["key"], fetchFunction);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
export default TanstackQueryProvider;
