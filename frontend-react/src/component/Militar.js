import React from 'react';
import { Form, Input, Button, DatePicker, InputNumber } from 'antd';
import { InfoCircleOutlined} from '@ant-design/icons';
import moment from 'moment';

const dateFormat = 'YYYY/MM/DD';

function Militar({RegMilit, dataR, id}) {

  const onFinish = values => {
   RegMilit(values);
  };

  return ( 
    
    <div>
      {(dataR !== "" && dataR !== null ) ? (

        <Form initialValues={{
        id:dataR.id,
        lugar:dataR.lugar, 
        anno:moment(dataR.anno, dateFormat), 
        descrip:dataR.descrip,
        userId:dataR.userId,
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
          <Input placeholder="Lugar del regimento militar" />
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
          <Input showCount maxLength={100}  placeholder="Descripción del regimento militar" />
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
            <Input placeholder="Lugar del regimento militar" />
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
            <Input showCount maxLength={100}  placeholder="Descripción del regimento militar" />
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

export default Militar;
 


