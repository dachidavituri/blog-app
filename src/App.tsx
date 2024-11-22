import { lazy, Suspense, useEffect } from "react";
import { ThemeProvider } from "&/theme/theme-provider";
import Layout from "&/layout";
import NotFound from "#/notFound";
import Loading from "&/base/loading";
import AuthPageView from "#/auth/views";
import Registration from "#/registration/views";
import AboutView from "#/about/views";
import AuthorView from "#/author/views/AuthorView";
const HomePageView = lazy(() => import("./pages/home/views"));
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { loginAtom } from "./store";
import { useSetAtom } from "jotai";
import { supabase } from "./supabase";
import AuthRegisterGuard from "./components/guard";
const App: React.FC = () => {
  const setUser = useSetAtom(loginAtom);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session);
    });

    return () => subscription.unsubscribe();
  }, [setUser]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-screen h-screen  flex flex-col overflow-x-hidden">
        <BrowserRouter
          future={{
            v7_relativeSplatPath: true,
            v7_startTransition: true,
          }}
        >
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
              <Route
                path="login"
                element={
                  <AuthRegisterGuard>
                    <AuthPageView />
                  </AuthRegisterGuard>
                }
              />
              <Route
                path="register"
                element={
                  <AuthRegisterGuard>
                    <Registration />
                  </AuthRegisterGuard>
                }
              />
              <Route path="about" element={<AboutView />} />
              <Route path="author/:id" element={<AuthorView />} />
            </Route>
            <Route path="/" element={<Navigate to="/ka/home" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
