// app/components/ProductList.jsx
"use client";
import ProductCard from './ProductCard';

const ProductList = ({ products, onProductClick }) => {
  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onProductClick={onProductClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
