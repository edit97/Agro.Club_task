import { useEffect, useState } from 'react'

import styles from './Filters.module.scss'
import { ReactComponent as FilterIcon } from '../../assets/images/icons/ic_filter.svg'

const Filters = ({ handleFilterUpdate, filter, categories }) => {
  const [selectedCategories, setSelectedCategories] = useState([])

  const toggleCategory = id => {
    if (selectedCategories.find(item => item === id)) {
      setSelectedCategories(selectedCategories.filter(item => item !== id))
    } else {
      setSelectedCategories([...selectedCategories, id])
    }
  }

  useEffect(() => {
    handleFilterUpdate({ category: selectedCategories })
  }, [selectedCategories])

  return (
    <div className={styles.filtersWrapper}>
      <div className={styles.filtersTitle}>
        <FilterIcon />
        Filters
      </div>
      <div className={styles.filtersContainer}>
        <div className={styles.categoriesContainer}>
          <span className={styles.containerTitle}>Category</span>
          <div className={styles.categoriesList}>
            <div
              className={`${styles.categoryItem} ${selectedCategories.length ? '' : styles.isActive}`}
              onClick={() => setSelectedCategories([])}
            >
              All
            </div>
            {!!categories.length &&
              categories?.map(item => {
                return (
                  <div
                    key={item.id}
                    className={`${styles.categoryItem} ${
                      selectedCategories.find(category => category === item.id) ? styles.isActive : ''
                    }`}
                    onClick={() => toggleCategory(item.id)}
                  >
                    {item.name}
                  </div>
                )
              })}
          </div>
        </div>
        <div className={styles.statusContainer}>
          <span className={styles.containerTitle}>Status</span>
          <div className={styles.checkboxContent}>
            <div className={styles.statusItem}>
              <input
                id="is_limited"
                type="checkbox"
                onChange={() => handleFilterUpdate({ isLimited: !filter.isLimited })}
                checked={filter.isLimited}
              />
              <span>Limited</span>
            </div>
            <div className={styles.statusItem}>
              <input
                id="is_new"
                type="checkbox"
                onChange={() => handleFilterUpdate({ isNew: !filter.isNew })}
                checked={filter.isNew}
              />
              <span>New</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filters
