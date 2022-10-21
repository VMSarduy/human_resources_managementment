import React from 'react';
import { Form, Input, DatePicker, InputNumber } from 'antd';
import moment from 'moment';

const dateFormat = 'YYYY/MM/DD';

function StudView({Estud_Actual, dataE}) {

  const onFinish = values => {
    Estud_Actual(values);
  };

  return (

    <Form
      initialValues={{
      id:dataE.id,
      lugar:dataE.lugar, 
      anno:moment(dataE.anno, dateFormat), 
      descrip:dataE.descrip,
      userId:dataE.userId,}} 
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
              label="Lugar"              
            >
              <Input readOnly placeholder="Lugar donde cursa los estudios" />
          </Form.Item>
    
          <Form.Item
              name="anno"
              label="Año"              
            >
              <DatePicker disabled={true} format={dateFormat} />
          </Form.Item>
    
          <Form.Item
              name="descrip"
              label="Descripcón">
              <Input readOnly showCount maxLength={100}  placeholder="Descripción de los Estudios Actuales" />
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
 
export default StudView;