import Meals from '@/components/Meals'
import React from 'react'

const mealsPage = () => {
  return (
    <div className='p-12'>
      <h1 className='text-3xl font-semibold'>Choose your meals</h1>
      <p>Choose meal of you choice by searching...... </p>
      <Meals/>
    </div>
  )
}

export default mealsPage
