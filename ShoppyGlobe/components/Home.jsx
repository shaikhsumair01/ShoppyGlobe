
import ProductList from "./ProductList";
// Used for rendering the homepage. Contains the title and then the productList component
export default function Home() {

  return (
    <>
      <h1 className="Home-Header">Welcome to ShoppyGlobe - Your very own fashion store.</h1>
     
      <ProductList />
    </>
  );
}