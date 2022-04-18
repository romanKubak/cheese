
import { Link } from 'react-router-dom';
import styles from './styles.module.css'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import SvgIcon from '@mui/material/SvgIcon';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../../redux/actions/userAC';


import { useDispatch, useSelector } from 'react-redux';
// dispatch({type: 'SET_USER', payload: user})
export default function Header() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const logout = async () => {
    dispatch(logoutUser())
    navigate('/main')
  }

  const profile = () => {
    navigate(`/profile/${user.id}`)
  }
  const redir = () => { 
    navigate(`/main`)
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
      <AppBar position="static" style={{backgroundColor:'rgba(25, 25, 25, 1)'}}>
        <Toolbar className={styles.Toolbar}>
          <Box
            sx={{
              '& > :not(style)': {
                m: 2,
                
              },
            }}
          > 


            {/* <HomeIcon onClick={() => navigate('/')} /> */}


          <Typography variant="h6" component="div" sx={{ flexGrow: 1, width:'200px', height:'26px',fontWeight:'bold',color: 'rgba(243, 243, 243, 1)'}} onClick={() => redir()}>
            КОМИКСИОНКА
          </Typography>
           </Box>
              <div className={styles.container}>
          {user.email ?
            (
              <div className={styles.userInfo}>
                <div style={{ color: 'white' }}>Привет {user.name}</div>


                <ShoppingCartIcon type='button' style={{ marginRight: '20px',marginLeft: '20px' }} onClick={() => navigate(`/cart/${user.id}`)} />



                <PersonIcon type='button' style={{ marginRight: '20px' }} onClick={() => profile()} />
                <LogoutIcon type='button' onClick={() => logout()} />
              </div>
            )
            :
            (<>
              <Link to='/signup' type='button' style={{ marginRight: '20px' }} className="btn btn-primary">Регистрация</Link>
              <Link to='/signin' type='button' className="btn btn-primary">Войти</Link>
            </>)
          }
          </div>

        </Toolbar>
      </AppBar>
    </Box>
  );
}


