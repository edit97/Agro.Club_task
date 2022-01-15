import styles from './ProductCard.module.scss'
import images from '../../assets/images'
const ProductCard = ({ item }) => {
  return (
    <div className={styles.productCardContainer}>
      <img src={images[item.categoryType]} className={styles.productImg} alt="" />
      <div className={styles.productContent}>
        <div className={styles.productCategoryWrapper}>
          <span className={styles.productCategory}>{item.categoryName}</span>
          <div className={styles.productStatusWrapper}>
            {item?.isLimited && <span className={styles.productIsLimited}>Limited</span>}
            {item?.isNew && <span className={styles.productIsNew}>New</span>}
          </div>
        </div>
        <div className={styles.productName}>{item.name}</div>
        <div className={styles.productDescription}>{item.description}</div>
        <div className={styles.priceWrapper}>
          <span className={styles.productPrice}>${item.price}</span>
          {!!item?.discount && <span className={styles.productDiscount}>{`Discount $${item.discount} per bag`}</span>}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
