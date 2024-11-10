import React, { useState } from "react";
import styles from "./login.module.css";
import { setCookie } from "../../utils/cookie";
import { useLogin } from "../../services/mutations";
import { useRouter } from "next/router";
import Union from "../../public/static/Union-svg.svg";
import Image from "next/image";
function Login() {
  const [form, setForm] = useState({
    userName: "",
    password: "",
  });

  const router = useRouter();
  const { mutate } = useLogin();

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const { userName, password } = form;
    if (!userName || !password)
      return alert("User Name and Password is Necessary");

    mutate(form, {
      onSuccess: (data) => {
        console.log(data.data);
        setCookie("token", data.data?.token);
        router.push("/admin/products");
      },
      onError: (error) => console.log(error.response.data.message),
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.logo}>
          <Image src={Union} alt="" />
          <p>فرم ورود</p>
        </div>
        <form onSubmit={submitHandler}>
          <input
            onChange={changeHandler}
            name="userName"
            value={form.userName || ""}
            type="text"
            placeholder="نام کاربری"
          />
          <input
            onChange={changeHandler}
            name="password"
            value={form.password || ""}
            type="password"
            placeholder="رمز عبور"
          />

          <button type="submit">ورود</button>
        </form>
        <p className={styles.newUser} onClick={() => router.push("register")}>
          ایجاد حساب کاربری
        </p>
      </div>
    </div>
  );
}

export default Login;
