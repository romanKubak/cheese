
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import SvgIcon from '@mui/material/SvgIcon';

import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../../redux/actions/userAC';


import { useDispatch, useSelector } from 'react-redux';
// dispatch({type: 'SET_USER', payload: user})
export default function Header() {
  const user = useSelector(state => state.user);
  const score = useSelector(store => store.score)
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const logout = async () => {
    dispatch(logoutUser())
  }


  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

  return (


    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box
            sx={{
              '& > :not(style)': {
                m: 2,
              },
            }}
          >


            <HomeIcon fontSize="large" onClick={() => navigate('/')} />

          </Box>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Своя Игра
          </Typography>
          {user.email ?
            (
            <>
              <span style={{ marginRight: '20px', fontSize: '20px' }}>Счет : {score}</span>
              <Link to='/profile' type='button' style={{ marginRight: '20px' }} className="btn btn-primary">Профиль</Link>
              <button type='button' className="btn btn-primary" onClick={() => logout()}>Выйти</button>
            </>
            )
            :
            (<> 
              <Link to='/signup' type='button' style={{ marginRight: '20px' }} className="btn btn-primary">Регистрация</Link>
              <Link to='/signin' type='button' className="btn btn-primary">Войти</Link>
            </>)
          }

        </Toolbar>
      </AppBar>
    </Box>
  );
}


