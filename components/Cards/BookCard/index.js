import styles from './styles.module.scss';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

function BookCard ({ img, title, price }) {
  return (
    <div className={`card ${styles.bookCard} mx-3`}>
      <div className={styles.imageContainer}>
        <img src={img} className={styles.image}></img>
        <img src={img} className={styles.imageShadow}></img>
        <a href="#">Xem sản phẩm</a>
      </div>

      <div className={styles.foot}>
        <div className={styles.information}>
          <span className={styles.title}>{ title }</span>
          <span className={styles.price}>{ price } đ</span>
        </div>
        <div className={styles.action}>
          <HiOutlineArrowNarrowRight className={styles.icon}/>
        </div>
      </div>
    </div>
  )
}

export default BookCard;
