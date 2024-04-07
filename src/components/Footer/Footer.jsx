import style from "./style.module.scss";

function Footer() {
  return (
    <>
      <div className={style['footer-wrapper']}>
        <div className={style['footer-wrapper_information-block']}>
          <span className={style['footer-wrapper_information-block_app-title']}>MNTN</span>
          <p className={style['footer-wrapper_information-block_motivation']}>
            Get out there & discover your next <br />
            slope, mountain & destination!
          </p>
          <span className={style['footer-wrapper_information-block_copyright']}>Copyright 2023 MNTN, Inc. Terms & Privacy</span>
        </div>
        <div className={style['footer-wrapper_blog-block']}>
          <span className={style['footer-wrapper_mntn-block_title']}>More on The Blog</span>
          <ul className={style['footer-wrapper_mntn-block_navigation']}>
            <li className={style['footer-wrapper_mntn-block_navigation_item']}>
              <a href="#" className="menu-link">About MNTN</a>
            </li>
            <li className={style['footer-wrapper_mntn-block_navigation_item']}>
              <a href="#" className="menu-link">Contributors & Writers</a>
            </li>
            <li className={style['footer-wrapper_mntn-block_navigation_item']}>
              <a href="#" className="menu-link">Write For Us</a>
            </li>
            <li className={style['footer-wrapper_mntn-block_navigation_item']}>
              <a href="#" className="menu-link">Contact Us</a>
            </li>
            <li className={style['footer-wrapper_mntn-block_navigation_item']}>
              <a href="#" className="menu-link">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className={style['footer-wrapper_mntn-block']}>
          <span className={style['footer-wrapper_mntn-block_title']}>More on MNTN</span>
          <ul className={style['footer-wrapper_mntn-block_navigation']}>
            <li className={style['footer-wrapper_mntn-block_navigation_item']}>
              <a href="#" className="menu-link">The Team</a>
            </li>
            <li className={style['footer-wrapper_mntn-block_navigation_item']}>
              <a href="#" className="menu-link">Jobs</a>
            </li>
            <li className={style['footer-wrapper_mntn-block_navigation_item']}>
              <a href="#" className="menu-link">Press</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
