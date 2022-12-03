import React from 'react'
import { TECH_STACK_DATA } from '../../user'
import './Tech.css'

export default function ContentTech() {
  const tech_stack_items = TECH_STACK_DATA.map((item,index) => {
    return (
      <li key={index}><h2>{item.title}</h2></li>
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
