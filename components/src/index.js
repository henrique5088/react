import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Ana"
          timeAgo="Today at 4:45PM"
          avatar={faker.image.avatar()}
          content="Nice blog post!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(
  <>
    <App />
  </>,
  document.querySelector("#root")
);
