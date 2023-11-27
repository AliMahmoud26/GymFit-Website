import React from 'react'

const JoinUs = () => {
  return (
    <section className='join' id='join-us'>
      {/* Creating the left join component */}
      <div className="left-join">
        <hr />
        <div>
          <span className='stroke-text'>READY TO </span>
          <span>LEVEL UP </span>
        </div>

        <div>
          <span>YOUR BODY </span>
          <span className='stroke-text'>WITH US</span>
        </div>
      </div>

      {/* Creating the right join component */}
      <div className="right-join">
        <form action="" className='email-container'>
          <input type="email" name="user_email" placeholder='Enter Your Email Address' />
          <button className='btn join-btn'>Join Now</button>
        </form>
      </div>
    </section>
  )
}

export default JoinUs