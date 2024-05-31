"use client"
import { useState, useEffect } from 'react';
import ProductList from '@/components/ProductList';
import ProductDetails from '../components/ProductDetails';
import Navbar from '../components/Navbar';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto">
      <Navbar setSearchTerm={setSearchTerm} />
      <ProductList
        products={filteredProducts}
        onProductClick={(product) => setSelectedProduct(product)}
      />
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
