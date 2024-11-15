import { lazy, Suspense } from "react";
import Layout from "&/layout";
import NotFound from "#/notFound";
import Loading from "&/base/loading";
import AuthPageView from "#/auth/views";
import Registration from "#/registration/views";
const HomePageView = lazy(() => import("./pages/home/views"));
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
const App: React.FC = () => {
  return (
    <div className="w-screen h-screen bg-slate-900 flex flex-col">
      <BrowserRouter>
        <Routes>
          <Route path="/:lang" element={<Layout />}>
            <Route
              path="home"
              element={
                <Suspense fallback={<Loading />}>
                  <HomePageView />
                </Suspense>
              }
            />
            <Route path="sign-in" element={<AuthPageView />} />
            <Route path="register" element={<Registration />} />
          </Route>
          <Route path="/" element={<Navigate to="/ka/home" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
