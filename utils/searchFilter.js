const searchFilter = (products, searchValue) => {
  const newProducts = products.filter((product) => {
    if (product.name.includes(searchValue)) return product;
  });
  return newProducts;
};
export { searchFilter };
