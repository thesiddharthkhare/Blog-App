import React from "react";

const Post = () => {
  return (
    <>
      <div className="post">
        <div className="image">
          <img
            src="https://techcrunch.com/wp-content/uploads/2023/06/Vision-Pro-IMG-10.jpeg?resize=1200,675"
            alt=""
          />
        </div>
        <div className="texts">
          <h2>Apple Intelligence could arrive on Vision Pro in April</h2>
          <p className="info">
            <a href="" className="author">
              Siddharth Khare
            </a>
            <time>2025-02-16 18:37</time>
          </p>
          <p className="summary">
            Apple is planning to add Apple Intelligence to its Vision Pro
            headset in an update that could come as early as April, according to
            Bloomberg’s Mark Gurman. Just a couple weeks after Apple
            Intelligence was first announced in June 2024, Gurman reported that
            Apple was looking to bring its suite of AI tools to the Vision Pro,
            though there were questions to answer about how those tools would be
            reimagined for a mixed reality experience. Now Apple is reportedly
            aiming to include Apple Intelligence (including Writing Tools,
            Genmoji, and Image Playground) in its visionOS 2.4 software update,
            with a version available to developers as soon as this week.
          </p>
        </div>
      </div>
    </>
  );
};
export default Post;
