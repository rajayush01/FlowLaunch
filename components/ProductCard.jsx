// app/components/ProductCard.jsx
"use client";

const ProductCard = ({ product, onProductClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
      onClick={() => onProductClick(product)}
    >
      <img src={product.image} alt={product.title} className="w-full h-48 object-contain" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h3>
        <div className="flex justify-between items-center mt-2">
          <p className="text-gray-600 text-lg font-medium">${product.price}</p>
          <div className="flex items-center">
            <span className="text-yellow-500">⭐ {product.rating.rate}</span>
            <span className="text-gray-600 ml-2">({product.rating.count} reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
