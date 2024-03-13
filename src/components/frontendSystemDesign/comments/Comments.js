import React from "react";
import { commentsData } from "../utils";
import CommentBox from "./CommentBox";

const Comments = () => {
  return (
    <div>
      <CommentBox data={commentsData} />
    </div>
  );
};

export default Comments;
