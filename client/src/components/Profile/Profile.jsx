import React, { useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import TestForm from '../TestForm/TestForm';
import { Rate } from 'antd';

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

//! Импорты для модалки:
// ? modal ---
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { UploadOutlined } from '@ant-design/icons';
import { Form, Upload, Input } from 'antd';
import {updateProfilePhoto} from '../../redux/actions/userAC'
import CloseIcon from '@mui/icons-material/Close';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};
//!========================
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

  //! все для модалки 
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [file, setFile] = useState(null)

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const selectFile = e => {
    setFile(e.target.files[0])
  }

  const onFinish = () => {
    const formData = new FormData()
    formData.append('userID', user.id)
    formData.append('img', file)
    dispatch(updateProfilePhoto(formData))
    handleClose()
  }

    return (
      <>
        <div className={styles.navigation}>
            \ <Link to='/main' className={styles.link}>  ГЛАВНАЯ  </Link>
            \ <Link to={`/profile/${user.id}`} className={styles.link}>  ПРОФИЛЬ  </Link>
        </div>

          {
            showForm 
            ? <TestForm showFrom={showFrom}/>
            : null
          }
        <div className={styles.profile_container}>

          <div className={styles.profile_info}>
            <h4>{user.name}</h4>
            <h4>Рейтинг: {user.rating} <Rate allowHalf disabled value={Number(user.rating)} /></h4>
            <img src={process.env.REACT_APP_API_URL + user.img} className={styles.profile_img} alt="..."/>
            {/* <button onClick={() => setOpen(true)}>Добавить фото</button> */}
            <div className={styles.profile_btn_modal}>
              <Button variant="contained" className={styles.btn_addPhoto_Modal} onClick={() => setOpen(true)}>ДОБАВИТЬ ФОТО</Button>
            </div>
          </div>

          <div className={styles.profile_btn}>
            <Button variant="contained" className={styles.btn_addProduct} onClick={() => showFrom()}>ДОБАВИТЬ ТОВАР</Button>
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
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <div className={styles.formBOX}>
            <Fade in={open}>
              <Box sx={style}>
                    <CloseIcon onClick={handleClose} style={{cursor: 'pointer'}}></CloseIcon>
              <Form
                    name="validate_other"
                    {...formItemLayout}
                    onFinish={onFinish}
                    encType="multipart/form-data"
                    initialValues={{
                      'input-number': 3,
                      'checkbox-group': ['A', 'B'],
                      rate: 3.5,
                    }}>
                      <div className={styles.btn_close}>
                      </div>
                      <div className={styles.photo_user_Box}>
                        <img src={process.env.REACT_APP_API_URL + user.img} alt='...'>
                      </img>

                      </div>

                    <Form.Item
                      type="file"
                      onChange={selectFile}
                      name="images"
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                      wrapperCol={{
                        span: 12,
                        offset: 5,
                      }}
                        >
                      <Upload name="logo" listType="picture">
                        <Button icon={<UploadOutlined /> } className={styles.btn_addPhoto2} >загрузить фото</Button>
                      </Upload>
                    </Form.Item>

                    <Form.Item
                      wrapperCol={{
                        span: 12,
                        offset: 5,
                      }}>
                      <Button type="primary" htmlType="submit"  className={styles.btn_addPhoto} >
                        Сохранить
                      </Button>
                    </Form.Item>

                  </Form>
              </Box>
            </Fade>

          </div>
      </Modal>

      
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <div className={styles.formBOX}>
            <Fade in={open}>
              <Box sx={style}>
                    <CloseIcon onClick={handleClose} style={{cursor: 'pointer'}}></CloseIcon>
              <Form
                    name="validate_other"
                    {...formItemLayout}
                    onFinish={onFinish}
                    encType="multipart/form-data"
                    initialValues={{
                      'input-number': 3,
                      'checkbox-group': ['A', 'B'],
                      rate: 3.5,
                    }}>
                      <div className={styles.btn_close}>
                      </div>
                      <div className={styles.photo_user_Box}>
                        <img src={process.env.REACT_APP_API_URL + user.img} alt='...'>
                      </img>

                      </div>

                    <Form.Item
                      type="file"
                      onChange={selectFile}
                      name="images"
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                      wrapperCol={{
                        span: 12,
                        offset: 5,
                      }}
                        >
                      <Upload name="logo" listType="picture">
                        <Button icon={<UploadOutlined /> } className={styles.btn_addPhoto2} >загрузить фото</Button>
                      </Upload>
                    </Form.Item>

                    <Form.Item
                      wrapperCol={{
                        span: 12,
                        offset: 5,
                      }}>
                      <Button type="primary" htmlType="submit"  className={styles.btn_addPhoto} >
                        Сохранить
                      </Button>
                    </Form.Item>

                  </Form>
              </Box>
            </Fade>

          </div>
      </Modal>

      </>
    )
  }

export default Profile

