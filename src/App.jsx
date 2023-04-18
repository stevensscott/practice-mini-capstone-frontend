import axios from "axios";

function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#new-products">New Products</a> | <a href="#products-index">All Products</a>
    </header>
  );
}

function ProductsNew() {
  return (
    <div id="new-products">
      <h1>New Products</h1>
      <form>
        <label>
          Name:
          <input type="text"></input>
          <br></br>
        </label>
        <label>
          Description:
          <input type="text"></input>
          <br></br>
        </label>
        <label>
          Price:
          <input type="text"></input>
          <br></br>
        </label>

        <button type="submit">Product Image</button>
        <br></br>
      </form>
    </div>
  );
}

function ProductsIndex(props) {
  console.log(props);
  return (
    <div id="products-index">
      <h1>All Products</h1>
      {props.products.map((product) => (
        <div key={product.id} className="products">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <img src={product.image} />
          <p>{product.price}</p>
          <button>More Info!</button>
          <p>------------------------------------</p>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2023</p>
    </footer>
  );
}

function Content() {
  // const handleIndexPosts = () => {
  //   axios.get("http://localhost:3000/posts.json").then(function (response) {
  //     console.log(response);
  //     //posts = response.data;
  //     setPosts(response.data);
  //   });
  // };

  let products = [
    {
      id: 1,
      name: "product 1",
      description: "Product 1 description bla",
      price: 123.4,
      image:
        "https://img.freepik.com/free-photo/beautiful-shot-crystal-clear-lake-snowy-mountain-base-during-sunny-day_181624-5459.jpg?size=626&ext=jpg&ga=GA1.2.878926910.1680659335&semt=sph",
    },
    {
      id: 2,
      name: "product 2",
      description: "Product 2 description bla",
      price: 222.4,
      image:
        "https://img.freepik.com/free-photo/beautiful-shot-crystal-clear-lake-snowy-mountain-base-during-sunny-day_181624-5459.jpg?size=626&ext=jpg&ga=GA1.2.878926910.1680659335&semt=sph",
    },
    {
      id: 3,
      name: "product 3",
      description: "Product 3 description bla",
      price: 333.4,
      image:
        "https://img.freepik.com/free-photo/beautiful-shot-crystal-clear-lake-snowy-mountain-base-during-sunny-day_181624-5459.jpg?size=626&ext=jpg&ga=GA1.2.878926910.1680659335&semt=sph",
    },
  ];
  return (
    <div>
      <ProductsNew />
      <ProductsIndex products={products} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
