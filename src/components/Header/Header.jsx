import style from "./style.module.scss";

function Header() {
  return (
    <header className={style['header-wrapper']}>

      <h1 className={style['header-wrapper_title']}>MNTN</h1>
      <nav>
        <ul className={style['header-wrapper_navigation']}>
          <li className={style['header-wrapper_navigation_item']}>
            <a href="#" className="menu-link">Equipment</a>
          </li>
          <li className={style['header-wrapper_navigation_item']}>
            <a href="#" className="menu-link">About us</a>
          </li>
          <li className={style['header-wrapper_navigation_item']}>
            <a href="#" className="menu-link">Blog</a>
          </li>
        </ul>
      </nav>
    </header>

  );
}

export default Header;
