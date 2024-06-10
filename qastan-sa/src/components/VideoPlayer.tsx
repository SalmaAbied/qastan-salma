import React from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import blogData from "../json/blogData.json";

const VideoPlayer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogData.find((p) => p.id === id);

  if (!post || !post.videoUrl) {
    return null;
  }

  return (
    <div className="mb-8">
      <div className="aspect-video">
        <ReactPlayer url={post.videoUrl} width="100%" height="100%" controls={true} />
      </div>
    </div>
  );
};

export default VideoPlayer;
