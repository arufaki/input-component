import Footer from "../Fragments/Footer";
import Navbar from "../Fragments/Navbar";

function MenuLayouts({ children }) {
  return (
    <>
      <main className="menu-master mb-6">
        <section className="px-11 ml-60">{children}</section>
      </main>
    </>
  );
}

export default MenuLayouts;
