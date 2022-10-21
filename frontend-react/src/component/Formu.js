import React, { useState } from 'react';
import {Form, Input,Select, DatePicker, InputNumber, Switch,Radio, Button, Space} from 'antd';
import { InfoCircleOutlined, CloseOutlined, CheckOutlined, PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';


function Formu({Worker, worker}) { 

  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const onFinish = (values) => {
    console.log('Finish:', values);
    Worker(values);
  };

    return(
      <Form
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 22,
      }}
      layout="vertical"
      initialValues={{
        size: componentSize,
      }}
      onFinish={onFinish}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
      <Form.Item label="Tamaño del formulario" name="size">
        <Radio.Group>
          <Radio.Button value="small">Pequeño</Radio.Button>
          <Radio.Button value="default">Por defecto</Radio.Button>
          <Radio.Button value="large">Grande</Radio.Button>
        </Radio.Group>
      </Form.Item>

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
          <Input placeholder="Carne del empleado" />
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
          rules={[
            {
              required: true,
              message: 'Por favor introduzca un grupo de área válida!',
            },
          ]}
          label="Grupo(Área)"
          tooltip={{
            title: 'Esto es un campo obligatorio',
            icon: <InfoCircleOutlined />,
          }}
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
          rules={[
            {
              required: true,
              message: 'Por favor introduzca una especialidad válida!',
            },
          ]}
          label="Especialidad"
          tooltip={{
            title: 'Esto es un campo obligatorio',
            icon: <InfoCircleOutlined />,
          }}
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
          name="cat_docent"
          rules={[
            {
              required: true,
              message: 'Por favor introduzca un valor admisible!',
            },
          ]}
          label="Categoría docente"
          tooltip={{
            title: 'Esto es un campo obligatorio',
            icon: <InfoCircleOutlined />,
          }}
        >
          <Input placeholder="Monto por Categoría docente" />
      </Form.Item>

      <Form.Item
          name="certificacion"
          rules={[
            {
              required: true,
              message: 'Por favor introduzca un valor admisible!',
            },
          ]}
          label="Certificación"
          tooltip={{
            title: 'Esto es un campo obligatorio',
            icon: <InfoCircleOutlined />,
          }}
        >
          <Input placeholder="Monto por Certificación" />
      </Form.Item>

      <Form.Item
          name="hora_irreg"
          rules={[
            {
              required: true,
              message: 'Por favor introduzca un valor admisible!',
            },
          ]}
          label="Horario Irregular"
          tooltip={{
            title: 'Esto es un campo obligatorio',
            icon: <InfoCircleOutlined />,
          }}
        >
          <Input placeholder="Monto por Horario Irregular" />
      </Form.Item>

      <Form.Item
          name="maestria"
          rules={[
            {
              required: true,
              message: 'Por favor introduzca un valor admisible!',
            },
          ]}
          label="Maestría"
          tooltip={{
            title: 'Esto es un campo obligatorio',
            icon: <InfoCircleOutlined />,
          }}
        >
          <Input placeholder="Monto por Maestría" />
      </Form.Item>

      <Form.Item
          name="dortorado"
          rules={[
            {
              required: true,
              message: 'Por favor introduzca un valor admisible!',
            },
          ]}
          label="Doctorado"
          tooltip={{
            title: 'Esto es un campo obligatorio',
            icon: <InfoCircleOutlined />,
          }}
        >
          <Input placeholder="Monto por Doctorado" />
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
          <Input placeholder="Escala salarial del empleado" />
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
          <Select.Option value="Medio">Medio</Select.Option>
          <Select.Option value="Medio Superior">Medio Superior</Select.Option>
          <Select.Option value="Superior">Superior</Select.Option>
          <Select.Option value="Otro">Otro</Select.Option>
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

      <Form.Item>      
      <Form.List name="Reg_mi">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                <Form.Item
                  {...restField}
                  name={[name, 'lugar']}
                  rules={[{ required: true, message: 'Introduzca un valor admisible' }]}
                >
                  <Input placeholder="Lugar del Regimiento Militar" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'anno']}
                  rules={[{ required: true, message: 'Introduzca un valor admisible' }]}
                >
                  <DatePicker/>
                </Form.Item>

                <Form.Item
                  {...restField}
                  name={[name, 'descrip']}
                  rules={[{ required: true, message: 'Introduzca un valor admisible' }]}
                >
                  <Input showCount maxLength={100}  placeholder="Descripción del Regimiento Militar" />
                </Form.Item>

                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Añadir Regimiento Militar
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>         
      </Form.Item>

      <Form.Item>
      <Form.List name="EstudA">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                <Form.Item
                  {...restField}
                  name={[name, 'lugar']}
                  rules={[{ required: true, message: 'Introduzca un valor admisible' }]}
                >
                  <Input placeholder="Lugar donde cursa los estudios" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'anno']}
                  rules={[{ required: true, message: 'Introduzca un valor admisible' }]}
                >
                  <DatePicker/>
                </Form.Item>

                <Form.Item
                  {...restField}
                  name={[name, 'descrip']}
                  rules={[{ required: true, message: 'Introduzca un valor admisible' }]}
                >
                  <Input showCount maxLength={100}  placeholder="Descripción de los Estudios Actuales" />
                </Form.Item>

                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Añadir Estudios Actuales
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>      
      </Form.Item>

      <Form.Item>
      <Form.List name="Talla">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                
                <Form.Item
                  {...restField}
                  name={[name, 'calsado']}
                  rules={[{ required: true, message: 'Introduzca un número de calsado' }]}
                >
                  <InputNumber  placeholder="Número de calsado"/>
                </Form.Item>

                <Form.Item
                  {...restField}
                  name={[name, 'ropa']}
                  rules={[{ required: true, message: 'Introduzca talla de ropa' }]}
                >
                  <Input placeholder="Talla ropa" />
                </Form.Item>                

                <Form.Item
                  {...restField}
                  name={[name, 'oder']}
                  rules={[{ required: true, message: 'Introduzca un valor admisible' }]}
                >
                  <Input showCount maxLength={100}  placeholder="Otros" />
                </Form.Item>

                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Añadir Talla
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>    
      </Form.Item>

      <Form.Item 
          name="fecha_entrada"
          label="Fecha de Entrada"
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
            
            <DatePicker />
          </Form.Item>

          <Form.Item
          name="fecha_baja"
          label = "Fecha de baja" >
            
            <DatePicker />
          </Form.Item>
         
      <Form.Item
      name="juvilado"
      label="Juvilado">
      
      <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
    />
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
        
        <InputNumber />
      </Form.Item>     

      <Form.Item
      name="edad"
      label="Edad"
      rules={[
        {
          required: true,
          message: 'Por favor introduzca una edad válida!',
        },
      ]}
      >
        
        <InputNumber />
      </Form.Item>

      <br></br>
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
    )

}

export default Formu;



/*<Form.Item label="Regimientos Militares">      
      <Form.List name="reg_milit">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                <Form.Item
                  {...restField}
                  name={[name, 'lugar']}
                  rules={[{ required: true, message: 'Introduzca un valor admisible' }]}
                >
                  <Input placeholder="Lugar del Regimiento Militar" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'anno']}
                  rules={[{ required: true, message: 'Introduzca un valor admisible' }]}
                >
                  <DatePicker/>
                </Form.Item>

                <Form.Item
                  {...restField}
                  name={[name, 'descrip']}
                  rules={[{ required: true, message: 'Introduzca un valor admisible' }]}
                >
                  <Input showCount maxLength={100}  placeholder="Descripción del Regimiento Militar" />
                </Form.Item>

                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Añadir Regimiento Militar
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>         
      </Form.Item>

      <Form.Item label="Estudios actuales">
      <Form.List name="estud_actual">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                <Form.Item
                  {...restField}
                  name={[name, 'lugar']}
                  rules={[{ required: true, message: 'Introduzca un valor admisible' }]}
                >
                  <Input placeholder="Lugar donde cursa los estudios" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'anno']}
                  rules={[{ required: true, message: 'Introduzca un valor admisible' }]}
                >
                  <DatePicker />
                </Form.Item>

                <Form.Item
                  {...restField}
                  name={[name, 'descrip']}
                  rules={[{ required: true, message: 'Introduzca un valor admisible' }]}
                >
                  <Input showCount maxLength={100}  placeholder="Descripción de los Estudios Actuales" />
                </Form.Item>

                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Añadir Estudios Actuales
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>      
      </Form.Item>

      <Form.Item label="Tallas">
      <Form.List name="talla">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                
                <Form.Item
                  {...restField}
                  name={[name, 'calsado']}
                  rules={[{ required: true, message: 'Introduzca un número de calsado' }]}
                >
                  <InputNumber  placeholder="Número de calsado"/>
                </Form.Item>

                <Form.Item
                  {...restField}
                  name={[name, 'ropa']}
                  rules={[{ required: true, message: 'Introduzca talla de ropa' }]}
                >
                  <Input placeholder="Talla ropa" />
                </Form.Item>                

                <Form.Item
                  {...restField}
                  name={[name, 'oder']}
                  rules={[{ required: true, message: 'Introduzca un valor admisible' }]}
                >
                  <Input showCount maxLength={100}  placeholder="Otros" />
                </Form.Item>

                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Añadir Talla
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>    
      </Form.Item>





















      <Form.Item label="Regimientos Militares">      
      <Form.List name="reg_milit">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                <Form.Item
                  {...restField}
                  name={[name, 'lugar']}
                  rules={[{ required: true, message: 'Introduzca un valor admisible' }]}
                >
                  <Input readOnly placeholder="Lugar del Regimiento Militar" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'anno']}
                  rules={[{ required: true, message: 'Introduzca un valor admisible' }]}
                >
                  <Input readOnly placeholder="Fecha de entrada" />
                </Form.Item>

                <Form.Item
                  {...restField}
                  name={[name, 'descrip']}
                  rules={[{ required: true, message: 'Introduzca un valor admisible' }]}
                >
                  <Input readOnly showCount maxLength={100}  placeholder="Descripción del Regimiento Militar" />
                </Form.Item>                
              </Space>
            ))}           
          </>
        )}
      </Form.List>         
      </Form.Item>

      <Form.Item label="Estudios actuales">
      <Form.List name="estud_actual">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                <Form.Item
                  {...restField}
                  name={[name, 'lugar']}
                  rules={[{ required: true, message: 'Introduzca un valor admisible' }]}
                >
                  <Input readOnly placeholder="Lugar donde cursa los estudios" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'anno']}
                  rules={[{ required: true, message: 'Introduzca un valor admisible' }]}
                >
                  <Input readOnly placeholder="Fecha de entrada" />
                </Form.Item>

                <Form.Item
                  {...restField}
                  name={[name, 'descrip']}
                  rules={[{ required: true, message: 'Introduzca un valor admisible' }]}
                >
                  <Input readOnly showCount maxLength={100}  placeholder="Descripción de los Estudios Actuales" />
                </Form.Item>

                
              </Space>
            ))}
            
          </>
        )}
      </Form.List>      
      </Form.Item>

      <Form.Item label="Tallas">
      <Form.List name="talla">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                
                <Form.Item
                  {...restField}
                  name={[name, 'calsado']}
                  rules={[{ required: true, message: 'Introduzca un número de calsado' }]}
                >
                  <Input readOnly placeholder="Número de calsado"/>
                </Form.Item>

                <Form.Item
                  {...restField}
                  name={[name, 'ropa']}
                  rules={[{ required: true, message: 'Introduzca talla de ropa' }]}
                >
                  <Input readOnly placeholder="Talla ropa" />
                </Form.Item>                

                <Form.Item
                  {...restField}
                  name={[name, 'oder']}
                  rules={[{ required: true, message: 'Introduzca un valor admisible' }]}
                >
                  <Input readOnly showCount maxLength={100}  placeholder="Otros" />
                </Form.Item>

                
              </Space>
            ))}
            
          </>
        )}
      </Form.List>    
      </Form.Item>
      */ 