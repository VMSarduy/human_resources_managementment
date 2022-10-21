
import './App.css';
import 'antd/dist/antd.css';
import List from "./component/List";
import React, { useState } from 'react';
import { Modal, Button, Alert } from 'antd';
import LoginForm from './component/LoginForm';
import Plantillac from './component/Plantillac';
import P4 from './component/P4';
import WLBajas from './component/WLBajas';
import image from "./img/filename.jpg"
import { FileProtectOutlined, UsergroupDeleteOutlined } from '@ant-design/icons';

const App = () => {

  const [loging, setLoging] = useState(true);
  const [error, setError] = useState("");
  const [islog, setIslog] = useState(false);
  const { info } = Modal;

  const adminUser =
  {
    username: "Admin",
    email:"viviam@cnci.co.cu",
    password: "adminrh22"
  }
  
  const backgroundImageURL =image;
  const containerStyle = {
      backgroundImage:
        `url(${backgroundImageURL})`,
      width: "8000px",
      height: "8000px",
    }; 
  
  const Login = details => {
    
   if(details.email === adminUser.email && details.password === adminUser.password && details.username === adminUser.username){
    setError("");
    setLoging(false);
    setIslog(true);
   }else{

    setError(<Alert
      message="Advertencia"
      description="Las credenciales no coinciden, Usted no puede acceder."
      type="error"
      showIcon      
    />);
   }

  }

  const Logout = () => {
    
    setLoging(true)
    setIslog(false)
    
  }
  

  function ForPlantCarg(){

    info({

      title:"Plantilla de cargo",
      icon: <FileProtectOutlined />,        
      width:3000,
      okButtonProps:{ disabled: true },
      content:<Plantillac/>,

    });     
    
  }

  function ForPlantCub(){
    
    info({

      title:"Plantilla de cubierto",
      icon: <FileProtectOutlined />,        
      width:3000,
      okButtonProps:{ disabled: true },
      content:<P4/>,

    });
    
  }
  
  function ListBajas(){
    
    info({

      title:"Trabajadores de baja",
      icon: <UsergroupDeleteOutlined/>,        
      width:3000,
      okButtonProps:{ disabled: true },
      content:<WLBajas/>,

    });
    
  }  

  return (

    <div className="App" >

      {(islog) ? (
        
      <div>
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
          <Button type="link"   size="large"  onClick={() => ForPlantCarg()} >Plantilla de cargo</Button>
          <Button type="link"   size="large"  onClick={() => ForPlantCub(true)} >Plantilla de cubierto</Button>
          <Button type="link"   size="large"  onClick={() => ListBajas(true)} >Trabajadores de Baja</Button>
          <Button type="link"   size="large"  onClick={() => Logout()} >Salir</Button>          
                            
        </nav>
        
        <List/>        

        </div>

        ) : (

          <div style={containerStyle}>
          <Modal
          title="Bienvenido al sistema de RRHH para el CNCI"
          centered
          visible={loging}
          okButtonProps={{ disabled: true }}
          cancelButtonProps={{ disabled: true }}
          width={1000}
          >
          <LoginForm Login={Login} error={error} />    
          </Modal>
          </div>
        )
        
      }

    
    </div>
  );
}

export default App;
