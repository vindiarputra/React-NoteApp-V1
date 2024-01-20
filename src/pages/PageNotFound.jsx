import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <section className="error">
      <h2>404 - Page Not Found</h2>
      <p>
        Maaf, halaman yang Anda cari tidak ditemukan. Silakan kembali ke{" "}
        <Link to="/" style={{ color: "#3498db", textDecoration: "underline" }}>
          halaman utama
        </Link>
        .
      </p>
      <img src="https://i.ibb.co/2Pys4Gh/3814348-removebg-preview.png" alt="404 Illustration" style={{ maxWidth: "80%", height: "auto", marginTop: "20px" }} />
    </section>
  );
}

export default PageNotFound;
