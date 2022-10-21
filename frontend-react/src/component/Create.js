import {Form, Input,Select, InputNumber, Button, DatePicker} from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';


function Create({Worker}) {    

  const onFinish = (values) => {
    
    Worker(values);
  };

    return(

      <div><br></br><br></br>

      <Form
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 22,
      }}
      layout="vertical"
      initialValues={{
       
      }}
      onFinish={onFinish}
      
    >     

      <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Por favor introduzca un correo válido!',
            },
          ]}
          label="Correo"
          tooltip={{
            title: 'Esto es un campo obligatorio',
            icon: <InfoCircleOutlined />,
          }}
        >
          <Input placeholder="Correo del empleado" />
      </Form.Item>

      <Form.Item
          name="nombre"
          rules={[
            {
              required: true,
              message: 'Por favor introduzca un nombre válido!',
            },
          ]}
          label="Nombre"
          tooltip={{
            title: 'Esto es un campo obligatorio',
            icon: <InfoCircleOutlined />,
          }}
        >
          <Input placeholder="Nombre del empleado" />
      </Form.Item>

      <Form.Item
          name="apellido"
          rules={[
            {
              required: true,
              message: 'Por favor introduzca un apellido válido!',
            },
          ]}
          label="Apellidos"
          tooltip={{
            title: 'Esto es un campo obligatorio',
            icon: <InfoCircleOutlined />,
          }}
        >
          <Input placeholder="Apellido del empleado" />
      </Form.Item>

      <Form.Item
          name="numero_ci"
          rules={[
            {
              required: true,
              message: 'Por favor introduzca un Carne válido!',
            },
          ]}
          label="CI"
          tooltip={{
            title: 'Esto es un campo obligatorio',
            icon: <InfoCircleOutlined />,
          }}
        >
          <Input showCount maxLength={11}  placeholder="Carnet del empleado" />
      </Form.Item>

      <Form.Item
          name="direccion"
          rules={[
            {
              required: true,
              message: 'Por favor introduzca una dirección válida!',
            },
          ]}
          label="Dirección"
          tooltip={{
            title: 'Esto es un campo obligatorio',
            icon: <InfoCircleOutlined />,
          }}
        >
          <Input placeholder="Dirección del empleado" />
      </Form.Item>

      <Form.Item
          name="telefono"
          label="Teléfono"
          >
          <Input placeholder="Teléfono del empleado" />
      </Form.Item>     

      <Form.Item
          name="area"
          rules={[
            {
              required: true,
              message: 'Por favor introduzca un área válida!',
            },
          ]}
          label="Área"
          tooltip={{
            title: 'Esto es un campo obligatorio',
            icon: <InfoCircleOutlined />,
          }}
        >
          <Input placeholder="Área del empleado" />
      </Form.Item>

      <Form.Item
          name="grupo_area"          
          label="Grupo(Área)"
          >
          <Input placeholder="Grupo de Área del empleado" />
      </Form.Item>

      <Form.Item
          name="cargo"
          rules={[
            {
              required: true,
              message: 'Por favor introduzca un cargo válido!',
            },
          ]}
          label="Cargo"
          tooltip={{
            title: 'Esto es un campo obligatorio',
            icon: <InfoCircleOutlined />,
          }}
        >
          <Input placeholder="Cargo del empleado" />
      </Form.Item>

      <Form.Item
          name="especialidad"
          label="Especialidad"
          >
          <Input placeholder="Especialidad del empleado" />
      </Form.Item>

      <Form.Item
          name="cat_ocupa"
          rules={[
            {
              required: true,
              message: 'Por favor introduzca un valor admisible!',
            },
          ]}
          label="Categoría ocupacional"
          tooltip={{
            title: 'Esto es un campo obligatorio',
            icon: <InfoCircleOutlined />,
          }}
        >
          <Input placeholder="Categoría ocupacional del empleado" />
      </Form.Item>     

      <Form.Item
          name="grupo_escala"
          rules={[
            {
              required: true,
              message: 'Por favor introduzca un valor admisible!',
            },
          ]}
          label="Grupo escala"
          tooltip={{
            title: 'Esto es un campo obligatorio',
            icon: <InfoCircleOutlined />,
          }}
        >
          <Input placeholder="Grupo escala del empleado" />
      </Form.Item>

      <Form.Item 
      name="nive_escolar"
      label="Nivel de preparación"
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
          <Select.Option value="9no Grado">9no Grado</Select.Option>          
          <Select.Option value="12 Grado">12 Grado</Select.Option>
          <Select.Option value="Medio">Medio</Select.Option>
          <Select.Option value="Medio Superior">Medio Superior</Select.Option>
          <Select.Option value="Superior">Superior</Select.Option>
          <Select.Option value=""></Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
      name="raza"
      label="Raza"
      rules={[
        {
          required: true,
          message: 'Por favor introduzca una raza válida!',
        },
      ]}
      tooltip={{
        title: 'Esto es un campo obligatorio',
        icon: <InfoCircleOutlined />,
      }}
      >
        <Select>
          <Select.Option value="Mestizo">Mestizo</Select.Option>
          <Select.Option value="Negro">Negro</Select.Option>
          <Select.Option value="Blanco">Blanco</Select.Option>
          <Select.Option value="Otro">Otro</Select.Option>
          <Select.Option value=""></Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
      name="sexo"
      label="Sexo"
      rules={[
        {
          required: true,
          message: 'Por favor introduzca un sexo válido!',
        },
      ]}
      tooltip={{
        title: 'Esto es un campo obligatorio',
        icon: <InfoCircleOutlined />,
      }}
      >
        <Select>
          <Select.Option value="Femenino">Femenino</Select.Option>
          <Select.Option value="Masculino">Masculino</Select.Option>
          <Select.Option value="Otro">Otro</Select.Option>
          <Select.Option value=""></Select.Option>
        </Select>
      </Form.Item>          
         
      <Form.Item
      name="juvilado"
      label="Juvilado">
      
      <Select>
       <Select.Option value={true}>Juvilado</Select.Option>
       <Select.Option value={false}>Activo</Select.Option>
      </Select>
      </Form.Item>

      <Form.Item
      name="edad"
      label="Fecha de nacimiento "
      rules={[
        {
          required: true,
          message: 'Por favor introduzca una fecha válida!',
        },
      ]}
      tooltip={{
        title: 'Esto es un campo obligatorio',
        icon: <InfoCircleOutlined />,
      }}>       
        <DatePicker placeholder="Fecha de nacimient del empleado" />
      </Form.Item>

      <Form.Item 
          name="fecha_entrada"
          label="Fecha de Entrada"
          rules={[
            {
              required: true,
              message: 'Por favor introduzca un numero válido!',
            },
          ]}
          tooltip={{
            title: 'Esto es un campo obligatorio',
            icon: <InfoCircleOutlined />,
          }}>
            
            <DatePicker placeholder="Fecha de Entrada del empleado" />
          </Form.Item>

      <Form.Item
      name="numero_trab"
      label="Número"
      rules={[
        {
          required: true,
          message: 'Por favor introduzca un numero válido!',
        },
      ]}
      >
        
        <InputNumber  placeholder="Número del empleado" />
      </Form.Item>      

      <Form.Item
          name="cat_docent"
          
          label="Categoría docente"
          >
          <InputNumber placeholder="Monto por Categoría docente" />
      </Form.Item>

      <Form.Item
          name="hora_irreg"          
          label="Horario Irregular"
          >
          <InputNumber placeholder="Monto por Horario Irregular" />
      </Form.Item>

      <Form.Item
          name="certificacion"          
          label="Certificación"
          >
          <InputNumber placeholder="Monto por Certificación" />
      </Form.Item>

      <Form.Item
          name="maestria"
          label="Maestría"
          >
          <InputNumber placeholder="Monto por Maestría" />
      </Form.Item>

      <Form.Item
          name="dortorado"          
          label="Doctorado"
          >
          <InputNumber placeholder="Monto por Doctorado" />
      </Form.Item>

      <Form.Item
          name="escala"
          rules={[
            {
              required: true,
              message: 'Por favor introduzca un valor admisible!',
            },
          ]}
          label="Escala salarial"
          tooltip={{
            title: 'Esto es un campo obligatorio',
            icon: <InfoCircleOutlined />,
          }}
        >
          <InputNumber placeholder="Escala salarial del empleado" />
      </Form.Item> 
      
      <br></br><br></br>
      <div className='App'>
      <Form.Item shouldUpdate>
          {() => (
            <Button
              type="primary"
              htmlType="submit"              
            >
              Aceptar
            </Button>
          )}
        </Form.Item>

      </div>      
                

      </Form>

      </div>

    )

}

export default Create;