import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

const PostsView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <h1>Post list</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {posts &&
        posts.map((post) => {
          return (
            <div className="post-holder" key={post.id}>
              <div>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default PostsView;
