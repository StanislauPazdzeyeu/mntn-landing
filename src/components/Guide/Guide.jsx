import GuideItem from "../GuideItem/GuideItem";
import style from "./style.module.scss";
import img01 from './assets/01.svg';
import img02 from './assets/02.svg';
import img03 from './assets/03.svg';

const guideItems = [
  { id: 1, title: 'Get Started', image: img01, annotation: 'What level of hiker are you?', description: 'Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?' },
  { id: 2, title: 'Hiking Essentials', image: img02, annotation: 'Picking the right Hiking Gear!', description: 'The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.' },
  { id: 3, title: 'Where you go is the key', image: img03, annotation: 'Understand Your Map & Timing', description: 'To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.' }
]

function Guide() {
  return (
    <>
      <div className={style['guide-content-list']}>
        {
          guideItems.map((item) => <GuideItem key={item.id} item={item}></GuideItem>)
        }
      </div>
    </>
  );
}

export default Guide;
