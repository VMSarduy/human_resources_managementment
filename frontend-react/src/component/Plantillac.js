import React, {useState,useEffect} from 'react';
import { Table } from 'antd';
import getAxiosInstance from '../api/get-axios-instance';


const axios = getAxiosInstance();

function Plantillac() {   

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
          <ColumnGroup title="Plantilla: 1075">
          <ColumnGroup title="Denominación: CENTRO NACIONAL PARA LA CERTIFICACION INDUSTRIAL JULIO CESAR CASTRO PALOMINO">
          
            <Column title="Cod." dataIndex="numero_trab" key="numero_trab" />
            <Column title="Descripción Órgano/Cargo/Técnica" dataIndex='cargo' key="cargo" />
            <Column title="Categoría ocupacional" dataIndex='cat_ocupa'key="cat_ocupa" />         
            <Column title="Cantidad de cargos" dataIndex='' key="cant_carg" />
            <Column title="Nivel de preapración" dataIndex="nive_escolar" key="nive_escolar" />
            <Column title="Grupo escala" dataIndex="grupo_escala" key="grupo_escala" />
          
        </ColumnGroup>  
        </ColumnGroup>     
        </Table>

         </div>
      </div><br></br>
    </div>      
      
    );

   

}
export default Plantillac;