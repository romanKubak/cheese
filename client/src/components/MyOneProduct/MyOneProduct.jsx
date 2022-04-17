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
    <div className="card" style={{width: '18rem'}}>
      <img src={process.env.REACT_APP_API_URL + product.img} className={styles.card_img_top} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{product.price}</li>
        <button className="btn btn-danger" onClick={() => deleteOne()}>Удалить</button>
        <button className="btn btn-primary" onClick={handleOpen}>Редактировать</button>
      </ul>
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
                <button type="secondary" htmlType="submit" className={styles.btn_submit_formADDProduct} onClick={handleClose} >
                  x
                </button>
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
                  label="Название"
                  onChange={e => setName(e.target.value)}
                  rules={[
                    {
                      required: true,
                      message: 'Введите название товара',
                    },
                  ]}>
                  <Input name="name" value={name}/>
                </Form.Item>

                <Form.Item
                  label="Описание"
                  onChange={e => setDescription(e.target.value)}
                  rules={[
                    {
                      required: true,
                      message: 'Введите описание товара',
                    },
                  ]}>
                  <Input name="description" value={description}/>
                </Form.Item>

                <Form.Item
                  label="Цена"
                  onChange={e => setPrice(e.target.value)}
                  rules={[
                    {
                      required: true,
                      message: 'Введите цену товара',
                    },
                  ]} >
                  <Input name="price" value={price}/>
                </Form.Item>

                <Form.Item
                  type="file"
                  onChange={selectFile}
                  name="images"
                  label="Загрузка"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                    >
                  <Upload name="logo" listType="picture">
                    <Button icon={<UploadOutlined /> } >Добавить фото</Button>
                  </Upload>
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    span: 12,
                    offset: 6,
                  }}>
                  <Button type="primary" htmlType="submit" className={styles.btn_submit_formADDProduct}>
                    Сохранить
                  </Button>
                </Form.Item>

              </Form>
          </Box>
        </Fade>
      </Modal>
  </div>
  )
}

