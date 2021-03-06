import React,{ useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './style.module.css'
import { Form, Button, Upload, Input } from 'antd';
import {deleteProduct} from '../../redux/actions/productAc'
// ? modal ---
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { updateProduct } from '../../redux/actions/productAc'
import { UploadOutlined } from '@ant-design/icons';

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import BorderColorIcon from '@mui/icons-material/BorderColor';
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

export default function MyOneProduct({product}) {

  const dispatch = useDispatch()

  const deleteOne = () => {
    dispatch(deleteProduct(product.id))
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const userId = useSelector(state => state.user.id);
  
  const [name, setName] = useState(product.name)
  const [description, setDescription] = useState(product.description)
  const [price, setPrice] = useState(product.price)
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
        formData.append('name', name)
        formData.append('description', description)
        formData.append('price', price)
        formData.append('userId', userId)
        formData.append('productID', product.id)
        formData.append('img', file)
    dispatch(updateProduct(formData))
    handleClose()
  }

  return (
    <div className={styles.main_box}>
      <div className={styles.profile_card} style={{width: '18rem'}}>
        <img src={process.env.REACT_APP_API_URL + product.img} className={styles.card_img_top} alt="..."/>
        <div className={styles.box_description}>
          <div className={styles.card_body}>
            <h6 className={styles.card_title}>{product.name}</h6>
          </div>
          <div className={styles.price_card}>
            <h6>{product.price}</h6>
          </div>
        </div>
        <div className={styles.btn_group}>
          {/* <button className="btn btn-danger" onClick={() => deleteOne()}>x</button> */}
          <IconButton aria-label="delete"onClick={() => deleteOne()}>
            <DeleteIcon className={styles.btn_icon}  />
          </IconButton>
          <IconButton aria-label="delete" onClick={handleOpen}>
            <BorderColorIcon className={styles.btn_icon}  />
          </IconButton>
          {/* <button className="btn btn-primary" onClick={handleOpen}>??</button> */}
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
                  <div className={styles.photo_Box}>
                    <img src={process.env.REACT_APP_API_URL + product.img} alt='...'>
                  </img>

                  </div>

                <Form.Item
                  label="????????????????"
                  onChange={e => setName(e.target.value)}
                  rules={[
                    {
                      required: true,
                      message: '?????????????? ???????????????? ????????????',
                    },
                  ]}>
                  <Input name="name" value={name}/>
                </Form.Item>

                <Form.Item
                  label="????????????????"
                  onChange={e => setDescription(e.target.value)}
                  rules={[
                    {
                      required: true,
                      message: '?????????????? ???????????????? ????????????',
                    },
                  ]}>
                  <Input name="description" value={description}/>
                </Form.Item>

                <Form.Item
                  label="????????"
                  onChange={e => setPrice(e.target.value)}
                  rules={[
                    {
                      required: true,
                      message: '?????????????? ???????? ????????????',
                    },
                  ]} >
                  <Input name="price" value={price}/>
                </Form.Item>

                <Form.Item
                  type="file"
                  onChange={selectFile}
                  name="images"
                  label="????????????????"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                    >
                  <Upload name="logo" listType="picture">
                    <Button icon={<UploadOutlined /> } >???????????????? ????????</Button>
                  </Upload>
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    span: 12,
                    offset: 6,
                  }}>
                  <Button type="primary" htmlType="submit" className={styles.btn_submit_formADDProduct}>
                    ??????????????????
                  </Button>
                </Form.Item>

              </Form>
          </Box>
        </Fade>
      </Modal>
  </div>
  )
}

