import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const Blogs = () => {

  const { posts, loading } = useContext(AppContext);
console.log(posts);
  return (
    <div>
      {
        loading ? 
        (<Spinner />) : 
        (
            posts.length === 0 ? 
            (<div>
                <p>No Post Found</p>
            </div>) : 
            (posts.map( (posts) => (
                <div key={posts.id}>
                    <p>{posts.title}</p>
                    <p>
                        By <span>{posts.author}</span> 
                        on 
                        <span>{posts.category}</span>
                    </p>
                    <p>Posted on {posts.date}</p>
                    <p>{posts.content}</p>
                    <div>
                        {posts.tags.map((tag, index) => {
                            return <span key={index}>{`#${tag}`}</span>;
                        })}
                    </div>
                </div>
        )))
      )}
    </div>
  );
};

export default Blogs;
