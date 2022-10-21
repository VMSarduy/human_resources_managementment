import React from 'react';
import { Form, Input, Button, DatePicker, InputNumber } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import moment from 'moment';

const dateFormat = 'YYYY/MM/DD';

function Stud({Estud_Actual, dataE, id}) {

  const onFinish = values => {
    Estud_Actual(values);
  };

  return (

    <div>
      {(dataE !== "" && dataE !== null) ? (
    
    <Form
    initialValues={{
      id:dataE.id,
      lugar:dataE.lugar, 
      anno:moment(dataE.anno, dateFormat), 
    descrip:dataE.descrip,
    userId:dataE.userId, 
  }} 
      onFinish={onFinish}>

<br></br><br></br>

        <Form.Item
          name="id"
          label="ID"          
        >
          <InputNumber readOnly placeholder="Id" />
      </Form.Item>

        <Form.Item
          name="lugar"
          rules={[
            {
              required: true,
              message: 'Por favor introduzca un lugar válido!',
            },
          ]}
          label="Lugar"
          tooltip={{
            title: 'Esto es un campo obligatorio',
            icon: <InfoCircleOutlined />,
          }}
        >
          <Input placeholder="Lugar donde cursa los estudios" />
      </Form.Item>

      <Form.Item
          name="anno"
          rules={[
            {
              required: true,
              message: 'Por favor introduzca un año válido!',
            },
          ]}
          label="Año"
          tooltip={{
            title: 'Esto es un campo obligatorio',
            icon: <InfoCircleOutlined />,
          }}
        >
          <DatePicker  format={dateFormat} />
      </Form.Item>

      <Form.Item
          name="descrip"
          rules={[
            {
              required: true,
              message: 'Por favor introduzca un lugar válido!',
            },
          ]}
          label="Descripcón"
          tooltip={{
            title: 'Esto es un campo obligatorio',
            icon: <InfoCircleOutlined />,
          }}
        >
          <Input showCount maxLength={100}  placeholder="Descripción de los Estudios Actuales" />
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
              name="lugar"
              rules={[
                {
                  required: true,
                  message: 'Por favor introduzca un lugar válido!',
                },
              ]}
              label="Lugar"
              tooltip={{
                title: 'Esto es un campo obligatorio',
                icon: <InfoCircleOutlined />,
              }}
            >
              <Input placeholder="Lugar donde cursa los estudios" />
          </Form.Item>
    
          <Form.Item
              name="anno"
              rules={[
                {
                  required: true,
                  message: 'Por favor introduzca un año válido!',
                },
              ]}
              label="Año"
              tooltip={{
                title: 'Esto es un campo obligatorio',
                icon: <InfoCircleOutlined />,
              }}
            >
              <DatePicker  format={dateFormat} />
          </Form.Item>
    
          <Form.Item
              name="descrip"
              rules={[
                {
                  required: true,
                  message: 'Por favor introduzca un lugar válido!',
                },
              ]}
              label="Descripcón"
              tooltip={{
                title: 'Esto es un campo obligatorio',
                icon: <InfoCircleOutlined />,
              }}
            >
              <Input showCount maxLength={100}  placeholder="Descripción de los Estudios Actuales" />
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
 
export default Stud;