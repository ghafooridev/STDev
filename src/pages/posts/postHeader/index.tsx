import { useNavigate } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import { useStyles } from "./styles";
import Button from "@/components/Button";
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
      {showAddButton && <Button onClick={onAdd}>+ New Post</Button>}
    </Grid>
  );
};

export default PostHeader;
