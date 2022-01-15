import { useEffect, useState } from 'react'
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import { useProductList } from './useProductList'
import { useCategoryList } from './useCategoryList'

import styles from './Products.module.scss'
import { ReactComponent as SearchIcon } from '../../assets/images/icons/ic_search.svg'

import ProductList from '../ProductList/ProductList'
import Filters from '../Filters/Filters'

const Products = () => {
  const [search, setSearch] = useState('')
  const { filter, status, items, updateFilter } = useProductList()
  const categories = useCategoryList()

  useEffect(() => {
    if (status === 'error') {
      store.addNotification({
        title: 'Bad Request',
        message: 'Something went wrong!',
        type: 'danger',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      })
    }
  }, [status])

  const handleFilterUpdate = filters => updateFilter({ ...filters })

  const getSearchValue = ({ target }) => {
    setSearch(target.value)
  }

  return (
    <div className={styles.root}>
      <ReactNotification />
      <div className={styles.productsHeader}>
        <h2 className={styles.productsTitle}>Products</h2>
        <div className={styles.searchInputWrapper}>
          <SearchIcon className={styles.searchIcon} onClick={() => handleFilterUpdate({ search })} />
          <input
            type="text"
            value={search}
            onChange={getSearchValue}
            onKeyDown={e => {
              e.key === 'Enter' && handleFilterUpdate({ search })
            }}
            placeholder={'Search among products'}
            className={styles.searchInput}
          />
        </div>
      </div>
      <Filters filter={filter} status={status} categories={categories} handleFilterUpdate={handleFilterUpdate} />
      <ProductList items={items} />
    </div>
  )
}

export default Products
