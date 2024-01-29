import * as React from 'react';
import PostingCard from '../../components/main/PostingCard';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

const BlogMain = () => {
    const [data, setData] = useState([]);

    const handleScroll = () => {
        //끝까지 내리면 clientTop = 710, scollTop = 3087, scrollHeight = 3797;
        const clientHeight = document.documentElement.clientHeight;
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;

        if(scrollHeight -1 <= clientHeight + scrollTop)
            getPosting();
    };

    useEffect(() => {
        getPosting();
        axios.get('http://localhost:4000/homePostings')
        .then((response) => {
            if(response.status === 200)
                setData(response.data);
        });
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    const getPosting = () => {
        setData([...data, ...data]);
    };

    return(
        <div className='blogMain'>
            {data.map(posting =>
            <PostingCard className='postingCard' key={posting.postingID} arr={posting}/>
            )}
            {
            <Card sx={{ width: 340, m: 2 }}>
                <CardHeader
                    avatar={<Skeleton animation="wave" variant="circular" width={40} height={40} />}
                    title={<Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }}/>}
                    subheader={<Skeleton animation="wave" height={10} width="40%" />}
                />
                <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
                <CardContent>
                    <React.Fragment>
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} width="80%" />
                    </React.Fragment>
                </CardContent>
            </Card>}
        </div>
    )
}

export default BlogMain