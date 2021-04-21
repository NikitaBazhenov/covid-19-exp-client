import { QueryClient, QueryClientProvider } from "react-query";
import { ReactNode } from 'react';

const queryClient = new QueryClient();

interface IProps {
  children: ReactNode;
}

function QueryProvider({ children }: IProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default QueryProvider;