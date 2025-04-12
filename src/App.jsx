// App.jsx Tahsinnn
import { useState } from 'react';
import './App.css';
import BannerImage from './assets/Banner-min.jpg';
import Blogs from './Component/Blogs/Blogs';
import { GiSelfLove } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

function App() {
  const [bookMarked, setBookmark] = useState([]);
  const [disabledBookmarks, setDisabledBookmarks] = useState([]);
  const [totalBid, setTotalBid] = useState(0); // total bid amount

  const handleBOOkMark = (blog) => {
    const exists = bookMarked.find(item => item.id === blog.id);
    if (!exists) {
      setBookmark([...bookMarked, blog]);
      setDisabledBookmarks([...disabledBookmarks, blog.id]);
      setTotalBid(prev => prev + parseFloat(blog.currentBidPrice)); // update total
      alert("Added to favorites!");
    }
  };

  const handleRemoveBookmark = (id) => {
    const removedItem = bookMarked.find(item => item.id === id);
    if (removedItem) {
      setTotalBid(prev => prev - parseFloat(removedItem.currentBidPrice)); // subtract bid
    }
    const updated = bookMarked.filter(item => item.id !== id);
    setBookmark(updated);
    setDisabledBookmarks(disabledBookmarks.filter(disabledId => disabledId !== id));
    alert("Removed from favorites!");
  };

  return (
    <>
       
       <div className="navbar bg-amber-50 flex justify-between">
 




 {/* Navber */}
 <div className="">
     <a className="btn btn-ghost text-xl"><span className='text-blue-400'>Action</span><span className='text-amber-300'>Gallary</span></a>
   </div>
 
   {/* <div className='flex'>
 <h1 className='text-xl text-blue-400'>Action </h1> 
 <h1 className='text-xl text-amber-300'>Gallary</h1>
 </div> */}
 
 <div className=' flex gap-5 '>
     <div><h1>Home</h1></div>
     <div><h1>Action</h1></div>
     <div><h1>Catagories</h1></div>
     <div><h1>How to works</h1></div>
 
 </div>
   
 
 
 
 
   <div className="flex-none">
     <div className="dropdown dropdown-end">
       <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
         <div className="indicator">
           {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg> */}
 
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
 
           <span className="badge badge-sm indicator-item">9</span>
         </div>
       </div>
       <div
         tabIndex={0}
         className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
         <div className="card-body">
           <span className="text-lg font-bold"> Items</span>
           <span className="text-info">Subtotal: $999</span>
           <div className="card-actions">
             <button className="btn btn-primary btn-block">View cart</button>
           </div>
         </div>
       </div>
     </div>
     <div className="dropdown dropdown-end">
       <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
         <div className="w-10 rounded-full">
           <img
             alt="Tailwind CSS Navbar component"
             src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
         </div>
       </div>
       
     </div>
   </div>
 
 
   </div>  {/* End of Navber */}


      {/* Banner */}
      <div className="relative w-[1817px] h-[550px]">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url(${BannerImage})` }}
        ></div>
        <div className="absolute inset-0 flex flex-col justify-center items-start p-10 md:p-20 lg:p-32">
          <h1 className="text-white text-5xl font-bold mb-4">
            Bid on Unique Items from <br /> Around the World
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions.
          </p>
          <button className="bg-white text-gray-800 font-semibold py-3 px-6 rounded-full hover:bg-gray-200">
            Explore Auctions
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className='ml-32 mt-10'>
        <h1 className='text-xl text-[#054cbe]'>Active Auctions</h1>
        <h4>Discover and bid on extraordinary items.</h4>
      </div>

      <div className="main-container flex gap-5 p-5">
        <div className="left-container w-[70%] shadow-lg ml-25">
          <Blogs
            handleBOOkMark={handleBOOkMark}
            bookMarked={bookMarked}
            disabledBookmarks={disabledBookmarks}
          />
        </div>

        <div className="right-container w-[30%] shadow-lg text-center p-5 bg-white mr-25">
          <h1 className='text-[#054cbe] text-2xl flex items-center gap-2 justify-center mb-3'>
            <GiSelfLove size={24} className='text-blue-800' />
            Favorite Items
          </h1>
          <hr />

          {bookMarked.length === 0 ? (
            <div className="mt-10">
              <h1 className='text-black text-xl'>No Favorite yet</h1>
              <p className='text-gray-600'>Click the heart icon to add to favorites</p>
            </div>
          ) : (
            <div className='space-y-5 mt-5'>
              {bookMarked.map((marked) => (
                <div key={marked.id} className="bg-white shadow-lg p-3 rounded-md relative grid grid-cols-2 border-2">
                  <img src={marked.image} alt={marked.title} className="w-20 h-20 mx-auto rounded object-cover" />
                  <div className='flex flex-col gap-4 text-left mt-1'>
                    <h2 className="text-lg font-semibold mt-2">{marked.title}</h2>
                    <div className='flex gap-2'>
                      <span>${marked.currentBidPrice}</span>
                      <span>Bid: {marked.bidsCount || 0}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveBookmark(marked.id)}
                    className="absolute top-2 right-2 text-red-500"
                  >
                    <RxCross2 size={20} />
                  </button>
                </div>
              ))}
            </div>
          )}
          <hr className="my-4" />
          <h1 className='text-xl'>Total bids Amount: ${totalBid.toFixed(2)}</h1>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer footer-horizontal footer-center bg-black text-base-content rounded p-10 mt-15">
        <div className='flex'>
          <h1 className='text-xl text-blue-400'>Action </h1>
          <h1 className='text-xl text-amber-300'>Gallary</h1>
        </div>
        <nav className="grid grid-flow-col gap-4 text-white">
          <a className="link link-hover">Bit</a>
          <a className="link link-hover">Win</a>
          <a className="link link-hover">Won</a>
        </nav>

        <nav className='text-white'>
    <div className="grid grid-flow-col gap-4">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>

        <aside className='text-white'>
          <p> © {new Date().getFullYear()} ActionHub All rights reserved</p>
        </aside>
      </footer>
    </>
  );
}

export default App;
