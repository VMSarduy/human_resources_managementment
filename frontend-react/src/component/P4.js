import React, {useState,useEffect} from 'react';
import { Table } from 'antd';
import getAxiosInstance from '../api/get-axios-instance';


const axios = getAxiosInstance();

function P4() {   

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);  
      
  const { Column, ColumnGroup} = Table;
 
    useEffect(() => {

      setLoading(true);

      axios.get('http://localhost:3001/user/', {headers: {} }).then( result => setData(result.data.result))  
      .catch(function (error) {console.log(error);}).finally(()=> setLoading(false))     
      
    
    }, [])  
    
    return(
      
      <div className="App"><br></br>
        <div className="card">            
            <div className="card-body">

        <Table dataSource={data} loading={loading} >
           <ColumnGroup title="MINISTERIO DE ENERGÍA Y MINAS CENTRO NACIONAL PARA LA CERTIFICACION INDUSTRIAL JULIO CESAR CASTRO PALOMINO CIENFUEGOS">
            
            <Column title="No." dataIndex='numero_trab' key='numero_trab' />
            <Column title="Descripción." dataIndex='cargo' key='cargo' />
            <Column title="Categoría ocupacional" dataIndex='cat_ocupa' key='cat_ocupa' />
            <Column title="Nombre" dataIndex='nombre' key='nombre' />  
            <Column title="Apellidos" dataIndex='apellido' key='apellido' />    
            <Column title="Sexo" dataIndex='sexo' key='sexo'/> 
            <Column title="Nivel de preapración" dataIndex='nive_escolar' key='nive_escolar' />                  
            <Column title="Grupo escala" dataIndex='grupo_escala' key='grupo_escala' />
            
            <ColumnGroup title="Salario">
              <Column title="Total" dataIndex='' key='total' />    
              <Column title="Escala" dataIndex='escala' key='escala' /> 
              <Column title="Categoría Docente" dataIndex='cat_docent' key='cat_docent' />
              <Column title="Maestría" dataIndex='maestria' key='maestria' />                  
              <Column title="Doctorado" dataIndex='dortorado' key='dortorado' />                  
              <Column title="Certificación" dataIndex='certificacion' key='certificacion' />                  
              <Column title="Horario Irregular" dataIndex='hora_irreg' key='hora_irreg' />
            </ColumnGroup>

        </ColumnGroup>             
        </Table> 

        </div>
      </div><br></br>
    </div>      
      
    );

   

}
export default P4;