import * as React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import '@toast-ui/editor/dist/toastui-editor.css'
import { Viewer } from '@toast-ui/react-editor';

const PostingDetail = ()=>{
    const [data, setData] = useState(null);

    let id = window.location.pathname.split('/');
    
    useEffect(()=>{
        axios.get(`http://localhost:4000/postingDetail?id=${id[2]}`).then((res)=>{
            if(res.status === 200){
                debugger;
                setData(res.data[0]);
            }
        })
    })

    return(
        <div>
            {!!data && <Viewer initialValue={data.htmlContent}/>}
        </div>
    )
}

export default PostingDetail