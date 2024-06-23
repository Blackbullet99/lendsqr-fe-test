"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/asset/LendsqrLogo.svg";
import banner from "../../../public/asset/LoginBanner.svg";
import { Fieldset, TextInput } from "@mantine/core";
import styles from "./styles.module.scss";

const LoginPage = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className={styles.login}>
        <div className={styles.login__content}>
          <section className={styles.login__content__logo}>
            <Image src={logo} alt="logo" className={styles.login__logo} />
            <Image src={banner} alt="banner" />
          </section>
          <section className={styles.login__welcome}>
            <div className={styles.login__welcome__content}>
              <div className={styles.login__title}>
                <h1>Welcome !</h1>
                <p>Enter details to login</p>
              </div>
              <form className={styles.login__form}>
                <input name="email" type="text" placeholder="Email" />
                <div className={styles.form__password}>
                  <input
                    type={visible ? "text" : "password"}
                    placeholder="Password"
                  />
                  <span onClick={() => setVisible(!visible)}>
                    {visible ? "Hide" : "Show"}
                  </span>
                </div>
                <p>Forgot Password?</p>
                <button>LOG IN</button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
