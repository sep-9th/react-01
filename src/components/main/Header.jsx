import * as React from 'react';
import {useState, useEffect} from 'react';
import { Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';


const Header = () => {

  const location = useLocation();
  const [button, setButton] = useState('로그인');
  const navigate = useNavigate();

  useEffect(() => {
    if(location.state !== undefined && location.state !== null)
      setButton(location.state.loginRtn && location.state.loginRtn === 'true' ? '새글 작성' : '로그인');
  }, [location])

  /*if(location.state !== undefined && location.state !== null){
    console.log(location.state);
    let btnVal = location.state.loginRtn && location.state.loginRtn === 'true' ? '새글 작성' : '로그인';
  }*/

  const clickHeaderBtn = () => {
    if(button === '새글 작성')
      navigate('/postingNew');
    else
    navigate('/login');
  };

  return (
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <div style={{fontWeight: 'bold', fontSize:'25px'}} onClick={()=> navigate('/')}>Ethan's Page</div>
          <div>
              <Button onClick={() => clickHeaderBtn()}>{button}</Button>
          </div>
        </div>
  );
}

export default Header;