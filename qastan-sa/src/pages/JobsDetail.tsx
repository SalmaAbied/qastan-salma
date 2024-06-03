import React from "react";
import { useParams } from "react-router-dom";
import jobsData from "../json/jobsData.json";

const JobsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = jobsData.find((p: any) => p.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <img src={post.imageUrl} alt={`image about ${post.title}`} />
      <p>{post.description}</p>
    </div>
  );
};

export default JobsDetail;
