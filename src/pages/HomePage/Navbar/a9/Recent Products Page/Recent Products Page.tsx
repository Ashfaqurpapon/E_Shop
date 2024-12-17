import "./Recent Products Page.css";

const dummyRecentProducts = [
  {
    id: 1,
    name: "Product A",
    price: 15,
    image: "https://via.placeholder.com/150",
    link: "/product/1",
  },
  {
    id: 2,
    name: "Product B",
    price: 25,
    image: "https://via.placeholder.com/150",
    link: "/product/2",
  },
  {
    id: 3,
    name: "Product C",
    price: 20,
    image: "https://via.placeholder.com/150",
    link: "/product/3",
  },
  {
    id: 4,
    name: "Product D",
    price: 30,
    image: "https://via.placeholder.com/150",
    link: "/product/4",
  },
  {
    id: 5,
    name: "Product E",
    price: 18,
    image: "https://via.placeholder.com/150",
    link: "/product/5",
  },
  {
    id: 6,
    name: "Product F",
    price: 22,
    image: "https://via.placeholder.com/150",
    link: "/product/6",
  },
  {
    id: 7,
    name: "Product G",
    price: 19,
    image: "https://via.placeholder.com/150",
    link: "/product/7",
  },
  {
    id: 8,
    name: "Product H",
    price: 35,
    image: "https://via.placeholder.com/150",
    link: "/product/8",
  },
  {
    id: 9,
    name: "Product I",
    price: 12,
    image: "https://via.placeholder.com/150",
    link: "/product/9",
  },
  {
    id: 10,
    name: "Product J",
    price: 40,
    image: "https://via.placeholder.com/150",
    link: "/product/10",
  },
];

const RecentProducts = () => {
  return (
    <div className="recent-products">
      <h1 className="heading">Recently Viewed Products</h1>

      <div className="product-list">
        {dummyRecentProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">Price: ${product.price}</p>
            <a href={product.link} className="product-link">
              View Product
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProducts;
