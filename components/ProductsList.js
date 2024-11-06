import React, { useEffect, useState } from "react";
import styles from "./ProductsList.module.css";
import { AiOutlineControl } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { FaRegPenToSquare } from "react-icons/fa6";
import { getProducts } from "../services/Products";
import Loading from "./Loading";
import { searchFilter } from "../utils/searchFilter";

function ProductsList({
  setShowAddProduct,
  setShowEditProduct,
  setShowDeleteModal,
  setDeleteProductId,
  setProductToEdit,
  searchValue,
  page,
  setTotalPages,
}) {
  const { data, isPending, error } = getProducts(page);
  if (data != undefined) {
    setTotalPages(data.data.totalPages);
  }
  const [filteredProducts, setFilteredProducts] = useState([]);

  const deleteHandler = (id) => {
    setShowDeleteModal(true);
    setDeleteProductId(id);
  };
  const editHandler = (product) => {
    setProductToEdit(product);
    setShowEditProduct(true);
  };
  useEffect(() => {
    if (searchValue)
      setFilteredProducts(searchFilter(data.data.data, searchValue));
  }, [searchValue]);

  if (error) console.log(error.response.data.message);
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <button onClick={() => setShowAddProduct(true)}>افزودن محصول</button>
        <div>
          <h1>مدیریت کالا</h1>
          <AiOutlineControl size={30} color="rgba(41, 45, 50, 1)" />
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <tr>
            <th></th>
            <th>شناسه کالا</th>
            <th>قیمت</th>
            <th>موجودی</th>
            <th>نام کالا</th>
          </tr>
          {isPending ? (
            <Loading />
          ) : searchValue ? (
            filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>
                  <button onClick={() => deleteHandler(product.id)}>
                    <BsTrash size={20} color="rgba(244, 63, 94, 1)" />
                  </button>
                  <button onClick={() => editHandler(product)}>
                    <FaRegPenToSquare size={20} color="rgba(74, 222, 128, 1)" />
                  </button>
                </td>
                <td>{product.id}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.name}</td>
              </tr>
            ))
          ) : (
            data.data.data.map((product) => (
              <tr key={product.id}>
                <td>
                  <button onClick={() => deleteHandler(product.id)}>
                    <BsTrash size={20} color="rgba(244, 63, 94, 1)" />
                  </button>
                  <button onClick={() => editHandler(product)}>
                    <FaRegPenToSquare size={20} color="rgba(74, 222, 128, 1)" />
                  </button>
                </td>
                <td>{product.id}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.name}</td>
              </tr>
            ))
          )}
        </table>
      </div>
    </div>
  );
}

export default ProductsList;
