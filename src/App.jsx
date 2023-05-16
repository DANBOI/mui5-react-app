import { Box, Stack } from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import PostArea from "./components/PostArea";
import RightSideInfos from "./components/RightSideInfos";
import CreatePost from "./components/CreatePost";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <PostArea />
        <RightSideInfos />
      </Stack>
      <CreatePost />
    </Box>
  );
};

export default App;
