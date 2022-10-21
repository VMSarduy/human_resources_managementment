
import {Form, Input,Select, InputNumber,  Button, DatePicker, Modal} from 'antd';
import { InfoCircleOutlined, PlusOutlined, EditOutlined } from '@ant-design/icons';
import moment from 'moment';
import Militar from './Militar';
import Stud from './Stud';
import Talla from './Talla';
import Baja from './Baja';
import getAxiosInstance from '../api/get-axios-instance';

const dateFormat = 'YYYY/MM/DD';
const axios = getAxiosInstance();


function Edit({Workeredit, editW, SuccessForEdit}) { 

  const {info} = Modal;
 
  const onFinish = (values) => {    
    Workeredit(values);
  };

  const RegMilit = details => {
   
    if(editW.reg_milit !== null && details !=="" &&  details !== editW.reg_milit){
      axios.put(`http://localhost:3001/reg_milit/${details.id}`,{ ...details}).then(SuccessForEdit(editW))
      .catch(function (error) {console.log(error);}); 
      
    }else{if(details !==""){
        axios.post(`http://localhost:3001/reg_milit/`,{ ...details}).then(SuccessForEdit(editW))
      .catch(function (error) {console.log(error);});
      }} 

  }

  const Estud_Actual = details => { 
    
    if(editW.estud_actual !== null && details !=="" &&  details !== editW.estud_actual){
      axios.put(`http://localhost:3001/estud_actual/${details.id}`,{ ...details}).then(SuccessForEdit(editW))
      .catch(function (error) {console.log(error);}); 
      
    }else{if(details !==""){
        axios.post(`http://localhost:3001/estud_actual/`,{ ...details}).then(SuccessForEdit(editW))
      .catch(function (error) {console.log(error);});
      }}  

  }

  const FormTalla = details => { 

    if(editW.talla !== null && details !=="" &&  details !== editW.talla){
      axios.put(`http://localhost:3001/talla/${details.id}`,{ ...details}).then(SuccessForEdit(editW))
      .catch(function (error) {console.log(error);}); 
      
    }else{if(details !==""){
        axios.post(`http://localhost:3001/talla/`,{ ...details}).then(SuccessForEdit(editW))
      .catch(function (error) {console.log(error);});
      }} 

  }

  const BajaW = details => { 

    if(editW.baja !== null && details !=="" &&  details !== editW.baja){
      axios.put(`http://localhost:3001/baja/${details.id}`,{ ...details}).then(SuccessForEdit(editW))
      .catch(function (error) {console.log(error);}); 
      
    }else{if(details !==""){
        axios.post(`http://localhost:3001/baja/`,{ ...details}).then(SuccessForEdit(editW))
      .catch(function (error) {console.log(error);});
      }} 

  }


  function AddReg(){
   
    info({

      title:"Regimientos Militares" ,
      icon: <EditOutlined />,        
      width:1400,
      okButtonProps:{ disabled: true },
      content:<Militar RegMilit={RegMilit} dataR={editW.reg_milit} id={editW.id}/>,

    });

  }

  function AddEstud(){    
    
    info({

      title:"Estudios Actuales" ,
      icon: <EditOutlined />,        
      width:1400,
      okButtonProps:{ disabled: true },
      content:<Stud Estud_Actual={Estud_Actual} dataE={editW.estud_actual} id={editW.id}/>,

    });

  }

  function AddTalla(){
        
    info({

      title:"Añadir Tallas" ,
      icon: <EditOutlined />,        
      width:1400,
      okButtonProps:{ disabled: true },
      content:<Talla FormTalla={FormTalla} dataT={editW.talla} id={editW.id}/>,

    });

  }

  function AddBaja(){
   
    info({

      title:"Baja" ,
      icon: <EditOutlined />,        
      width:1400,
      okButtonProps:{ disabled: true },
      content:<Baja BajaW={BajaW} datab={editW.baja} id={editW.id}/>,

    });

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
        id:editW.id,
        email:editW.email,
        nombre:editW.nombre,
        apellido:editW.apellido,
        numero_trab:editW.numero_trab,
        numero_ci:editW.numero_ci,
        baja:editW.baja,
        direccion:editW.direccion,
        telefono:editW.telefono,
        edad:moment(editW.edad, dateFormat),
        grupo_area:editW.grupo_area,
        area:editW.area,
        raza:editW.raza,
        sexo:editW.sexo,        
        cargo:editW.cargo,
        nive_escolar:editW.nive_escolar,
        especialidad:editW.especialidad,        
        cat_ocupa:editW.cat_ocupa,
        fecha_entrada:moment(editW.fecha_entrada, dateFormat),
        fecha_baja:moment(editW.fecha_baja, dateFormat),        
        juvilado:editW.juvilado,
        cat_docent:editW.cat_docent,
        hora_irreg:editW.hora_irreg,
        certificacion:editW.certificacion,
        maestria:editW.maestria,
        dortorado:editW.dortorado,
        grupo_escala:editW.grupo_escala,
        escala:editW.escala,        
                  
      }}
        onFinish={onFinish}
              
    >
      <Form.Item
          name="id"          
        >
          <InputNumber readOnly placeholder="Id del empleado" />
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

      <Form.Item >      
      <Button type="dashed" onClick={() => AddReg()} block icon={<PlusOutlined />}>Editar Regimiento Militar</Button>         
      </Form.Item>

      <Form.Item >
      <Button type="dashed" onClick={() => AddEstud()} block icon={<PlusOutlined />}>Editar Estudios Actuales</Button> 
      </Form.Item>

      <Form.Item >
      <Button type="dashed" onClick={() => AddTalla()} block icon={<PlusOutlined />}>Editar Tallas</Button>    
      </Form.Item>

      <Form.Item >
      <Button type="dashed" onClick={() => AddBaja()} block icon={<PlusOutlined />}>Editar Baja</Button>    
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
        
        <DatePicker format={dateFormat} placeholder="Fecha de nacimient del empleado" />
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
            
            <DatePicker format={dateFormat} placeholder="Fecha de Entrada del empleado" />
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

export default Edit;