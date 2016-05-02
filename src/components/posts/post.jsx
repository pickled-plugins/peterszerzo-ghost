import React from 'react';
import marked from 'marked';

import Loader from '../elements/loader.jsx';
import Hero from '../hero/root.jsx';

export default function Post(props) {
  const {post} = props;
  console.log(post);
  if (!post) {
    return <Loader/>;
  }
  const {markdown, title, image, html} = post;
  const metaDescription = post.meta_description;
  const body = (markdown || html) ? <div className='static' dangerouslySetInnerHTML={{__html: html || marked(markdown)}}/> : null;
  return (
    <div>
      <Hero
        title={title}
        subtitle={metaDescription}
        image={image}
      />
      {body}
    </div>
  );
}
