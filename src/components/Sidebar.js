import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import blogPost from "../data/blog.json";

const Container = styled.div`
  width: 27%;
  text-align: left;
  a {
    color: #333;
    &:hover {
      color: #4a65f6;
    }
  }
  aside {
    font-size: 17px;
    text-align: center;
    margin: 15px 0;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

const PostList = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  b {
    padding-left: 12px;
    font-size: 15px;
    font-weight: 500;
  }

  .nextPosts {
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    margin: 12px;
    padding: 3px 10px;
    h4 {
      font-size: 15px;
      letter-spacing: 1px;
      margin: 0;
    }
  }
  @media (max-width: 900px) {
    .nextPosts {
      margin: 0;
      padding-bottom: 5px;
      b {
        font-size: 15px;
        padding-left: 2px;
      }
      h4 {
        font-size: 14px;
      }
    }
  }
`;
const Img = styled.div`
  background-image: url(https://source.unsplash.com/user/erondu/400x300);
  width: 100%;
  height: 300px;
  @media (max-width: 900px) {
    width: 100%;
    height: 200px;
  }
`;

const Sidebar = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  }, [posts]);

  return (
    <Container>
      <aside>
        <Img></Img>
        <b>Random Image</b>
      </aside>
      <br />
      <PostList>
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
      </PostList>
    </Container>
  );
};

export default Sidebar;
