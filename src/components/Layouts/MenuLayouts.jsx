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
