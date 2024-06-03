import React from "react";
import { useParams } from "react-router-dom";
import toepassingenData from "../json/toepassingenData.json";

const ToepassingenDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = toepassingenData.find((p: any) => p.id === id);

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

export default ToepassingenDetail;
