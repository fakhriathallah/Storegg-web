import axios from 'axios';

export const getProductList = async () => {
  const product = await axios.get('https://fakestoreapi.com/products');
  //   console.log({ productList: product });
  return product.data;
};

export const getProductDetail = async (q) => {
  const detail = await axios.get(q);
  console.log(q);
};

export const searchProduct = async (q?: string) => {
  const searchProduct = await axios.get(q || '');
  // console.log(q);
  return searchProduct.data;
};
