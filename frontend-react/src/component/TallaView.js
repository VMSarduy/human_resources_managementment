import React from 'react';
import { Form, Input, InputNumber} from 'antd';

function TallaView({FormTalla, dataT}) {

  const onFinish = values => {
    FormTalla(values);
  };

  return (

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
          label="Número de Calsado"
          >
          <InputNumber readOnly placeholder="Número de calsado"/>
      </Form.Item>

      <Form.Item
          name="ropa"
          label="Ropa"          
        >
          <Input readOnly placeholder="Talla ropa" />
      </Form.Item>

      <Form.Item
          name="oder"
          label="Otros"          
        >
          <Input readOnly showCount maxLength={100}  placeholder="Otros" />
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
export default TallaView;