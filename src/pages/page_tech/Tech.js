import React from 'react'
import { TECH_STACK_ITEMS_DATA, COLOR_PALATTE } from './dat_tech_stack'

export default function ContentTech() {
  const tech_stack_items = TECH_STACK_ITEMS_DATA.map((item,index) => {
    return (
      <li key={index}>{item.title}</li>
    )
  })

  return (
    <div className='ct-tech'>
      <ul>
        {tech_stack_items}
      </ul>
    </div>
  )
}
