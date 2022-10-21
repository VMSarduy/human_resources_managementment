import React from 'react';
import { Form, Input, DatePicker, InputNumber } from 'antd';
import moment from 'moment';

const dateFormat = 'YYYY/MM/DD';

function BajaView({BajaW, datab}) {

  const onFinish = values => {
   BajaW(values);
  };

  return ( 

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
          label="Fecha de baja"            
        >
          <DatePicker disabled={true} format={dateFormat} />

      </Form.Item>    

      <Form.Item 
        name="descrip"
        label="Causa de baja"     
        >
          <Input readOnly placeholder="Causa de baja del empleado" />
      </Form.Item> 

      <Form.Item
          name="userId"
          label="ID del Trabajador"          
        >
          <InputNumber readOnly placeholder="userId" />
      </Form.Item>

      </Form>       
        
  );
}

export default BajaView;