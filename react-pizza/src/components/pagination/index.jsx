import React from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch} from 'react-redux'
import styles from './Pagination.module.scss'
import {setCurrentPage }from '../redux/slices/filterSlice'
const Pagination = () => {
  const dispath = useDispatch();
	return (
		<ReactPaginate
			className={styles.root}
			breakLabel='...'
			nextLabel='>'
			onPageChange={event => dispath(setCurrentPage(event.selected+1))}
			pageRangeDisplayed={4}
			pageCount={3}
			previousLabel='<'
			renderOnZeroPageCount={null}
		/>
	)
}

export default Pagination
