import React from 'react'
import './Content.css'

export default function Content() {

  const content_repo_data = [
    1,2,3,4,5
  ]

  const content_repo = content_repo_data.map(item => {
    return <Content></Content>
  })

  return (
    <div className="content">
        <div className="content-section">
            <div className="content-section-grid">
                <div className="content-section-grid-item"></div>
                <div className="content-section-grid-item"></div>
                <div className="content-section-grid-item"></div>
                <div className="content-section-grid-item"></div>
                <div className="content-section-grid-item"></div>
            </div>
        </div>
    </div>
  )
}
