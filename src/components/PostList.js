import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import blogPost from "../data/blog.json";

const Container = styled.div`
  border-top: 1px solid #333;
  text-align: left;
  a {
    color: #333;
    &:hover {
      color: #4a65f6;
    }
  }
  b {
    padding-left: 12px;
    font-weight: 500;
  }

  .nextPosts {
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    margin: 10px;
    padding: 2px 5px;

    h4 {
      letter-spacing: 1px;
      margin: 0;
    }
  }
  @media (min-width: 576px) {
    display: none;
  }
`;

const PostList = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  }, [posts]);

  return (
    <Container>
      <br />
      <b>목록</b>
      {posts.map((post) => {
        return (
          <div className="nextPosts">
            <NavLink key={post.id} to={`/portfolio/${post.id}`}>
              <div>
                <h4>제목 : {post.blogTitle}</h4>
                <span>작성일 : {post.postedOn}</span>
              </div>
            </NavLink>
          </div>
        );
      })}
    </Container>
  );
};

export default PostList;
