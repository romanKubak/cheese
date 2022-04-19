
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../../redux/actions/userAC';

//? корзина со счетчиком------------------------------------------------------------------------------
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 2,
    padding: '0 4px',
    backgroundColor: "#fc7272",
    color: "black"
  },
}));
//?---------------------------------------------------------------------------------------------------

// dispatch({type: 'SET_USER', payload: user})
export default function Header() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const cart = useSelector(state => state.cart)


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

  return (


    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'rgba(25, 25, 25, 1)', boxShadow: 'none'}}>
        <Toolbar className={styles.Toolbar}>
          <Box
            sx={{
              '& > :not(style)': {
                m: 2,
                
              },
            }}
          > 


            {/* <HomeIcon onClick={() => navigate('/')} /> */}


          <Typography className={styles.logo_header} variant="h6" component="div" sx={{ flexGrow: 1, width:'200px', height:'26px',fontWeight:'bold',color: 'rgba(243, 243, 243, 1)'}} onClick={() => redir()}>
            КОМИКСИОНКА
          </Typography>
           </Box>
              <div className={styles.container}>
          {user.email ?
            (
              <div className={styles.userInfo}>
                <div style={{ color: 'white' }}>Привет {user.name}</div>

                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={cart.length} color="secondary">
                    <ShoppingCartIcon type='button' style={{ marginRight: '0px',marginLeft: '20px', color: 'white' }} onClick={() => navigate(`/cart/${user.id}`)}/>
                  </StyledBadge>
                </IconButton>

                {/* <ShoppingCartIcon type='button' style={{ marginRight: '20px',marginLeft: '20px' }} onClick={() => navigate(`/cart/${user.id}`)} /> */}



                <PersonIcon type='button' style={{ marginLeft: '20px', marginRight: '20px' }} onClick={() => profile()} />
                <LogoutIcon type='button' onClick={() => logout()} />
              </div>
            )
            :
            (<>
              <Link to='/signup' type='button' style={{ marginRight: '20px' }} className={styles.btn_header}>Регистрация</Link>
              <Link to='/signin' type='button' style={{marginRight: '76px'}} className={styles.btn_header}>Войти</Link>
            </>)
          }
          </div>

        </Toolbar>
      </AppBar>
    </Box>
  );
}


