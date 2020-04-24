import React, { useState, useEffect } from "react";
import styled from "styled-components";
import blogPost from "../data/blog.json";
import PostList from "../components/PostList";

const Container = styled.div`
  width: 80%;
  margin: 10px 0;
  padding: 0;
  text-align: center;
  img {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  @media (min-width: 1400px) {
    width: 60%;
    margin: 10px 0 20px 100px;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const BlogCategory = styled.div`
  text-align: left;
  color: #6c6c6c;
  padding: 10px 0;
`;

const PostTitle = styled.div`
  padding: 25px 0;
  text-align: center;
  letter-spacing: 0.5px;
  transform: capitalize;
  font-size: 20px;
  font-weight: 400;
`;

const PostContent = styled.div`
  font-size: 15px;
  padding-top: 30px;
  min-height: 150px;
  p {
    word-wrap: break-word;
  }
`;

const PostedBy = styled.div`
  text-align: right;
  color: #6c6c6c;
  font-style: italic;
  padding: 20px 0;
  letter-spacing: 1px;
`;

const BlogPost = (props) => {
  const [post, setPost] = useState({
    id: "",
    blogCategory: "",
    blogTitle: "",
    postedOn: "",
    author: "",
    blogImage: "",
    blogText: "",
  });

  useEffect(() => {
    const postId = props.match.params.postId;
    const post = blogPost.data.find((post) => post.id == postId);
    setPost(post);
  }, [post, props.match.params.postId]);

  if (post.blogImage == "") return null;

  return (
    <Container>
      <div>
        <PostTitle>제목 : {post.blogTitle}</PostTitle>
        <BlogCategory>#{post.blogCategory}</BlogCategory>
        <br />
        <img src={require("../assets/img/" + post.blogImage)} alit="Post Img" />
      </div>

      <div style={{ paddingTop: "15px" }}>
        <a href={post.alink} target="_blank">
          {post.alink}
        </a>
      </div>

      <PostContent>
        <p>{post.blogText1}</p>
        <p>{post.blogText2}</p>
      </PostContent>
      <PostedBy>
        {post.postedOn} ★ by {post.author}
      </PostedBy>
      <PostList />
    </Container>
  );
};

export default BlogPost;
