import { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Stack,
  Pagination,
  Modal,
  Typography,
  Button,
} from "@mui/material";
import Loading from "./loading";
import { useStyles } from "@/pages/posts/styles";
import { PostInterface } from "@/constants/enum";
import { useGetPosts, useDeletePost } from "@/api/posts";
import PostCard from "@/pages/posts/postCard";
import PostHeader from "@/pages/posts/postHeader";
import { useNavigate } from "react-router-dom";

const PAGE_SIZE = 6;

const Posts = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState("");
  const [offset, setOffset] = useState(1);

  const posts = useGetPosts({
    offset: (offset - 1) * PAGE_SIZE,
    limit: PAGE_SIZE,
  });
  const deletePost = useDeletePost(selectedPost);

  const onChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(value);
    setOffset(value);
  };

  const onEditPost = (id: string) => {
    navigate(`/post/${id}`);
  };

  const onDeletePost = (id: string) => {
    setSelectedPost(id);
    setShowDeleteModal(true);
  };

  const onCancelDelete = () => {
    setShowDeleteModal(false);
  };

  const onConfirmDelete = () => {
    deletePost.mutate();
  };
  useEffect(() => {
    if (deletePost.isSuccess) {
      setShowDeleteModal(false);
      posts.refetch();
    }
  }, [deletePost]);

  useEffect(() => {
    posts.refetch();
  }, [offset]);

  useEffect(() => {
    posts.refetch();
  }, []);

  return (
    <>
      <Container className={classes.container}>
        <PostHeader title="AllPost" showAddButton />
        <Grid className={classes.content}>
          {posts.isLoading ? (
            <Loading />
          ) : (
            posts.data?.data.results?.map((item: PostInterface) => {
              return (
                <PostCard
                  key={item.id}
                  post={item}
                  onDelete={onDeletePost}
                  onEdit={onEditPost}
                />
              );
            })
          )}
        </Grid>
        <Grid className={classes.content}>
          <Pagination
            count={Math.floor(posts.data?.data.count / PAGE_SIZE) + 1}
            variant="outlined"
            color="primary"
            shape="rounded"
            page={offset}
            onChange={onChangePage}
          />
        </Grid>
      </Container>

      <Modal open={showDeleteModal}>
        <div className={classes.modal}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Are you sure you want to delete the post?
          </Typography>
          <Grid className="buttons">
            <Button color="error" variant="contained" onClick={onConfirmDelete}>
              Delete
            </Button>
            <Typography
              variant="button"
              color="inherit"
              onClick={onCancelDelete}
            >
              Cancel
            </Typography>
          </Grid>
        </div>
      </Modal>
    </>
  );
};

export default Posts;
