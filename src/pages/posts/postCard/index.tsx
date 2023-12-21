import { Grid, Icon, Chip, Avatar, Typography } from "@mui/material";
import { PostInterface } from "@/constants/enum";
import { useStyles } from "./styles";

interface Props {
  post: PostInterface;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

const PostCard = ({ post, onEdit, onDelete }: Props) => {
  const { classes } = useStyles();

  const onEditPost = () => {
    onEdit(post.id!);
  };

  const onDeletePost = () => {
    onDelete(post.id!);
  };

  return (
    <div className={classes.block}>
      <img src={post.image} alt={post.title} />
      <Grid className={classes.content}>
        <Grid className={classes.titleWithIcons}>
          <Grid className={classes.row}>
            <Typography variant="subtitle1">Name</Typography>
            <Typography variant="body2">{post.title}</Typography>
          </Grid>
          <Grid className={classes.icons}>
            <Icon color="primary" onClick={onEditPost}>
              edit
            </Icon>
            <Icon color="error" onClick={onDeletePost}>
              delete
            </Icon>
          </Grid>
        </Grid>
        <Grid className={classes.row}>
          <Typography variant="subtitle1">Description</Typography>
          <Typography variant="body2">
            {post.description?.length > 100
              ? post.description?.substring(0, 97) + "..."
              : post.description}
          </Typography>
        </Grid>
        <Grid className={classes.row}>
          <Typography variant="subtitle1">Category</Typography>
          <Typography variant="body2">{post.category?.name}</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default PostCard;
