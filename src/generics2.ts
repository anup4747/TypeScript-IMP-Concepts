// Generic Array and arrow funtions 
// Define an interface to represent a Bottle object.
interface Bottle {
  brand: string;  // The brand of the bottle (e.g., "Coca-Cola").
  type: number;   // The type of the bottle (e.g., a numeric code to represent different types of bottles).
}

// Function to retrieve a product from the list, using a generic type T
function getSearchProducts<T>(products: T[]): T {
  // Assume a database operation is done to get the products.
  
  const myIndex = 3; // Example index to select the 4th item (since indices are 0-based)
  return products[myIndex];  // Return the product at the specified index
}

// Arrow function to retrieve a product from the list, using a generic type T
const getMoreSearchProducts = <T>(products: T[]): T => {
  // Assume a database operation is done to get the products.
  
  const myIndex = 4; // Example index to select the 5th item (again, indices are 0-based)
  return products[myIndex];  // Return the product at the specified index
}

export{}