import * as React from 'react';
import {useState, useEffect} from 'react';
import { Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {

  const location = useLocation();
  const [loginBtn, setLoginBtn] = useState('로그인');
  const [headerBtn, setHeaderBtn] = useState('회원가입');
  const navigate = useNavigate();

  useEffect(() => {
    if(location.state !== undefined && location.state !== null){
      setLoginBtn(location.state.loginRtn && location.state.loginRtn === 'true' ? '로그아웃' : '로그인');
      setHeaderBtn(location.state.loginRtn && location.state.loginRtn === 'true' ? '새글 작성' : '회원가입');
    }
  }, [location])

  /*if(location.state !== undefined && location.state !== null){
    console.log(location.state);
    let btnVal = location.state.loginRtn && location.state.loginRtn === 'true' ? '새글 작성' : '로그인';
  }*/

  const clickLoginBtn = () => {
    if(loginBtn === '로그아웃'){
      navigate('/');
      setLoginBtn('로그인');
      setHeaderBtn('회원가입');
      localStorage.removeItem('userInfo');
    }
    else
      navigate('/login');
  };

  const clickHeaderBtn = () => {
    if(headerBtn === '새글 작성')
      navigate('/postingNew');
    else
      navigate('/Join');
  }

  return (
        <div style={{display:'flex', justifyContent:'space-between', padding: '10px'}}>
          <div style={{fontWeight: 'bold', fontSize:'25px'}} onClick={()=> navigate('/')}>Ethan's Page</div>
          <div>
            <Button onClick={() => clickHeaderBtn()}>{headerBtn}</Button>
            <Button onClick={() => clickLoginBtn()}>{loginBtn}</Button>
          </div>
        </div>
  );
}

export default Header;