import React from 'react'

const CategoriesDetailsPage = ({params}) => {
    if(params.features.length == 3)
        return <div>{params.features[2]}</div>
    if(params.features.length == 2)
        return <div>{params.features[1]}</div>
  return (
    <div className='h-screen'>
      categories detail page
    </div>
  )
}

export default CategoriesDetailsPage
