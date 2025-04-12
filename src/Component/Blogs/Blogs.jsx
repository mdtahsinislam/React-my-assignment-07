// Blogs.jsx
import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ handleBOOkMark, bookMarked, disabledBookmarks }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setBlogs(data);
        } else {
          console.error("Invalid blog data format", data);
        }
      })
      .catch(err => console.error("Failed to load blogs.json", err));
  }, []);

  return (
    <div className="overflow-x-auto mt-5">
      <table className="table w-full">
        <thead>
          <tr className='bg-emerald-200 shadow-lg border-b-blue-300'>
            <th>Item</th>
            <th>Current Bid</th>
            <th>Time Left</th>
            <th>Bid Now</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog, index) => (
            <Blog
              key={index}
              blog={blog}
              handleBOOkMark={handleBOOkMark}
              isDisabled={disabledBookmarks.includes(blog.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Blogs;
