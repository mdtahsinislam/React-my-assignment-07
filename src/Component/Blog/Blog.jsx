// TahSin  Blog.jsx
import React from 'react';
import { GiSelfLove } from "react-icons/gi";

const Blog = ({ blog, handleBOOkMark, isDisabled }) => {
  if (!blog) return null; // safety check

  const { image, title, currentBidPrice, timeLeft } = blog;

  return (
    <tr className='shadow-md border-b-blue-300'>
      <td className='flex items-center gap-3'>
        <img src={image} alt="Item" className="w-20 h-20 object-cover rounded" />
        <p className='text-sm font-semibold'>{title}</p>
      </td>
      <td>${currentBidPrice}</td>
      <td>{timeLeft}</td>
      <td>
        <button
          onClick={() => handleBOOkMark(blog)}
          disabled={isDisabled}
          className={`rounded-full transition-all ${isDisabled ? 'text-red-500 cursor-not-allowed' : 'text-gray-400 hover:text-red-600'}`}
          title={isDisabled ? "Already Favorited" : "Add to Favorites"}
        >
          <GiSelfLove size={25} />
        </button>
      </td>
    </tr>
  );
};

export default Blog;
