import React, {useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Post from "./Post";

function MainPosts({posts}) {
  const [newPosts, setNewPosts] = useState([]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    }
  }, [newPosts]);

  const scrollHandler = (e) => {
    if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      return setNewPosts([...newPosts, ...posts]);
    }
  }

  return (
    <div className="interesting-pots">
      <p className="block-header">Interesting</p>

      <div className="interesting-posts__body">
        {posts.map(item => (
          <Post
            key={item.id}
            image={item.image}
            date={item.date}
            header={item.header}
            text={item.text}
          />
        ))}
        <div className="scroll-items">
          {/*{newPosts.map(item => (*/}
          {/*  <Post*/}
          {/*    key={uuidv4()}*/}
          {/*    image={item.image}*/}
          {/*    date={item.date}*/}
          {/*    header={item.header}*/}
          {/*    text={item.text}*/}
          {/*  />*/}
          {/*))}*/}
        </div>
      </div>
    </div>
  );
}

export default MainPosts;