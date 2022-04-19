import React, { useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import TestForm from '../TestForm/TestForm';

import styles from './style.module.css'
import MyOneProduct from '../MyOneProduct/MyOneProduct'

import {getCategories} from '../../redux/actions/categoriesAC'
import { allMyProducts } from '../../redux/actions/productAc'
import {getWatingList} from '../../redux/actions/cartAC'
import {getDoneList} from '../../redux/actions/cartAC'
import {getCart} from '../../redux/actions/cartAC'
import OneWaitingProduct from '../OneWaitingProduct/OneWaitingProduct';
import OneSendingProduct from '../OneSendingProduct/OneSendingProduct';
import Button from '@mui/material/Button';
//? dispach
import { getWatingListToSend } from '../../redux/actions/cartAC'
import { getDoneSendingProducts } from '../../redux/actions/cartAC'

//?accordion styles ------------------------------------------------------------------------------------------------------------------------
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import OneProductToSend from '../OneProductToSend/OneProductToSend';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid #191919`,
  '&:not(:last-child)': {
    borderBottom: 0,
    backgroundColor: '#474747',
    color: 'white'
  },
  '&:before': {
    display: 'none',
    backgroundColor: 'rgb(95 95 95)'
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? '#474747'
      : '#474747',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  color: 'white',
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid #191919',
  backgroundColor: '#474747',
  color: 'white',
}));

//? ---------------------------------------------------------------------------------------------------------------------------------------

function Profile() {
    
  const {id} = useParams()
  const user = useSelector(state => state.user);
  const myProduct = useSelector(state => state.myProduct)
  const myWaitingList = useSelector(state => state.waitingList)
  const myReceiptProducts = useSelector(state => state.receiptProducts)

  const productsToSend = useSelector(state => state.waitingListToSend)
  const doneSendingProducts = useSelector(state => state.doneSending)

  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false)
  
  useEffect(() => {
    
    if(user.id) {
      dispatch(getCategories())
      dispatch(getWatingList(id))
      dispatch(getDoneList(id))
      dispatch(allMyProducts(user.id))
      dispatch(getWatingListToSend(user.id))
      dispatch(getDoneSendingProducts(user.id))
      dispatch(getCart(user.id)) 
    }

  },[dispatch, id, user.id])
 
  const showFrom = () => {
    setShowForm(!showForm)
  }

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

    return (
      <>
        <div className={styles.navigation}>
            \ <Link to='/main' className={styles.link}>  ГЛАВНАЯ  </Link>
            \ <Link to={`/profile/${user.id}`} className={styles.link}>  ПРОФИЛЬ  </Link>
        </div>
        
          
    
          {showForm 
          ? <TestForm showFrom={showFrom}/>
          : null
        }
        <div className={styles.profile_container}>

          <div className={styles.profile_info}>
            <h4>{user.name}</h4>
            <img src={process.env.REACT_APP_API_URL + 'boxIronMan.jpg'} className={styles.profile_img} alt="..."/>
          </div>
          <div className={styles.profile_btn}>
            {/* <button type="button" className="btn btn-primary" onClick={() => showFrom()}>Добавить товар</button> */}
            <Button variant="contained" className={styles.btn_addProduct} onClick={() => showFrom()}>ДОБАВИТЬ ТОВАР</Button>
            {/* <Link to='/profile/mySales' ><Button variant="contained" className={styles.btn_addProduct} onClick={() => showFrom()}>МОИ ПРОДАЖИ</Button></Link>  */}
            {/* <Link to='/profile/mySales' type='button' className="btn btn-primary">Мои продажи</Link> */}
          </div>
        
          <div className={styles.profile_accordion}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>Мои товары</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className={styles.main_box}>
                    <div className={styles.products}>
                      {myProduct.length
                        ? myProduct.map(product => <MyOneProduct key={product.id} product={product}/>)
                        : <h4 className={styles.attention}>Пока пусто</h4>
                      }
                    </div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                <Typography>Заказы в ожидании - {myWaitingList.length} шт.</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className={styles.main_box}>
                    <div className={styles.products}>
                      {myWaitingList.length
                        ? myWaitingList.map(product => <OneWaitingProduct key={product.id} product={product}/>)
                        : <>
                            <h4 className={styles.attention} >Нет товаров, вы можете их заказать:</h4>
                            <Link to={`/cart/${user.id}`}>Перейти в корзину</Link>
                          </>
                      }
                    </div>
                  </div >
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                <Typography>Мои покупки - {myReceiptProducts.length} шт.</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                <div className={styles.main_box}>
                  <div className={styles.products}>
                    {myReceiptProducts.length
                      ? myReceiptProducts.map(product => <OneSendingProduct key={product.id} product={product}/>)
                      : <div className={styles.attention_box}>
                          <h4 className={styles.attention}>Вы еще ничего не купили</h4>
                          <Link to={`/main`}>Перейти к покупкам</Link>
                        </div>
                    }
                  </div>
                </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                <Typography>Товары на отправку - {productsToSend.length} шт.</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                <div className={styles.main_box}>
                  <div className={styles.products}>
                    {productsToSend.length
                      ? productsToSend.map(product => <OneProductToSend key={product.id} product={product}/>)
                      : <div className={styles.attention_box}>
                          <h4 className={styles.attention}>У вас еще ничего не купили...</h4>
                          {/* <Link to={`/main`}>Перейти к покупкам</Link> */}
                        </div>
                    }
                  </div>
                </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
              <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                <Typography>Отправленные товары - {doneSendingProducts.length} шт.</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                <div className={styles.main_box}>
                  <div className={styles.products}>
                    {doneSendingProducts.length
                      ? doneSendingProducts.map(product => <OneSendingProduct key={product.id} product={product}/>)
                      : <div className={styles.attention_box}>
                          <h4 className={styles.attention}>Вы еще не отправили ни один товар</h4>
                          {/* <Link to={`/main`}>Перейти к покупкам</Link> */}
                        </div>
                    }
                  </div>
                </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        

        </div>


      </>
    )
  }

export default Profile

