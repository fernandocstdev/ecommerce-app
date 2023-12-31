import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'

export function Filters() {
	const { filters, setFilters } = useFilters()

	const minPriceFilterId = useId()
	const categoryFilterId = useId()

	const handleChangeMinPrice = (event) => {
		setFilters(prevState => ({
			...prevState,
			minPrice: event.target.value
		}))
	}

	const handleChangeCategory = (event) => {
		setFilters(prevState => ({
			...prevState,
			category: event.target.value
		}))
	}

	return (
		<section>
			<div>
				<label htmlFor={minPriceFilterId}>Price</label>
				<input type="range" name="price" id={minPriceFilterId} min="0" max="1000" onChange={handleChangeMinPrice} value={filters.minPrice} />
				<span>{filters.minPrice}</span>
			</div>
			<div>
				<label htmlFor={categoryFilterId}>Categoria</label>
				<select name="category" id={categoryFilterId} onChange={handleChangeCategory}>
					<option value="all">Todas</option>
					<option value="laptops">Laptops</option>
					<option value="smartphones">Celulares</option>
				</select>
			</div>
		</section>
	)
}
