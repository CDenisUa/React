// Core
import { QueryClient, QueryClientProvider } from 'react-query';
// Components
import ReactQueryApp from '@/components/react-query/ReactQueryApp';

const queryClient = new QueryClient();

const ReactQuery = () => (
    <QueryClientProvider client={queryClient}>
        <ReactQueryApp />
    </QueryClientProvider>
);

export default ReactQuery;
