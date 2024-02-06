import * as React from 'react';
import { useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Email({nextUnlock1, setNextUnlock1, emailPanel, setEmailPanel}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [chkPassword, setChkPassword] = useState('');
    const [confirmEmail, setConfirmEmail] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);
    const [helperTxt, setHelperTxt] = useState('');
    const [disabled, setDisabled] = useState(false);

    useEffect(()=>{
      setNextUnlock1(false);
    }, [])

    useEffect(()=>{
      if(disabled){
        setDisabled(false);
        setConfirmEmail(false);
      }
    }, [email])

    useEffect(()=>{
      if(chkPassword === ''){
        setHelperTxt('');
        setConfirmPassword(false);
      }
      else if(password !== chkPassword){
        setHelperTxt('입력한 비밀번호와 다릅니다. 비밀번호를 확인해주세요.');
        setConfirmPassword(false);
      }
      else if(password === chkPassword){
        setHelperTxt('비밀번호가 일치합니다.');
        setConfirmPassword(true);
      }
    }, [password, chkPassword])

    useEffect(()=>{
      if(confirmEmail && confirmPassword)
        setNextUnlock1(true);
      else
        setNextUnlock1(false);
    }, [confirmEmail, confirmPassword])

    const emailChk = () => {
        if(!emailRegCheck(email)){
            alert('email 형식이 아닙니다.\n이메일을 다시 기입해주세요.');
            setEmailPanel({key : 'email', value : ''});
        }
        else{
          setDisabled(true);
          setConfirmEmail(true);
          setEmailPanel([{key : 'Email', value : email}]);
        }
    }

    const emailRegCheck = (string) => {
        const reg =
            /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        return reg.test(string); //boolean
    };

    return (
        <React.Fragment>
          <Grid container spacing={3}>
            <Grid item xs={12} md={9}>
              <TextField
                required
                id="emailAddr"
                label="이메일"
                fullWidth
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
              />
            </Grid>
            <Grid item xs={12} md={3}>
                <Button variant="outlined" size="medium" onClick={()=>{emailChk()}} disabled={disabled}>
                이메일 확인
                </Button>
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                required
                id="ipt_password"
                label="비밀번호"
                fullWidth
                onChange={(e)=>{setPassword(e.target.value)}}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                required
                id="ipt_passwordChk"
                label="비밀번호 확인"
                helperText={helperTxt}
                fullWidth
                onChange={(e)=>{setChkPassword(e.target.value)}}
              />
            </Grid>
          </Grid>
        </React.Fragment>
    );
}