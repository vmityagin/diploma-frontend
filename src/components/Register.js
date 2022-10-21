import React from "react";
import Header from "./Header";
import Footer from './Footer';

function Register() {

  return (
    <section className="auth">
      <Header linkName="Вход" userLogin="" link="/signin" />
      <Footer />
    </section>
  );
}

export default Register;
