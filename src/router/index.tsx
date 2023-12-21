import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Register from "@/pages/auth/register";
import Login from "@/pages/auth/login";
import Posts from "@/pages/posts";
import Post from "@/pages/posts/post";
import NotFound from "@/pages/notFound";
import useLocalStorage from "@/hooks/useLocalStorage";
import Layout from "@/layout";

const ProtectedRoute = ({ redirectPath = "/login" }) => {
  const [user, setuser] = useLocalStorage("user", null);
  console.log(user);
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="posts" element={<Posts />} />
          <Route path="post" element={<Post />} />
          <Route path="post/:id" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
