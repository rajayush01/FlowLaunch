// app/components/ProductDetails.jsx
"use client";

const ProductDetails = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">{product.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <img src={product.image} alt={product.title} className="w-full mb-4 h-80 object-contain rounded-lg shadow-sm" />
        <p className="text-gray-700 mb-4">{product.description}</p>
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-700 font-semibold">Price: ${product.price}</p>
          <div className="flex items-center">
            <span className="text-yellow-500">⭐ {product.rating.rate}</span>
            <span className="text-gray-600 ml-2">({product.rating.count} reviews)</span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
