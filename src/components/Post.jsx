import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";

const Post = ({ imgUrl }) => {
  return (
    <Card sx={{ maxWidth: 800, margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="pic">
            C
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Chen"
        subheader="5/16, 2023"
      />
      <CardMedia
        component="img"
        // width="100%"
        height="500"
        image={imgUrl}
        alt=""
        // sx={{ backgroundSize: "cover" }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
          sapiente ut explicabo. Earum omnis tempore velit similique nulla?
          Temporibus eaque laborum nam, nesciunt eligendi rerum adipisci id
          mollitia provident nostrum!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
