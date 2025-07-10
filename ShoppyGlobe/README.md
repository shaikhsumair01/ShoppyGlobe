# ShoppyGlobe
ShoppyGlobe is a responsive e-commerce web application built using React and Redux. It allows users to browse a list of products, view detailed information, add/remove items to/from the cart, and proceed through a basic checkout process.
-Update: Implemented Express and mongoose in the project for the backend. Connected the project to Mongodb compass for data storage and added jwt authentication for user verification. 
# (Back-end will be integrated in front-end in the future updates)

## Features
    - Fetching products from a public api called fakestore api
    - Search functionality to filter products
    -Filtered pages based on product category
    - Add to cart, update quantity, and remove items
    - Checkout page with order summary
    - Viewing product detail with dynamic routing
    - 404 Not Found page for unmatched routes
    - Redux-based global state management
    - using Lazy loading through `React.lazy` and `Suspense`
    - Fully responsive page styled using TailwindCSS

-Update - #(testing purpose since the backend is not integrated in the front-end)
    -JWT token based authentication for user registeration and validation
    -Crud operations using MongoDB (mongoose) using rest api for fetching and storing products.
    -Crud operations for updating product quantity in the cart system
    

## Tech Stack

- **Frontend:** React, Redux, React Router 
- **Styling:** TailwindCSS
- **Build Tool:** Vite
##"Update"
- **Backend:** Node, Express, Mongoose
- **Additional Tools:** Nodemon, JsonwebToken, dotenv
## Folder Structure
-ShoppyGlobe
    -Backend
        -Router
            -Controller
                -cart.controller.js
                -product.controller.js
                -user.controller.js
            -Model
                -cart.model.js
                -product.model.js
                -user.model.js
            -cart.routes.js
            -product.routes.js
            -user.routes.js
            -db.js
            -server.js

    -Components
        -Accessory.jsx
        -BestSellers.jsx
        -Cart.jsx
        -CartItem.jsx
        -Checkout.jsx
        -Electronics.jsx
        -Header.jsx
        -HeroSection.jsx
        -Home.jsx
        -Men.jsx
        -NewArrivals.jsx
        -NotFound.jsx
        -ProductDetails.jsx
        -ProductItems.jsx
        -ProductList.jsx
        -SearchResult.jsx
        -Spinner.jsx
        -Women.jsx
    
    -Custom Hooks
        -useFetch.js
    
    -src
        -Redux
            -Redux-slices
                -CartSlice.js
            -Store.js
        -App.jsx
        -main.jsx
        -style.css

##  How to run the project
1. Clone the repo
    
    ```bash
        git clone https://github.com/shaikhsumair01/ShoppyGlobe;
    ```

2.  Navigate to the repo
    
    ```bash
    <!-- to run ShoppyGlobe -->
        cd ShoppyGlobe
    <!-- to run the api -->
        cd ShoppyGlobe\Backend\Router 
    ```

3. Install dependencies
    
    ```PowerShell
        npm install
    ```
4. Run the project
    
    ```PowerShell
    <!-- to run ShoppyGlobe locally -->
         npm run dev 
    <!-- to run the backend server (start nodemon) -->
         npm start (will start at server port: "localhost:3000")
    ```

# Github link:
https://github.com/shaikhsumair01/ShoppyGlobe

# Note: Added Github page builder to the repo and Hosted the project on github server.

#   updates:
- To connect the backend with the frontend using Cors (cross origin resource sharing).
- To store the data on mongodb atlas for accessibility.
- adding a basic stripe layout on checkout to improve the user exprience.  
- implementing the login and registeration page so that the user can actually store credentials on the website through the api.


