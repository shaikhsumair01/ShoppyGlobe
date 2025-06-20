# ShoppyGlobe
ShoppyGlobe is a responsive e-commerce web application built using React and Redux. It allows users to browse a list of products, view detailed information, add/remove items to/from the cart, and proceed through a basic checkout process.

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

## Tech Stack

- **Frontend:** React, Redux, React Router 
- **Styling:** TailwindCSS
- **Build Tool:** Vite

## Folder Structure
-ShoppyGlobe

    -Components
        -Accessory.jsx
        -Cart.jsx
        -CartItem.jsx
        -Checkout.jsx
        -Electronics.jsx
        -Header.jsx
        -Home.jsx
        -Men.jsx
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
        cd ShoppyGlobe
    ```

3. Install dependencies
    
    ```PowerShell
        npm install
    ```
4. Run the project
    
    ```PowerShell
       To run locally: npm run dev 
    ```

# Github link:
https://github.com/shaikhsumair01/ShoppyGlobe

# Note: Added Github page builder to the repo and Hosted the project on github server.

#   updates:
- To implement the login feature in the website
- upgrading the mobile navigation for a more better user experience
- improving the checkout page after the user has made the purchase

# A minor bug with navigation
- In mobile navigation, the user will have to manually close the navigation. The navigation will be open since the same navigation is being displayed on the desktop screen. When clicking on the links (tapping on them) the page gets redirected in mobile nav but the navigation doesn't close itself.
 -  Will update it in the future