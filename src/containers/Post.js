import React from "react";
import BlogPost from "../components/BlogPost";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`;

const Post = props => {
  return (
    <Container>
      <BlogPost {...props} />
      <Sidebar {...props} />
    </Container>
  );
};

export default Post;
