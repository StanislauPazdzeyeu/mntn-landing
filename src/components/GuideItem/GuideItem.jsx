import style from "./style.module.scss";
import PropTypes from 'prop-types';

GuideItem.propTypes = {
  item: PropTypes.node.isRequired,
};

function GuideItem({ item }) {
  return (
    <div className={style['guide-item']} style={{ flexDirection: item.id % 2 ? 'row' : 'row-reverse' }}>
      <div className={style['guide-item_wrapper']}>
        <div className={style['guide-item_wrapper_container']}>
          <div className={style['guide-item_wrapper_container_number']}>{String(item.id).padStart(2, '0')}</div>
          <div className={style['guide-item_wrapper_container_header']}>
            <div className={style['guide-item_wrapper_container_header_line']}></div>
            <p className={style['guide-item_wrapper_container_header_title']}>{item.title}</p>
          </div>
          <h1 className={style['guide-item_wrapper_container_annotation']}>{item.annotation}</h1>
          <p className={style['guide-item_wrapper_container_description']}>{item.description}</p>
        </div>
      </div>
      <div className={style['guide-item_image']} style={{ backgroundImage: `url(${item.image})` }} ></div>
    </div>

  );
}

export default GuideItem;
