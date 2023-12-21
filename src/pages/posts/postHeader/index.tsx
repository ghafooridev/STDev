import { useNavigate } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import { useStyles } from "./styles";

interface PostHeaderProps {
  title: string;
  showAddButton?: boolean;
}

const PostHeader = (props: PostHeaderProps) => {
  const { title, showAddButton } = props;
  const navigate = useNavigate();
  const { classes } = useStyles();

  const onAdd = () => {
    navigate("/post");
  };

  return (
    <Grid className={classes.header}>
      <Typography variant="h4">{title}</Typography>
      {showAddButton && (
        <Button variant="contained" onClick={onAdd} className="button">
          + New Post
        </Button>
      )}
    </Grid>
  );
};

export default PostHeader;
