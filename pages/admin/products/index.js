import React, { useState } from "react";
import PanelHeader from "../components/PanelHeader";
import styles from "./AdminPanelPage.module.css";
import ProductsList from "../components/ProductsList";
import AddProduct from "../components/AddProduct";
import EditProduct from "../components/EditProduct";
import DeleteModal from "../components/DeleteModal";
import Pagination from "../components/Pagination";
function AdminPanelPage() {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showEditProduct, setShowEditProduct] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState("");
  const [productToEdit, setProductToEdit] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  return (
    <div className={styles.container}>
      <PanelHeader searchValue={searchValue} setSearchValue={setSearchValue} />
      <ProductsList
        setShowAddProduct={setShowAddProduct}
        setShowEditProduct={setShowEditProduct}
        setShowDeleteModal={setShowDeleteModal}
        setDeleteProductId={setDeleteProductId}
        setProductToEdit={setProductToEdit}
        searchValue={searchValue}
        page={page}
        setTotalPages={setTotalPages}
      />
      {showAddProduct && <AddProduct setShowAddProduct={setShowAddProduct} />}
      {showEditProduct && (
        <EditProduct
          setShowEditProduct={setShowEditProduct}
          productToEdit={productToEdit}
        />
      )}
      {showDeleteModal && (
        <DeleteModal
          setShowDeleteModal={setShowDeleteModal}
          deleteProductId={deleteProductId}
        />
      )}
      <Pagination setPage={setPage} page={page} totalPages={totalPages} />
    </div>
  );
}

export default AdminPanelPage;
