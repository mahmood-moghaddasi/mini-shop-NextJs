import React from "react";
import styles from "./DeleteModal.module.css";
import closeImage from "../public/static/Close-icon.svg";
import Image from "next/image";
import { useDeleteProduct } from "../services/mutations";
function DeleteModal({ setShowDeleteModal, deleteProductId }) {
  const { mutate } = useDeleteProduct();

  const deleteHandler = () => {
    mutate(deleteProductId, {
      onSuccess: () => {
        setShowDeleteModal(false);
      },
      onError: (error) => {
        console.log(error.response.data.message);
      },
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.logo}>
          <Image src={closeImage} alt="" />
        </div>
        <div className={styles.action}>
          <h3>آیا از حذف این محصول مطمئنید؟</h3>
          <div className={styles.buttons}>
            <button onClick={() => setShowDeleteModal(false)}>لغو</button>
            <button onClick={deleteHandler}>حذف</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
