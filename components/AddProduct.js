import React, { useState } from "react";
import styles from "./AddProduct.module.css";
import { useMutation } from "@tanstack/react-query";
import api from "../configs/api";
import { useCreateProduct } from "../services/mutations";
function AddProduct({ setShowAddProduct }) {
  const [product, setProduct] = useState({
    name: "",
    quantity: 0,
    price: 0,
  });

  const { mutate } = useCreateProduct();

  const changeHandler = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();

    if (!product.name || !product.quantity || !product.price)
      return alert("fill all of inputs");

    mutate(product, {
      onSuccess: (data) => {
        console.log(data);
        setShowAddProduct(false);
      },
      onError: (error) => {
        console.log(error.response.data.message);
      },
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h3>ایجاد محصول جدید</h3>

        <form onSubmit={submitHandler} className={styles.inputs}>
          <div>
            <label htmlFor="">نام کالا</label>
            <input
              onChange={changeHandler}
              name="name"
              type="text"
              value={product.name}
              placeholder="نام کالا"
            />
          </div>
          <div>
            <label htmlFor="">تعداد موجودی</label>
            <input
              onChange={changeHandler}
              name="quantity"
              type="number"
              value={product.quantity}
              placeholder="تعداد موجودی"
            />
          </div>
          <div>
            <label htmlFor="">قیمت</label>
            <input
              onChange={changeHandler}
              name="price"
              type="number"
              value={product.value}
              placeholder="قیمت"
            />
          </div>
          <div className={styles.buttons}>
            <button onClick={() => setShowAddProduct(false)}>انصراف</button>
            <button type="submit">ایجاد</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
