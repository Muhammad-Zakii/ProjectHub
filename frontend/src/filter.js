import React from 'react'
import { datas } from './data'
import { useState } from 'react'
import './index.css'

function Filter() {
  const [data, setData] = useState(datas)
  const filterItems = (cate) => {
    const reccategory = datas.filter((currentCategory) => {
      return currentCategory.category === cate
    })
    setData(reccategory)
  }
  return (
    <>
      <div className='cen'>
        <h4>Browese latest businesses,projects and websites,domains</h4>
        <p>
          You can find here selling webistes domains,projects and other online
          businesses
        </p>
      </div>

      <div class='container'>
        <nav className='fo'>
          <button
            className='btn btn-outline-secondary fo'
            onClick={() => filterItems('WEBSITE')}
            href=''
          >
            Websites
          </button>
          <button
            className='btn btn-outline-secondary fo'
            onClick={() => filterItems('Andriod app')}
            href=''
          >
            Andriod apps
          </button>
          <button
            className='btn btn-outline-secondary fo'
            onClick={() => filterItems('iOS app')}
            href=''
          >
            iOS apps
          </button>
          <button
            className='btn btn-outline-secondary fo'
            onClick={() => filterItems('DOMAIN')}
            href=''
          >
            Domains
          </button>
          <button
            className='btn btn-outline-secondary fo'
            onClick={() => filterItems('PROJECT')}
            href=''
          >
            Projects
          </button>
          <button
            className='btn btn-outline-secondary fo'
            onClick={() => setData(datas)}
            href=''
          >
            All
          </button>
        </nav>
      </div>
    </>
  )
}

export default Filter
