import React from 'react'
import { fetchData } from '../../fetch/fetch'
import './Content.css'
import RepoItem from './RepoItem'

export default function Content() {

  const content_repo_data = [
    1,2,3,4,5
  ]

  let data = fetchData()
  console.log(data)

  const content_repo = content_repo_data.map(item => {
    return <RepoItem key={item} id={item}></RepoItem>
  })

  return (
    <div className="content">
        <div className="content-section">
            <div className="content-section-grid">
                {content_repo}
            </div>
        </div>
    </div>
  )
}
