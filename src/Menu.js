const Menu = ({ state }) => {
  return (
    <main className="menu-container">
      {state.map((item) => {
        const { id, title, price, img, desc } = item;
        return (
          <article className="menu" key={id}>
            <img src={img} alt="" />
            <div className="menu-details">
              <header className="menu-header">
                <h3>{title}</h3>
                <h3 className="price">${price}</h3>
              </header>
              <p>{desc}</p>
            </div>
          </article>
        );
      })}
    </main>
  );
};

export default Menu;
