import React from 'react';
import Post from "./Post";

function MainPosts({posts}) {
  return (
    <div className="interesting-pots">
      <p className="block-header">Interesting</p>

      <div className="interesting-posts__body">
        {posts.map((item, i) => (
          <Post
            key={item.id}
            image={item.image}
            date={item.date}
            header={item.header}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
}

export default MainPosts;