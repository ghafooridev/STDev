import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import createCache from "@emotion/cache";
import CircularProgress from "@mui/material/CircularProgress";
import { ToastContainer } from "react-toastify";
import Router from "@/router";
import "react-toastify/dist/ReactToastify.css";

export const muiCache = createCache({
  key: "mui",
  prepend: true,
});
const queryClient = new QueryClient();

const theme = createTheme({
  palette: {
    primary: {
      main: "#28A4DA",
    },
    text: {
      primary: "#444",
    },
  },
  typography: {
    h6: {
      fontSize: "18px",
      fontWeight: "500",
      color: "#444",
      lineHeight: "normal",
    },
    h4: {
      fontSize: "36px",
      fontWeight: "600",
      color: "#444",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<CircularProgress />}>
        <QueryClientProvider client={queryClient}>
          <Router />
          <ToastContainer />
        </QueryClientProvider>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
