"use client"
import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductModal from './ProductModal';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
};

const Homepage = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products = [
    { id: 1, name: 'Product 1', price: 19.99, image: 'https://via.placeholder.com/150', description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', price: 29.99, image: 'https://via.placeholder.com/150', description: 'Description for Product 2' },
    { id: 3, name: 'Product 3', price: 39.99, image: 'https://via.placeholder.com/150', description: 'Description for Product 3' },
  ];


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold">E-Commerce</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-blue-500">Home</a></li>
            <li><a href="#" className="text-blue-500">Shop</a></li>
            <li><a href="#" className="text-blue-500">About</a></li>
            <li><a href="#" className="text-blue-500">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero bg-gray-200 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Welcome to Our Store</h2>
          <p className="mb-4">Find the best products at the best prices.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Shop Now</button>
        </section>

        <section className="carousel mb-8">
          <Slider {...settings}>
            {products.map(product => (
              <div key={product.id} className="p-4">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg"/>
                <h3 className="text-xl font-bold mt-4">{product.name}</h3>
                <p className="text-gray-700">${product.price}</p>
              </div>
            ))}
          </Slider>
        </section>

        <section className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="product bg-white p-4 rounded-lg shadow" onClick={() => setSelectedProduct(product)}>
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded"/>
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-4">${product.price}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
            </div>
          ))}
        </section>
      </main>

      <footer className="py-4 text-center">
        <p className="text-gray-700">&copy; 2023 E-Commerce. All rights reserved.</p>
      </footer>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
};

export default Homepage;
