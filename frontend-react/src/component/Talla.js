import React from 'react';
import { Form, Input, Button, InputNumber} from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

function Talla({FormTalla, dataT, id}) {

  const onFinish = values => {
    FormTalla(values);
  };

  return (

    <div>
      {(dataT !== "" && dataT !== null) ? (

    <Form
      initialValues={{
        id:dataT.id,
        calsado:dataT.calsado,
        ropa:dataT.ropa,
        oder:dataT.oder,
        userId:dataT.userId,}} 
      onFinish={onFinish}>

      <br></br><br></br> 

        <Form.Item
          name="id"
          label="ID"          
        >
          <InputNumber readOnly placeholder="Id" />
        </Form.Item>

        <Form.Item
          name="calsado"
          rules={[
            {
              required: true,
              message: 'Introduzca un número de calsado',
            },
          ]}
          label="Número de Calsado"
          tooltip={{
            title: 'Esto es un campo obligatorio',
            icon: <InfoCircleOutlined />,
          }}
        >
          <InputNumber  placeholder="Número de calsado"/>
      </Form.Item>

      <Form.Item
          name="ropa"
          rules={[
            {
              required: true,
              message: 'Introduzca talla de ropa',
            },
          ]}
          label="Ropa"
          tooltip={{
            title: 'Esto es un campo obligatorio',
            icon: <InfoCircleOutlined />,
          }}
        >
          <Input placeholder="Talla ropa" />
      </Form.Item>

      <Form.Item
          name="oder"
          rules={[
            {
              required: true,
              message: 'Por favor introduzca un lugar válido!',
            },
          ]}
          label="Otros"
          tooltip={{
            title: 'Esto es un campo obligatorio',
            icon: <InfoCircleOutlined />,
          }}
        >
          <Input showCount maxLength={100}  placeholder="Otros" />
      </Form.Item>

      <Form.Item
          name="userId"
          label="ID del Trabajador"          
        >
          <InputNumber readOnly placeholder="userId" />
      </Form.Item>

      <Form.Item>
              
        <br></br><br></br>
          <div className='App'>
            <Button
              type="primary"
              htmlType="submit"              
            >Aceptar
            </Button>
          </div>

      </Form.Item>
      
      </Form>
      ) : (
      
        <Form initialValues={{userId:id}} onFinish={onFinish}>

      <br></br><br></br> 

        <Form.Item
          name="id"
          label="ID"          
        >
          <InputNumber readOnly placeholder="Id" />
        </Form.Item>

        <Form.Item
          name="calsado"
          rules={[
            {
              required: true,
              message: 'Introduzca un número de calsado',
            },
          ]}
          label="Número de Calsado"
          tooltip={{
            title: 'Esto es un campo obligatorio',
            icon: <InfoCircleOutlined />,
          }}
        >
          <InputNumber  placeholder="Número de calsado"/>
      </Form.Item>

      <Form.Item
          name="ropa"
          rules={[
            {
              required: true,
              message: 'Introduzca talla de ropa',
            },
          ]}
          label="Ropa"
          tooltip={{
            title: 'Esto es un campo obligatorio',
            icon: <InfoCircleOutlined />,
          }}
        >
          <Input placeholder="Talla ropa" />
      </Form.Item>

      <Form.Item
          name="oder"
          rules={[
            {
              required: true,
              message: 'Por favor introduzca un lugar válido!',
            },
          ]}
          label="Otros"
          tooltip={{
            title: 'Esto es un campo obligatorio',
            icon: <InfoCircleOutlined />,
          }}
        >
          <Input showCount maxLength={100}  placeholder="Otros" />
      </Form.Item>

      <Form.Item
          name="userId"
          label="ID del Trabajador"          
        >
          <InputNumber readOnly placeholder="userId" />
      </Form.Item>

      <Form.Item>
              
        <br></br><br></br>
          <div className='App'>
            <Button
              type="primary"
              htmlType="submit"              
            >Aceptar
            </Button>
          </div>

      </Form.Item>
      
      </Form>
  )
        
}


</div>
);
}
export default Talla;