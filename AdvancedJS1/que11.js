function processProducts(products) {
  const productNames = products.map(item => item.name);
  products.forEach(item => {
    if (item.price > 500) {
      console.log(`${item.name} is above $500`);
    } else {
      console.log(`${item.name} is below $500`);
    }
  });
  return productNames;
}
