import React, { useState } from "react";

const AddProduct = () => {

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    old_price: "",
    category: "",
    collection: "",
    in_stock: true,
    details: "",
    care: "",
    artisans: "",
    productImages: [],
  });

  const [images, setImages] = useState([]);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
  
    // Append all form fields to FormData
    for (const key in formData) {
      if (key === "productImages") {
        for (let i = 0; i < images.length; i++) {
          data.append("productImages", images[i]);
        }
      } else {
        data.append(key, formData[key]);
      }
    }
  
    try {
      fetch("http://localhost:8000/api/add_products", {
        method: "POST",
        body: data
      })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          console.log(res.error);
          setMessage(res.error);
        } 
        if (res.message) {
          console.log(res.message);
          setMessage(res.message);
        }
      })
    } catch (error) {
        console.log("error")
        setMessage("ERROR 'AddProduct:handleSubmit' Network error: Unable to connect to the server.");
    }
  };

  function deleteAllProducts(){
    fetch("http://localhost:8000/api/delete_all_products")
    .then(res => res.json())
    .then(res => {
      console.log(res);
      setMessage(res);
    })
    .catch(err => console.log(err))
  }

  return (
    <div style={{ marginTop: "200px", maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h2>Add Product</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Old Price</label>
          <input
            type="number"
            name="old_price"
            value={formData.old_price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Collection</label>
          <input
            type="text"
            name="collection"
            value={formData.collection}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>In Stock</label>
          <select
            name="in_stock"
            value={formData.in_stock}
            onChange={handleChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div>
          <label>Details</label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Care</label>
          <textarea
            name="care"
            value={formData.care}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Artisans</label>
          <input
            type="text"
            name="artisans"
            value={formData.artisans}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Product Images</label>
          <input
            type="file"
            name="productImages"
            multiple
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
      <button onClick={() => deleteAllProducts()}>Delete All Products</button>
    </div>
  );
};

export default AddProduct;