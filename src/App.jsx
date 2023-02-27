import { useState, lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AdoptedContext from "./AdoptedPets";
import Spinner from "./Spinner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPets = useState(null);
  return (
    <div
      className="m-0 p-0"
      style={{
        background: "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
      }}
    >
      <QueryClientProvider client={queryClient}>
        <AdoptedContext.Provider value={adoptedPets}>
          <Suspense fallback={<Spinner />}>
            <header className="mb-10 w-full bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500 p-7 text-center">
              <Link className="text-6xl text-white hover:text-gray-200" to="/">
                Adopt Me!
              </Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </Suspense>
        </AdoptedContext.Provider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
