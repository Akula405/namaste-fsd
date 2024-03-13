import React from "react";

const CommentBox = ({ data }) => {
  return (
    <div>
      {data.map((comment, i) => (
        <div className="pl-10 border-l-2 border-black" key={i}>
          <div className="flex p-3">
            <div>
              <img
                className="w-12"
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="User"
              />
            </div>

            <div className="px-2">
              <h1 className="font-bold">{comment.userName}</h1>
              <p>{comment.comment}</p>
            </div>
          </div>
          <div>{comment?.replies && <CommentBox data={comment.replies} />}</div>
        </div>
      ))}
    </div>
  );
};

export default CommentBox;
