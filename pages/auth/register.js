import React, { useState } from "react";
import styles from "./register.module.css";

import { useRegister } from "../../services/mutations";
import { useRouter } from "next/router";
function Registration() {
  const [form, setForm] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const { mutate } = useRegister();
  const router = useRouter();
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const { userName, password, confirmPassword } = form;
    if (!userName || !password)
      return alert("User Name and Password is Requaired");
    if (password !== confirmPassword) return alert("Passwords Isn't The Same!");

    mutate(
      { userName, password },
      {
        onSuccess: (data) => {
          console.log(data.data.message);
          router.push("/login");
        },
        onError: (error) => {
          console.log(error.response.data.message);
        },
      }
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.logo}>
          <img src="../../public/Union-svg.svg" alt="" />
          <p>فرم ثبت نام</p>
        </div>
        <form onSubmit={submitHandler}>
          <input
            onChange={changeHandler}
            type="text"
            value={form.userName}
            name="userName"
            placeholder="نام کاربری"
          />
          <input
            onChange={changeHandler}
            type="text"
            value={form.password}
            name="password"
            placeholder="رمز عبور"
          />
          <input
            onChange={changeHandler}
            type="text"
            value={form.confirmPassword}
            name="confirmPassword"
            placeholder="تکرار رمز عبور"
          />
          <button type="submit">ثبت نام</button>
        </form>
        <p className={styles.newUser} onClick={() => router.push("login")}>
          حساب کاربری دارید؟
        </p>
      </div>
    </div>
  );
}

export default Registration;
