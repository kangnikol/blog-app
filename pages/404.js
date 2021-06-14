import Link from "next/link";

const notFound = () => {
  return (
    <div className="notFound container">
      <h1>Maaf...</h1>
      <h3>Halaman yang anda cari tidak dapat ditemukan :(</h3>
      <Link href="/">
        <a>Kembali ke beranda</a>
      </Link>
    </div>
  );
};

export default notFound;
