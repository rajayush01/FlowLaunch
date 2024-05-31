// app/layout.js
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Product Listing</title>
        <meta name="description" content="Product listing page" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        
        {children}
        </body>
    </html>
  );
}