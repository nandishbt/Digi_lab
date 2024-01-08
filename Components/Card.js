import React from 'react'

const Card = ({Headline,text1,text2,text3,text4}) => {
  return (
    <div>
        <h1 className='text-xl font-semibold mb-3'>{Headline}</h1>
        <h1 className='mb-2 font-medium'>{text1}</h1>
        <h1 className='mb-2 font-medium'>{text2}</h1>
        <h1 className='mb-2 font-medium'>{text3}</h1>
        <h1 className='mb-2 font-medium'>{text4}</h1>
    </div>
  )
}

export default Card