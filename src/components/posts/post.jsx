import React from 'react'
import marked from 'marked'

import Loader from './../elements/loader.jsx'
import Hero from './../elements/hero.jsx'

function Post(props) {
  const {post} = props
  if (!post) {
    return <Loader />
  }
  const {markdown, title, image} = post
  const body = markdown ? <div className='static' dangerouslySetInnerHTML={{__html: marked(markdown)}}/> : null
  return (
    <div>
      <Hero
        title={ title }
        image={ image }
      />
      { body }
    </div>
  )
}

export default Post