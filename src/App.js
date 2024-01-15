import './App.css';
import PostingCard from "./components/main/PostingCard";
import {data} from './data'

function App() {
  return (
    <>
     {data.map(posting =>
      
      <PostingCard className='postingCard' key={posting.postingID} arr={posting}/>
      )};
    </>
  );
}

export default App;
