import React from 'react'
import { useAppContext } from '../../context/appcontext'
import FormRow from '../../formrow'
import Wrapper from '../../wrappers'
import '../../index.css'
import FormSelect from '../../formSelect'

const SearchContainer = () => {
  const { isLoading, search, sort, sortOptions, handleChange, clearFilters } =
    useAppContext()
  const handleSearch = (e) => {
    if (isLoading) return
    handleChange({ name: e.target.name, value: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    clearFilters()
  }
  return (
    <Wrapper>
      <form className='form'>
        <h4>Search</h4>
        <div className='form-center'>
          <FormRow
            type='text'
            name='search'
            value={search}
            handleChange={handleSearch}
          />
          <FormSelect
            name='sort'
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            className='btn btn-block btn-danger'
            disabled={isLoading}
            onClick={handleSubmit}
          >
            Clear filter
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default SearchContainer
