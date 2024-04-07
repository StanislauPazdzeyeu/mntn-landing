import style from "./style.module.scss";

function Guide() {
  return (
    <>
      <div className={style['guide-content']}>
        <div className={style['guide-content_wrapper']}>
          <div className={style['guide-content_wrapper_header']}>
            <div className={style['guide-content_wrapper_header_number']}>01</div>
            <hr />
            <p className={style['guide-content_wrapper_header_text']}>Get Started</p>
          </div>
          <h1 className={style['guide-content_wrapper_title']}>What level of hiker are you?</h1>
          <p className={style['guide-content_wrapper_information']}>
            Determining what level of hiker you are can be an important tool
            when planning future hikes. This hiking level guide will help you
            plan hikes according to different hike ratings set by various
            websites like All Trails and Modern Hiker. What type of hiker are
            you – novice, moderate, advanced moderate, expert, or expert
            backpacker?
          </p>
        </div>
        <div className={style['guide-content_image']}></div>
      </div>

      <div className={style['guide-content']}>
        <div className={style['guide-content_wrapper']}>
          <div className={style['guide-content_wrapper_header']}>
            <div className={style['guide-content_wrapper_header_number']}>02</div>
            <hr />
            <p className={style['guide-content_wrapper_header_text']}>Hiking Essentials</p>
          </div>
          <h1 className={style['guide-content_wrapper_title']}>Picking the right Hiking Gear!</h1>
          <p className={style['guide-content_wrapper_information']}>
            The nice thing about beginning hiking is that you don’t really need
            any special gear, you can probably get away with things you already
            have. Let’s start with clothing. A typical mistake hiking beginners
            make is wearing jeans and regular clothes, which will get heavy and
            chafe wif they get sweaty or wet.
          </p>
        </div>
        <div className={style['guide-content_image']}></div>
      </div>

      <div className={style['guide-content']}>
        <div className={style['guide-content_wrapper']}>
          <div className={style['guide-content_wrapper_header']}>
            <div className={style['guide-content_wrapper_header_number']}>03</div>
            <hr />
            <p className={style['guide-content_wrapper_header_text']}>Where you go is the key</p>
          </div>
          <h1 className={style['guide-content_wrapper_title']}>Understand Your Map & Timing</h1>
          <p className={style['guide-content_wrapper_information']}>
            To start, print out the hiking guide and map. If it’s raining, throw
            them in a Zip-Lock bag. Read over the guide, study the map, and have
            a good idea of what to expect. I like to know what my next landmark
            is as I hike. For example, I’ll read the guide and know that say, in
            a mile, I make a right turn at the junction..
          </p>
        </div>
        <div className={style['guide-content_image']}></div>
      </div>
    </>
  );
}

export default Guide;