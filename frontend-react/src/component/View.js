import React, { useState} from 'react';
import {Form, Input, Select, InputNumber, Radio, Button, DatePicker, Modal} from 'antd';
import { PlusOutlined, EyeOutlined } from '@ant-design/icons';
import moment from 'moment';
import MilitarView from './MilitarView';
import StudView from './StudView';
import TallaView from './TallaView';
import BajaView from './BajaView';
const dateFormat = 'YYYY/MM/DD';


function View({WorkerView, viewW}) {

    const now = moment();
    const birthDay = moment(viewW.edad, dateFormat);

    const { info, error } = Modal;
     
    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
    };
  
    const onFinish = (values) => {
      WorkerView();
    };

    const RegMilit = details => {   
     
    }
  
    const Estud_Actual = details => { 
      
    }
  
    const FormTalla = details => { 
      
    }

    const BajaW = details => { 
      
    }

    function AddReg(){

      <div>
      {(viewW.reg_milit !== null) ? (
          
        info({
      
            title:"Regimientos Militares" ,
            icon: <EyeOutlined />,        
            width:1400,
            content:<MilitarView RegMilit={RegMilit} dataR={viewW.reg_milit}/>,
      
          })

          ) : (

        error({
      
            title:"Regimientos Militares" ,
            icon: <EyeOutlined />,        
            content:"El trabajador no tiene Regimientos Militares para mostrar",
      
          })    

            )
            
          }

      </div>

    }
  
    function AddEstud(){
      
      <div>
      {(viewW.estud_actual !== null) ? (
          
          info({
  
            title:"Estudios Actuales" ,
            icon: <EyeOutlined />,        
            width:1400,
            content:<StudView Estud_Actual={Estud_Actual} dataE={viewW.estud_actual}/>,
      
          })

          ) : (

        error({
      
            title:"Estudios Actuales" ,
            icon: <EyeOutlined />,        
            content:"El trabajador no tiene Estudios Actuales para mostrar",
      
          })    

            )
            
          }

        
      </div>

    }
  
    function AddTalla(){

      <div>
      {(viewW.talla !== null) ? (
          
          info({
  
            title:"Tallas" ,
            icon: <EyeOutlined />,        
            width:1400,
            content:<TallaView FormTalla={FormTalla} dataT={viewW.talla}/>,
      
          })

          ) : (

        error({
      
            title:"Tallas" ,
            icon: <EyeOutlined />,        
            content:"El trabajador no tiene Tallas para mostrar",
      
          })    

            )
            
          }
        
      </div>

    }

    function AddBaja(){

      <div>
      {(viewW.baja !== null) ? (
          
        info({
      
            title:"Baja" ,
            icon: <EyeOutlined />,        
            width:1400,
            content:<BajaView BajaW={BajaW} datab={viewW.baja}/>,
      
          })

          ) : (

        error({
      
            title:"Baja" ,
            icon: <EyeOutlined />,        
            content:"El trabajador no tiene baja que mostrar",
      
          })    

            )
            
          }

      </div>

    }
  
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
          size: componentSize,
          id:viewW.id,
          email:viewW.email,
          nombre:viewW.nombre,
          apellido:viewW.apellido,
          numero_trab:viewW.numero_trab,
          numero_ci:viewW.numero_ci,
          baja:viewW.baja,
          direccion:viewW.direccion,
          telefono:viewW.telefono,
          edad:moment.duration(now.diff(birthDay)).years(),
          grupo_area:viewW.grupo_area,
          area:viewW.area,
          raza:viewW.raza,
          sexo:viewW.sexo,
          talla:viewW.talla,
          cargo:viewW.cargo,
          nive_escolar:viewW.nive_escolar,
          especialidad:viewW.especialidad,
          estud_actual:viewW.estud_actual,
          cat_ocupa:viewW.cat_ocupa,          
          fecha_entrada:moment(viewW.fecha_entrada, dateFormat),
          fecha_baja:moment(viewW.fecha_baja, dateFormat),
          reg_milit:viewW.reg_milit,
          juvilado:viewW.juvilado,
          cat_docent:viewW.cat_docent,
          hora_irreg:viewW.hora_irreg,
          certificacion:viewW.certificacion,
          maestria:viewW.maestria,
          dortorado:viewW.dortorado,
          grupo_escala:viewW.grupo_escala,
          escala:viewW.escala, 
                    
        }}
        onFinish={onFinish}
      onValuesChange={onFormLayoutChange}
        size={componentSize}
        
      >
        <Form.Item  label="Tamaño del formulario" name="size">
          <Radio.Group>
            <Radio.Button value="small">Pequeño</Radio.Button>
            <Radio.Button value="default">Por defecto</Radio.Button>
            <Radio.Button value="large">Grande</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="id"          
        >
          <InputNumber readOnly placeholder="Id del empleado" />
      </Form.Item>
  
        <Form.Item 
            name="email"            
            label="Correo"             
          >
            <Input readOnly  placeholder="Correo del empleado" />
        </Form.Item>
  
        <Form.Item
            name="nombre"
            label="Nombre"
            >
            <Input readOnly placeholder="Nombre del empleado" />
        </Form.Item>
  
        <Form.Item
            name="apellido"
            label="Apellidos"
            >
            <Input readOnly placeholder="Apellido del empleado" />
        </Form.Item>

        <Form.Item
            name="numero_ci"
            label="CI"
            >
            <Input readOnly showCount maxLength={11}  placeholder="Carnet del empleado" />
        </Form.Item>

        <Form.Item
            name="direccion"
            label="Dirección"
            >
            <Input readOnly placeholder="Dirección del empleado" />
        </Form.Item>

        <Form.Item
            name="telefono"
            label="Teléfono"
            >
            <Input readOnly placeholder="Teléfono del empleado" />
        </Form.Item>
  
        <Form.Item
            name="area"
            label="Área"
            >
            <Input readOnly placeholder="Área del empleado" />
        </Form.Item>

        <Form.Item
            name="grupo_area"
            label="Grupo(Área)"
            >
            <Input readOnly placeholder="Grupo de Área del empleado" />
        </Form.Item>
  
        <Form.Item
            name="cargo"
            label="Cargo"
            >
            <Input readOnly placeholder="Cargo del empleado" />
        </Form.Item>

        <Form.Item
            name="especialidad"
            label="Especialidad"
            >
            <Input readOnly placeholder="Especialidad del empleado" />
        </Form.Item>        
  
        <Form.Item
            name="cat_ocupa"
            label="Categoría ocupacional"
            >
            <Input readOnly placeholder="Categoría ocupacional del empleado" />
        </Form.Item>

      <Form.Item
          name="grupo_escala"
          label="Grupo escala"
          >
          <Input readOnly placeholder="Grupo escala del empleado" />
      </Form.Item>
  
        <Form.Item
            name="nive_escolar"
            label="Nivel de preparacion"
            >
            <Input readOnly placeholder="Nivel de preparacion del empleado" />
        </Form.Item>        
      
        <Form.Item 
        name="raza"
        label="Raza"
        >
          <Input readOnly placeholder="Raza del empleado" />
        </Form.Item>
  
        <Form.Item 
        name="sexo"
        label="Sexo"        
        >
          <Input readOnly placeholder="Sexo del empleado" />
        </Form.Item>        
  
        <Form.Item >      
      <Button type="dashed" onClick={() => AddReg()} block icon={<PlusOutlined />}>Ver Regimientos Militares</Button>         
      </Form.Item>

      <Form.Item >
      <Button type="dashed" onClick={() => AddEstud()} block icon={<PlusOutlined />}>Ver Estudios Actuales</Button> 
      </Form.Item>

      <Form.Item >
      <Button type="dashed" onClick={() => AddTalla()} block icon={<PlusOutlined />}>Ver Tallas</Button>    
      </Form.Item>

      <Form.Item >
      <Button type="dashed" onClick={() => AddBaja()} block icon={<PlusOutlined />}>Ver Baja</Button>    
      </Form.Item>         
         
      <Form.Item
      name="juvilado"
      label="Juvilado">
      
      <Select disabled>
       <Select.Option value={true}>Juvilado</Select.Option>
       <Select.Option value={false}>Activo</Select.Option>
      </Select>
      </Form.Item>

      <Form.Item
      name="edad"
      label="Edad del empleado">
        
        <Input readOnly/>
      </Form.Item>

      <Form.Item
          name="fecha_entrada"
          label="Fecha de Entrada">
            
            <DatePicker disabled={true} format={dateFormat} />
          </Form.Item>
         

      <Form.Item
      name="numero_trab"
      label="Número">
        
        <Input readOnly/>
      </Form.Item>     

      <Form.Item
            name="cat_docent"
            label="Categoría docente"
            >
            <Input readOnly placeholder="Categoría docente del empleado" />
        </Form.Item>        
        
        <Form.Item
          name="hora_irreg"          
          label="Horario Irregular"
          >
          <Input readOnly placeholder="Monto por Horario Irregular" />
      </Form.Item>

      <Form.Item
            name="certificacion"
            label="Certificación"
            >
            <Input readOnly placeholder="Certificación del empleado" />
        </Form.Item>

      <Form.Item
          name="maestria"
          label="Maestría"
          >
          <Input readOnly placeholder="Monto por Maestría" />
      </Form.Item>

      <Form.Item
          name="dortorado"
          label="Doctorado"
          >
          <Input readOnly placeholder="Monto por Doctorado" />
      </Form.Item>

      <Form.Item
          name="escala"
          label="Escala"
          >
          <Input readOnly placeholder="Escala del empleado" />
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
 
export default View;