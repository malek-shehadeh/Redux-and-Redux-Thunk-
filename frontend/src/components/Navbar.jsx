// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { logout } from '../store/authSlice';

// // const Navbar = () => {
// //   const dispatch = useDispatch();
// //   const { user } = useSelector((state) => state.auth);
// //   const { items } = useSelector((state) => state.cart);

// //   const handleLogout = () => {
// //     dispatch(logout());
// //   };

// //   const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

// //   return (
// //     <nav className="bg-blue-600 shadow-md">
// //       <div className="container mx-auto px-6 py-4 flex justify-between items-center">
// //         <Link to="/" className="text-white text-3xl font-extrabold tracking-wide hover:text-blue-200 transition-all">
// //           ShopCart
// //         </Link>

// //         <div className="flex items-center space-x-6">
// //           <Link
// //             to="/products"
// //             className="text-white text-lg font-medium hover:text-blue-200 transition-colors duration-300"
// //           >
// //             Products
// //           </Link>

// //           {user && (
// //             <Link
// //               to="/cart"
// //               className="relative text-white text-lg font-medium hover:text-blue-200 transition-colors duration-300"
// //             >
// //               Cart
// //               <span className="ml-1 inline-block bg-red-500 text-white rounded-full text-xs px-2 py-1">
// //                 {cartItemCount}
// //               </span>
// //             </Link>
// //           )}

// //           {user ? (
// //             <div className="relative group">
// //               <button className="text-white text-lg font-medium flex items-center focus:outline-none group-hover:text-blue-200">
// //                 {user.username}
// //                 <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
// //                 </svg>
// //               </button>

// //               <div className="absolute right-0 mt-2 bg-white rounded-md shadow-lg py-2 w-48 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// //                 {user.role === 'admin' && (
// //                   <Link
// //                     to="/admin"
// //                     className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
// //                   >
// //                     Admin Dashboard
// //                   </Link>
// //                 )}
// //                 <button
// //                   onClick={handleLogout}
// //                   className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
// //                 >
// //                   Logout
// //                 </button>
// //               </div>
// //             </div>
// //           ) : (
// //             <>
// //               <Link
// //                 to="/login"
// //                 className="text-white text-lg font-medium hover:text-blue-200 transition-colors duration-300"
// //               >
// //                 Login
// //               </Link>
// //               <Link
// //                 to="/register"
// //                 className="text-white text-lg font-medium hover:text-blue-200 transition-colors duration-300"
// //               >
// //                 Register
// //               </Link>
// //             </>
// //           )}
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// //////////////////////////////
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../store/authSlice";

// const Sidebar = () => {
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.auth);
//   const { items } = useSelector((state) => state.cart);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleLogout = () => {
//     dispatch(logout());
//   };

//   const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

//   return (
//     <>
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="fixed top-4 left-4 z-50 p-2 bg-purple-600 text-white rounded-md lg:hidden"
//       >
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h16m-7 6h7"
//           ></path>
//         </svg>
//       </button>

//       <div
//         className={`fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-purple-700 to-indigo-800 text-white transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } lg:translate-x-0 transition-transform duration-300 ease-in-out z-30`}
//       >
//         <div className="flex flex-col h-full">
//           <div className="p-5">
//             <Link
//               to="/"
//               className="text-3xl font-extrabold tracking-wide hover:text-purple-300 transition-all"
//             >
//               ShopCart
//             </Link>
//           </div>

//           <nav className="flex-grow">
//             <Link
//               to="/products"
//               className="block py-3 px-5 text-lg font-medium hover:bg-purple-600 transition-colors duration-300"
//             >
//               Products
//             </Link>

//             {user && (
//               <Link
//                 to="/cart"
//                 className="block py-3 px-5 text-lg font-medium hover:bg-purple-600 transition-colors duration-300 relative"
//               >
//                 Cart
//                 <span className="ml-2 inline-block bg-pink-500 text-white rounded-full text-xs px-2 py-1">
//                   {cartItemCount}
//                 </span>
//               </Link>
//             )}

//             {user ? (
//               <div className="mt-auto">
//                 <div className="px-5 py-3 bg-purple-800">
//                   <p className="text-lg font-medium">{user.username}</p>
//                   {user.role === "admin" && (
//                     <Link
//                       to="/admin"
//                       className="block mt-2 text-purple-300 hover:text-white transition-colors duration-300"
//                     >
//                       Admin Dashboard
//                     </Link>
//                   )}
//                   <button
//                     onClick={handleLogout}
//                     className="mt-2 w-full text-left text-purple-300 hover:text-white transition-colors duration-300"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <div className="mt-auto px-5 py-3">
//                 <Link
//                   to="/login"
//                   className="block py-2 text-lg font-medium hover:text-purple-300 transition-colors duration-300"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   to="/register"
//                   className="block py-2 text-lg font-medium hover:text-purple-300 transition-colors duration-300"
//                 >
//                   Register
//                 </Link>
//               </div>
//             )}
//           </nav>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;
//////////////////
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.cart);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300"
        aria-label="Toggle Menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          )}
        </svg>
      </button>

      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-purple-700 to-indigo-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 shadow-2xl`}
      >
        <div className="flex flex-col h-full">
          <div className="p-5">
            <Link
              to="/"
              className="text-3xl font-extrabold tracking-wide hover:text-purple-300 transition-all"
              onClick={() => setIsOpen(false)}
            >
              ShopCart
            </Link>
          </div>

          <nav className="flex-grow">
            <Link
              to="/products"
              className="block py-3 px-5 text-lg font-medium hover:bg-purple-600 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>

            {user && (
              <Link
                to="/cart"
                className="block py-3 px-5 text-lg font-medium hover:bg-purple-600 transition-colors duration-300 relative"
                onClick={() => setIsOpen(false)}
              >
                Cart
                <span className="ml-2 inline-block bg-pink-500 text-white rounded-full text-xs px-2 py-1">
                  {cartItemCount}
                </span>
              </Link>
            )}

            {user ? (
              <div className="mt-auto">
                <div className="px-5 py-3 bg-purple-800">
                  <p className="text-lg font-medium">{user.username}</p>
                  {user.role === "admin" && (
                    <Link
                      to="/admin"
                      className="block mt-2 text-purple-300 hover:text-white transition-colors duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      Admin Dashboard
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="mt-2 w-full text-left text-purple-300 hover:text-white transition-colors duration-300"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-auto px-5 py-3">
                <Link
                  to="/login"
                  className="block py-2 text-lg font-medium hover:text-purple-300 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block py-2 text-lg font-medium hover:text-purple-300 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
