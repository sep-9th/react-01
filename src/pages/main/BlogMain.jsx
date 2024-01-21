import * as React from 'react';
import PostingCard from '../../components/main/PostingCard';
import {data} from '../../data.js'

const BlogMain = () => {
    return(
        <div className='blogMain'>
            {data.map(posting =>
      
            <PostingCard className='postingCard' key={posting.postingID} arr={posting}/>
            )}
        </div>
    )
}

export default BlogMain