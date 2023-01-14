import styles from './styles.module.scss'

function BookCard ({ img, title, price }) {
  return (
    <>
      <div className={`card ${styles.card} mx-3`}>
        <div className={`card-body `}>
          <img className={`card ${styles.pictr}`} src={img}></img>
          <p className='card-title'>{title}</p>
          <p>{price}</p>
        </div>
      </div>
    </>
  )
}

export default BookCard;
