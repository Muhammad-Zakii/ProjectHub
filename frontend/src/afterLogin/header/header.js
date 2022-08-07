import { Link } from 'react-router-dom'
import '../../index.css'

const Head = () => {
  return (
    <div className='clas1'>
      <h2 style={{ position: 'relative', top: '-40px' }}>ProjectHub</h2>
      <Link to='/sellnow'>
        <button className='bt2'>Sell Now</button>
      </Link>
      <div className='pa'>
        <span style={{ fontSize: '70px' }}>
          A great marketplace
          <br /> to buy and sell
        </span>
        <p className='para'>
          Buy an online businesses,websites,domains,projects
        </p>
      </div>
      <div className='searbar'>
        <form action='/' method='get'>
          <label htmlFor='header-search'>
            <span className='visually-hidden'>Search blog posts</span>
          </label>
          <div>
            <input
              type='text'
              id='header-search'
              placeholder=' Search websites domains etc'
              name='search'
              className='searbar'
            />
            <button className='bt' type='submit'>
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Head
