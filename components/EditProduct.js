import React, { useState } from "react";
import styles from "./EditProduct.module.css";
import { useMutation } from "@tanstack/react-query";
import api from "../configs/api";
import { useEditHandler } from "../services/mutations";
function EditProduct({ setShowEditProduct, productToEdit }) {
  const [form, setForm] = useState(productToEdit);
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const { mutate } = useEditHandler();
  const submitHandler = (event) => {
    event.preventDefault();
    mutate(form, {
      onSuccess: (data) => {
        console.log(data);
        setShowEditProduct(false);
      },
      onError: (error) => {
        console.log(error.response.data.message);
      },
    });
  };
  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.form}>
        <h3>ویرایش اطلاعات</h3>

        <div className={styles.inputs}>
          <div>
            <label htmlFor="">نام کالا</label>
            <input
              name="name"
              onChange={changeHandler}
              type="text"
              value={form.name}
              placeholder="نام کالا"
            />
          </div>
          <div>
            <label htmlFor="">تعداد موجودی</label>
            <input
              name="quantity"
              onChange={changeHandler}
              type="text"
              value={form.quantity}
              placeholder="تعداد موجودی"
            />
          </div>
          <div>
            <label htmlFor="">قیمت</label>
            <input
              name="price"
              onChange={changeHandler}
              type="text"
              value={form.price}
              placeholder="قیمت"
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <button onClick={() => setShowEditProduct(false)}>انصراف</button>
          <button type="submit">ثبت اطلاعات جدید</button>
        </div>
      </form>
    </div>
  );
}

export default EditProduct;
