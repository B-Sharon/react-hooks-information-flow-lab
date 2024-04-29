import React from "react"

const Filter =({filter, onCategoryChange}) => {
    return(
        <div>
            <select value={filter} onChange={onCategoryChange}>
                <option value="All">All</option>
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Dessert">Dessert</option>
            </select>
        </div>
    )
}

export default Filter;