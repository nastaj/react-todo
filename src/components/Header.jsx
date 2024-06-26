import "../assets/scss/Header.scss";

export default function Header({ toggleTheme, theme }) {
  return (
    <header className="header">
      <h1 className="heading-primary">Todo</h1>
      <button type="button" className="btn-theme" onClick={toggleTheme}>
        <img
          src={
            theme === "dark"
              ? "./images/icon-sun.svg"
              : "./images/icon-moon.svg"
          }
          alt={`${theme} theme button`}
        />
      </button>
    </header>
  );
}
