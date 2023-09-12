import React from 'react'
import {useWhyDidYouUpdate} from "ahooks";

function Catagories({value, onClickCategory}) {
	useWhyDidYouUpdate('Catagories', {value, onClickCategory})
	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	]
	return (
		<div className='categories'>
			<ul>
				{categories.map((el, index) => {
					return (
						<li key={index}
							onClick={() => onClickCategory(index)}
							className={value === index ? 'active' : ''}
						>
						{el}
						</li>
					)
				})}
			</ul>
		</div>
	)
}
export default Catagories

