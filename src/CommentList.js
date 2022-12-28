import React, { useEffect, useState } from "react";
import axios from "axios";

export function CommentList(props) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(props.comments);
  }, []);

  const renderedComments = comments.map((comment) => {
    let content =
      comment.status === "approved"
        ? comment.content
        : comment.status === "rejected"
        ? "This comment has been rejected"
        : "This comment is awaiting moderation";

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
}
