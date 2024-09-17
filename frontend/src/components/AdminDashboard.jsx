// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchProducts, addProduct, updateProduct, deleteProduct } from '../store/productSlice';
// import Swal from 'sweetalert2';

// const AdminDashboard = () => {
//   const dispatch = useDispatch();
//   const { items: products, status, error } = useSelector((state) => state.products);
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '', image: '' });

//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(fetchProducts());
//     }
//   }, [status, dispatch]);

//   const handleAddProduct = async (e) => {
//     e.preventDefault();
//     try {
//       await dispatch(addProduct(newProduct)).unwrap();
//       Swal.fire({
//         title: 'Success!',
//         text: 'Product added successfully.',
//         icon: 'success',
//         confirmButtonText: 'OK'
//       });
//       setNewProduct({ name: '', description: '', price: '', image: '' });
//     } catch (error) {
//       Swal.fire({
//         title: 'Error!',
//         text: 'Failed to add product.',
//         icon: 'error',
//         confirmButtonText: 'OK'
//       });
//     }
//   };

//   const handleUpdateProduct = async (e) => {
//     e.preventDefault();
//     try {
//       await dispatch(updateProduct(editingProduct)).unwrap();
//       Swal.fire({
//         title: 'Success!',
//         text: 'Product updated successfully.',
//         icon: 'success',
//         confirmButtonText: 'OK'
//       });
//       setEditingProduct(null);
//     } catch (error) {
//       Swal.fire({
//         title: 'Error!',
//         text: 'Failed to update product.',
//         icon: 'error',
//         confirmButtonText: 'OK'
//       });
//     }
//   };

//   const handleDeleteProduct = (productId) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: 'You won\'t be able to revert this!',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         dispatch(deleteProduct(productId))
//           .unwrap()
//           .then(() => {
//             Swal.fire(
//               'Deleted!',
//               'Product has been deleted.',
//               'success'
//             );
//           })
//           .catch(() => {
//             Swal.fire({
//               title: 'Error!',
//               text: 'Failed to delete product.',
//               icon: 'error',
//               confirmButtonText: 'OK'
//             });
//           });
//       }
//     });
//   };

//   if (status === 'loading') {
//     return <div className="text-center mt-8">Loading...</div>;
//   }

//   if (status === 'failed') {
//     return <div className="text-center mt-8 text-red-500">Error: {error}</div>;
//   }

//   return (
//     <div className="container mx-auto mt-8">
//       <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

//       {/* Add New Product Form */}
//       <div className="mb-8">
//         <h3 className="text-xl font-semibold mb-2">Add New Product</h3>
//         <form onSubmit={handleAddProduct} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Product Name"
//             value={newProduct.name}
//             onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
//             className="w-full p-2 border rounded"
//             required
//           />
//           <textarea
//             placeholder="Product Description"
//             value={newProduct.description}
//             onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
//             className="w-full p-2 border rounded"
//             required
//           />
//           <input
//             type="number"
//             placeholder="Price"
//             value={newProduct.price}
//             onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
//             className="w-full p-2 border rounded"
//             required
//           />
//           <input
//             type="text"
//             placeholder="Image URL"
//             value={newProduct.image}
//             onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
//             className="w-full p-2 border rounded"
//             required
//           />
//           <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
//             Add Product
//           </button>
//         </form>
//       </div>

//       <div>
//         <h3 className="text-xl font-semibold mb-2">Product List</h3>
//         <div className="space-y-4">
//           {products.map((product) => (
//             <div key={product.id} className="border p-4 rounded">
//               {editingProduct && editingProduct.id === product.id ? (
//                 <form onSubmit={handleUpdateProduct} className="space-y-4">
//                   <input
//                     type="text"
//                     value={editingProduct.name}
//                     onChange={(e) => setEditingProduct({...editingProduct, name: e.target.value})}
//                     className="w-full p-2 border rounded"
//                     required
//                   />
//                   <textarea
//                     value={editingProduct.description}
//                     onChange={(e) => setEditingProduct({...editingProduct, description: e.target.value})}
//                     className="w-full p-2 border rounded"
//                     required
//                   />
//                   <input
//                     type="number"
//                     value={editingProduct.price}
//                     onChange={(e) => setEditingProduct({...editingProduct, price: e.target.value})}
//                     className="w-full p-2 border rounded"
//                     required
//                   />
//                   <input
//                     type="text"
//                     value={editingProduct.image}
//                     onChange={(e) => setEditingProduct({...editingProduct, image: e.target.value})}
//                     className="w-full p-2 border rounded"
//                     required
//                   />
//                   <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
//                     Save Changes
//                   </button>
//                   <button onClick={() => setEditingProduct(null)} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 ml-2">
//                     Cancel
//                   </button>
//                 </form>
//               ) : (
//                 <>
//                   <h4 className="text-lg font-semibold">{product.name}</h4>
//                   <p>{product.description}</p>
//                   <p className="font-bold">${product.price}</p>
//                   <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mt-2" />
//                   <div className="mt-2">
//                     <button onClick={() => setEditingProduct(product)} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mr-2">
//                       Edit
//                     </button>
//                     <button onClick={() => handleDeleteProduct(product.id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
//                       Delete
//                     </button>
//                   </div>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
///////////////////
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../store/productSlice";
import Swal from "sweetalert2";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const {
    items: products,
    status,
    error,
  } = useSelector((state) => state.products);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      await dispatch(addProduct(newProduct)).unwrap();
      Swal.fire({
        title: "Success!",
        text: "Product added successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });
      setNewProduct({ name: "", description: "", price: "", image: "" });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to add product.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      await dispatch(updateProduct(editingProduct)).unwrap();
      Swal.fire({
        title: "Success!",
        text: "Product updated successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });
      setEditingProduct(null);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to update product.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleDeleteProduct = (productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProduct(productId))
          .unwrap()
          .then(() => {
            Swal.fire("Deleted!", "Product has been deleted.", "success");
          })
          .catch(() => {
            Swal.fire({
              title: "Error!",
              text: "Failed to delete product.",
              icon: "error",
              confirmButtonText: "OK",
            });
          });
      }
    });
  };

  if (status === "loading") {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (status === "failed") {
    return <div className="text-center mt-8 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto mt-8 px-4">
      <h2 className="text-3xl font-bold mb-6 text-indigo-700">
        Admin Dashboard
      </h2>

      {/* Add New Product Form */}
      <div className="mb-12 bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
          Add New Product
        </h3>
        <form onSubmit={handleAddProduct} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="number"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <textarea
            placeholder="Product Description"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows="4"
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Add Product
          </button>
        </form>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
          Product List
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 p-4 rounded-lg shadow-sm"
            >
              {editingProduct && editingProduct.id === product.id ? (
                <form onSubmit={handleUpdateProduct} className="space-y-4">
                  <input
                    type="text"
                    value={editingProduct.name}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        name: e.target.value,
                      })
                    }
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                  <textarea
                    value={editingProduct.description}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        description: e.target.value,
                      })
                    }
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    rows="3"
                    required
                  />
                  <input
                    type="number"
                    value={editingProduct.price}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        price: e.target.value,
                      })
                    }
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                  <input
                    type="text"
                    value={editingProduct.image}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        image: e.target.value,
                      })
                    }
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                  <div className="flex justify-end space-x-2">
                    <button
                      type="submit"
                      className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingProduct(null)}
                      className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h4 className="text-lg font-semibold text-indigo-700 mb-2">
                    {product.name}
                  </h4>
                  <p className="text-gray-600 mb-2">{product.description}</p>
                  <p className="font-bold text-indigo-600 mb-4">
                    ${product.price}
                  </p>
                  <div className="flex justify-between">
                    <button
                      onClick={() => setEditingProduct(product)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-300"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
