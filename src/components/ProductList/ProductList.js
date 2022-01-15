import styles from './ProductList.module.scss'
import ProductCard from '../ProductCard/ProductCard'

const ProductList = ({ items }) => {
  return (
    <div className={styles.itemsContainer}>
      {items.map(item => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  )
}

export default ProductList
