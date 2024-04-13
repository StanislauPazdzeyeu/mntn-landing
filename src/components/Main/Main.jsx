import style from "./style.module.scss";

function Main() {
  return (
    <div className={style['main-wrapper']}>
      <div className={style['main-wrapper_contacts']}>
        <span className={style['main-wrapper_contacts_follow']}>Follow us</span>
        <span className={style['main-wrapper_contacts_instagram']}></span>
        <span className={style['main-wrapper_contacts_twitter']}></span>
      </div>
      <div className={style['main-wrapper_information']}>
        <div className={style['main-wrapper_information_guide']}>
        <div className={style['main-wrapper_information_guide_line']}></div>
          <p className={style['main-wrapper_information_guide_paragraph']}>A Hiking guide</p>
        </div>
        <h2 className={style['main-wrapper_information_promise']}>Be Prepared For The Mountains And Beyond!</h2>
        <div className={style['main-wrapper_information_scroll-down']}>
          <span className={style['main-wrapper_information_scroll-down_text']}>scroll down</span>
          <div className={style['main-wrapper_information_scroll-down_arrow']}></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
