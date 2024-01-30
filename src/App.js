import './App.css';
import {Routes, Route} from 'react-router-dom'
import BlogMain from './pages/main/BlogMain'
import Login from './pages/login/Login'
import Header from './components/main/Header'
import MainPostingCard from './components/main/MainPostingCard'
import PostingDetail from './pages/posting/PostingDetail'


const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<BlogMain/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/postingNew' element={<MainPostingCard/>}/>
        <Route path='/blogs/:blogId/postings/:postingId' element={<PostingDetail/>}/>
      </Routes>
    </>
  );
}

export default App;
