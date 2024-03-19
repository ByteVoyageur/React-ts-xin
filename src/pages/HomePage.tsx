import React from 'react'
import { Link } from 'react-router-dom'
import MainBanner from '../components/MainBanner'
import { Home2IconWrapper } from '../elements/JsonData'
import { IMAGES } from '../constent/theme'
import { useEffect } from 'react'

const HomePage = () => {
  useEffect(() => {
    document.body.setAttribute('data-color', 'color_2')
  }, [])
  return (
    <div className='page-content bg-white'>
      <MainBanner />
      <section className='content-inner bg-white'>
        <div className='container'>
          <div className='row icon-wrapper2 gx-lg-5'>
            {Home2IconWrapper.map(({ icon, title }, ind) => (
              <div className='col-lg-4 col-md-6 m-b30 wow fadeInUp' key={ind}>
                <div className='icon-bx-wraper style-2'>
                  <div className='icon-bx radius'>
                    <span className='icon-cell'>
                      <i className={icon}></i>
                    </span>
                  </div>
                  <div className='icon-content'>
                    <h5 className='dz-title'>
                      <Link to='/services'>{title}</Link>
                    </h5>
                    <p>lorem ipsum dolor shit amet lorem ipsum</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='content-inner-2 overflow-hidden'>
        <div className='container'>
          <div className='section-head text-center'>
            <h2 className='title wow flipInX'>Customer's Comment</h2>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
