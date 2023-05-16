import React, { useState } from "react";
import {
  styled,
  Box,
  Typography,
  Tooltip,
  TextField,
  Avatar,
  ButtonGroup,
  Button,
  Fab, // floating action button
  Modal,
  Stack,
} from "@mui/material";

import {
  Add,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 10,
  marginBottom: 20,
});

const CreatePost = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* create new post button */}
      <Tooltip
        onClick={() => setOpen(true)}
        title="Create new post"
        sx={{
          position: "fixed",
          bottom: 30,
          left: { xs: "calc(50% - 30px)", md: 30 },
        }}
      >
        <Fab color="primary">
          <Add />
        </Fab>
      </Tooltip>

      {/* modal display */}
      <StyledModal open={open} onClose={() => setOpen(false)}>
        <Box
          width={400}
          height={300}
          bgcolor="background.default"
          color="text.primary"
          p={3}
          borderRadius={1}
        >
          <Typography
            variant="h6"
            color="secondary"
            align="center"
            gutterBottom
          >
            Create post
          </Typography>
          <UserBox>
            <Avatar
              src="https://material-ui.com/static/images/avatar/2.jpg"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              Daniel boy
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            multiline
            rows={3}
            placeholder="lorem ausrn soir smd?"
            variant="filled"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="primary" />
            <VideoCameraBack color="primary" />
            <PersonAdd color="primary" />
          </Stack>

          <ButtonGroup sx={{ marginLeft: 30 }} variant="contained">
            <Button sx={{ width: 50 }}>
              <DateRange />
            </Button>
            <Button>Post this!</Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default CreatePost;
