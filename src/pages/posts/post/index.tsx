import { useState, ChangeEvent, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar, Button, Container, Grid, Typography } from "@mui/material";
import { toast } from "react-toastify";
import { useStyles } from "./styles";
import { PostInterface, RegisterInterface } from "@/constants/enum";
import FakePostImage from "@/assets/img/FakePostImage.png";
import TextInput from "@/components/TextInput";
import { CategoryList, EMAIL_REGEX } from "@/constants";
import { useAddPost, useEditPost, useGetPost } from "@/api/posts";

const Register = () => {
  const { classes } = useStyles();

  const { id } = useParams();

  const [state, setState] = useState<PostInterface>({
    title: "",
    description: "",
    image: "",
    file: null,
    category: "1",
  });

  const [error, setError] = useState<any>(null);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const imageToFile = () => {
    return fetch(state.image)
      .then((res) => res.blob())
      .then((myBlob) => {
        const myFile = new File([myBlob], "image.png", { type: "image/png" });

        return myFile;
      });
  };

  const getFormFromState = () => {
    const data = { ...state };
    const form = new FormData();

    form.append("title", data?.title);
    form.append("description", data?.description);
    form.append("category", data?.category);
    form.append(
      "image",
      typeof data.image === "string" ? data.file : data.image
    );

    return form;
  };

  const addPost = useAddPost(getFormFromState());
  const getPost = useGetPost(id);
  const editPost = useEditPost(id, getFormFromState());

  const validateForm = () => {
    const errors: any = {};

    if (state.title.trim() === "") errors.title = "This Field is Required";
    if (state.description?.trim() === "")
      errors.description = "This Field is Required";
    if (state.category === "") errors.category = "This Field is Required";
    if (!state.image) errors.image = "This Field is Required";

    if (Object.keys(errors).length) {
      setError({ ...errors });
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    if (validateForm()) {
      if (id) {
        editPost.mutate();
      } else {
        addPost.mutate();
      }
    }
  };

  const onFileChange = (event: any) => {
    setState({
      ...state,
      image: event.target.files[0],
      file: URL.createObjectURL(event.target.files[0]),
    });
    console.log(event.target.files[0]);
  };

  useEffect(() => {
    if (addPost.isSuccess || editPost.isSuccess) {
      toast.success("successfully submited");
      setError(null);
    } else {
      setError(addPost.error?.response.data);
    }
  }, [addPost.status, editPost.status]);

  useEffect(() => {
    if (id) getPost.refetch();
  }, []);

  const getPostDetail = async () => {
    const post = getPost.data?.data;

    if (getPost.isSuccess) {
      const file = await imageToFile();
      setState({
        title: post.title,
        description: post.description,
        image: post.image,
        category: post.category.id,
        file,
      });
    }
  };

  useEffect(() => {
    getPostDetail();
  }, [getPost.status]);

  return (
    <div className={classes.root}>
      <Container className={classes.container} style={{ width: 400 }}>
        <Typography variant="h5">New Post</Typography>

        <div className={classes.inputFile}>
          <label htmlFor="file-input">
            <Avatar
              variant="square"
              src={
                typeof state.image === "string"
                  ? state.image
                  : state.file ?? FakePostImage
              }
              sx={{ width: 140, height: 140 }}
            />
          </label>
          <Typography variant="caption" color="error">
            {error?.image}
          </Typography>
          <input
            type="file"
            id="file-input"
            onChange={onFileChange}
            accept="image/png, image/jpeg"
            style={{
              visibility: "hidden",
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <Grid className={classes.content}>
          <TextInput
            label="title"
            name="title"
            value={state.title}
            onChange={onChangeInput}
            error={error?.title}
          />
        </Grid>
        <Grid className={classes.content}>
          <TextInput
            label="Description"
            name="description"
            value={state.description}
            onChange={onChangeInput}
            error={error?.description}
            multiline
          />
        </Grid>
        <Grid className={classes.content}>
          <TextInput
            label="category"
            name="category"
            value={state.category}
            onChange={onChangeInput}
            error={error?.category}
            select
            options={CategoryList}
          />
        </Grid>

        <Grid className={classes.content}>
          <Button variant="contained" onClick={onSubmit}>
            {addPost.isLoading ? "loading ..." : id ? "Update" : "Create"}
          </Button>
        </Grid>
      </Container>
    </div>
  );
};

export default Register;
