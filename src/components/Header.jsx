import "../assets/scss/Header.scss";

export default function Header() {
  return (
    <header className="header">
      <h1 className="heading-primary">Todo</h1>
      <button className="btn-theme">
        <img src="src\assets\images\icon-sun.svg" alt="Dark theme button" />
      </button>
    </header>
  );
}
