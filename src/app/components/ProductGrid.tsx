const ProductGrid = () => {
  // Fetch product data from your data source (e.g., Supabase, local JSON)

  const products = [
    { 
      id: 1, 
      name: 'Organic Cotton T-Shirt', 
      image: '/images/product1.jpg', 
      price: '$25' 
    },
    // ... more products
  ]

  return (
    <section className="py-20">
      <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-48"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductGrid;