import { useState } from "react";
import { Box, Stack, createTheme, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import PostArea from "./components/PostArea";
import RightSideInfos from "./components/RightSideInfos";
import CreatePost from "./components/CreatePost";

const App = () => {
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: "#6b9080",
        light: "#f6fff8",
        dark: "black",
      },
      secondary: {
        main: "#777",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        bgcolor={mode === "light" ? "primary.light" : "primary.dark"}
        color="text.primary"
      >
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar mode={mode} setMode={setMode} />
          <PostArea />
          <RightSideInfos />
        </Stack>
        <CreatePost />
      </Box>
    </ThemeProvider>
  );
};

export default App;
