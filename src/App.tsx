import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Products from "./components/Products/Products";
import ProductDetail from "./components/Products/ProductDetail";
import RootLayout from "./components/common/Layout/RootLayout";
import NotFound from "./components/NotFound/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
function App() {
  return (
    <div className="w-full">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route index element={<Products />} />
              <Route path="/*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
