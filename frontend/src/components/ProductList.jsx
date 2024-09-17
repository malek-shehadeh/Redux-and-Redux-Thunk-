// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchProducts } from '../store/productSlice';
// import { addToCart, fetchCart } from '../store/cartSlice';
// import Swal from 'sweetalert2';
// const ProductList = () => {
//   const dispatch = useDispatch();
//   const { items: products, status, error } = useSelector((state) => state.products);
//   const { user } = useSelector((state) => state.auth);

//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(fetchProducts());
//     }
//   }, [status, dispatch]);

//   const handleAddToCart = async (productId) => {
//     if (user) {
//       try {
//         await dispatch(addToCart(productId));
//         dispatch(fetchCart());
//         Swal.fire({
//           title: 'Added to Cart!',
//           text: 'The item has been added to your cart.',
//           icon: 'success',
//           confirmButtonText: 'OK'
//         });
//       } catch (error) {
//         Swal.fire({
//           title: 'Error!',
//           text: 'Failed to add the item to your cart.',
//           icon: 'error',
//           confirmButtonText: 'OK'
//         });
//       }
//     } else {
//       Swal.fire({
//         title: 'Not Logged In!',
//         text: 'Please log in to add items to your cart.',
//         icon: 'info',
//         confirmButtonText: 'OK'
//       });
//     }
//   };

//   if (status === 'loading') {
//     return <div className="text-center mt-8">Loading...</div>;
//   }

//   if (status === 'failed') {
//     return <div className="text-center mt-8 text-red-500">Error: {error}</div>;
//   }

//   return (
//     <div className="container mx-auto mt-8">
//       <h2 className="text-2xl font-bold mb-4">Our Products</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div key={product.id} className="border rounded-lg p-4 shadow-md">
//             <img src={product.image || '/placeholder-image.jpg'} alt={product.name} className="w-full h-48 object-cover mb-4" />
//             <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
//             <p className="text-gray-600 mb-2">{product.description}</p>
//             <p className="text-lg font-bold mb-4">${parseFloat(product.price).toFixed(2)}</p>
//             <button
//               onClick={() => handleAddToCart(product.id)}
//               className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;
///////////////////////////////////
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { addToCart, fetchCart } from "../store/cartSlice";
import Swal from "sweetalert2";

const ProductList = () => {
  const dispatch = useDispatch();
  const {
    items: products,
    status,
    error,
  } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const handleAddToCart = async (productId) => {
    if (user) {
      try {
        await dispatch(addToCart(productId));
        dispatch(fetchCart());
        Swal.fire({
          title: "Added to Cart!",
          text: "The item has been added to your cart.",
          icon: "success",
          confirmButtonText: "OK",
        });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "Failed to add the item to your cart.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } else {
      Swal.fire({
        title: "Not Logged In!",
        text: "Please log in to add items to your cart.",
        icon: "info",
        confirmButtonText: "OK",
      });
    }
  };

  if (status === "loading") {
    return <div className="text-center mt-8 text-indigo-600">Loading...</div>;
  }

  if (status === "failed") {
    return <div className="text-center mt-8 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto mt-8 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-800">
        Our Products
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <img
              src={product.image || "/placeholder-image.jpg"}
              alt={product.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1 text-indigo-700 truncate">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2 h-12 overflow-hidden">
                {product.description}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold text-indigo-600">
                  ${parseFloat(product.price).toFixed(2)}
                </p>
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-bold py-2 px-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
