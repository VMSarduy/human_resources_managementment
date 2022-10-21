import React from 'react';
import { Form, Button, DatePicker, Select, InputNumber } from 'antd';
import { InfoCircleOutlined} from '@ant-design/icons';
import moment from 'moment';

const dateFormat = 'YYYY/MM/DD';

function Baja({BajaW, datab, id}) {

  const onFinish = values => {
   BajaW(values);
  };

  return ( 
    
    <div>
      {(datab !== "" && datab !== null ) ? (

        <Form initialValues={{
        id:datab.id,
        anno:moment(datab.anno, dateFormat), 
        descrip:datab.descrip,
        userId:datab.userId,
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
          name="anno"
          rules={[
            {
              required: true,
              message: 'Por favor introduzca una fecha válida!',
            },
          ]}
          label="Fecha de baja"
          tooltip={{
            title: 'Esto es un campo obligatorio',
            icon: <InfoCircleOutlined />,
          }}
        >
          <DatePicker placeholder="Fecha de baja del empleado" format={dateFormat} />
      </Form.Item>

      <Form.Item 
      name="descrip"
      label="Causa de baja"
      rules={[
        {
          required: true,
          message: 'Por favor introduzca un valor admisible!!',
        },
      ]}
      tooltip={{
        title: 'Esto es un campo obligatorio',
        icon: <InfoCircleOutlined />,
      }}
      >
        <Select>
          <Select.Option value="Salarial">Salarial</Select.Option>
          <Select.Option value="Juvilación">Juvilación</Select.Option>
          <Select.Option value="Fallecimiento">Fallecimiento</Select.Option>
          <Select.Option value="Invalidez total">Invalidez total</Select.Option>
          <Select.Option value="Invalidez parcial">Invalidez parcial</Select.Option>
          <Select.Option value="Privación de libertad">Privación de libertad</Select.Option>
          <Select.Option value="Paso a formas no estatales">Paso a formas no estatales</Select.Option>
          <Select.Option value="Proceso de disponivilidad">Proceso de disponivilidad</Select.Option>
          <Select.Option value="Sanción administrativa">Sanción administrativa</Select.Option>
          <Select.Option value="Salida del país">Salida del país</Select.Option>
          <Select.Option value="Otras">Otras</Select.Option>
          <Select.Option value=""></Select.Option>
        </Select>
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
          name="anno"
          rules={[
            {
              required: true,
              message: 'Por favor introduzca una fecha válida!',
            },
          ]}
          label="Fecha de baja"
          tooltip={{
            title: 'Esto es un campo obligatorio',
            icon: <InfoCircleOutlined />,
          }}
        >
          <DatePicker placeholder="Fecha de baja del empleado" format={dateFormat} />
      </Form.Item>

      <Form.Item 
      name="descrip"
      label="Causa de baja"
      rules={[
        {
          required: true,
          message: 'Por favor introduzca un valor admisible!!',
        },
      ]}
      tooltip={{
        title: 'Esto es un campo obligatorio',
        icon: <InfoCircleOutlined />,
      }}
      >
        <Select>
          <Select.Option value="Salarial">Salarial</Select.Option>
          <Select.Option value="Juvilación">Juvilación</Select.Option>
          <Select.Option value="Fallecimiento">Fallecimiento</Select.Option>
          <Select.Option value="Invalidez total">Invalidez total</Select.Option>
          <Select.Option value="Invalidez parcial">Invalidez parcial</Select.Option>
          <Select.Option value="Privación de libertad">Privación de libertad</Select.Option>
          <Select.Option value="Paso a formas no estatales">Paso a formas no estatales</Select.Option>
          <Select.Option value="Proceso de disponivilidad">Proceso de disponivilidad</Select.Option>
          <Select.Option value="Sanción administrativa">Sanción administrativa</Select.Option>
          <Select.Option value="Salida del país">Salida del país</Select.Option>
          <Select.Option value="Otras">Otras</Select.Option>
          <Select.Option value=""></Select.Option>
        </Select>
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

export default Baja;