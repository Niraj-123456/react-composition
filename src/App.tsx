import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Products from "./components/Products/Products";
import ProductDetail from "./components/Products/ProductDetail";
import Header from "./components/Header/Header";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/" element={<Products />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
