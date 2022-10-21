import React from 'react';
import { Form, Input, DatePicker, InputNumber } from 'antd';
import moment from 'moment';

const dateFormat = 'YYYY/MM/DD';

function MilitarView({RegMilit, dataR}) {

  const onFinish = values => {
   RegMilit(values);
  };

  return ( 
    
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
          label="Lugar"
          >
          <Input readOnly placeholder="Lugar del regimento militar" />
      </Form.Item>

      <Form.Item
          name="anno"
          label="Año"            
        >
          <DatePicker disabled={true} format={dateFormat} />
      </Form.Item>

      <Form.Item
          name="descrip"            
          label="Descripcón"           
        >
          <Input readOnly showCount maxLength={100}  placeholder="Descripción del regimento militar" />
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

export default MilitarView;
 


