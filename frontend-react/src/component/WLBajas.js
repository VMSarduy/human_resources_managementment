import React, {useState,useEffect} from 'react';
import { Table, Space, Button, Modal} from 'antd';
import getAxiosInstance from '../api/get-axios-instance';
import View from './View';
import { EyeOutlined,EditOutlined, DeleteOutlined, SmileOutlined} from '@ant-design/icons';
import Edit from './Edit'

const axios = getAxiosInstance();

const WLBajas = () => {  

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [worker, Setworker] = useState();
  
  const { info, error, success } = Modal;
  const { Column } = Table;
 
    useEffect(() => {

      setLoading(true);

      axios.get('http://localhost:3001/user/', {headers: {} }).then( result => setData(result.data.result))  
      .catch(function (error) {console.log(error);}).finally(()=> setLoading(false))     
      
    
    }, [])
  
  const Workeredit = dataEdit => {  
       
    if(dataEdit !=="" &&  worker !== dataEdit){
      axios.put(`http://localhost:3001/user/${dataEdit.id}`,{ ...dataEdit}).then(Success())
      .catch(function (error) {console.log(error);}); 
      }
  }

  function WorkerView() { 
    
   }  

    function ForVew(viewW){
      
      info({

        title:"Empleado",
        icon: <EyeOutlined />,        
        width:1400,
        okButtonProps:{ disabled: true },        
        content:<View WorkerView={WorkerView} viewW={viewW}/>,

      });
      
    }    

    function ForEdit(editW){
      
      Setworker(editW);

      info({

        title:"Editar Empleado" ,
        icon: <EditOutlined />,        
        width:1400,
        okButtonProps:{ disabled: true },
        content:<Edit Workeredit={Workeredit} editW={editW} SuccessForEdit={SuccessForEdit}/>,

      });

    } 

    function ForDelete(deleteW) {
      
      error({

        title: 'Seguro que desea eliminar este empleado',
        icon: <DeleteOutlined />,
        okText:'Borrar',
        content: 'Este empleado sera removido permanentemente de la base de datos. Esta acción no se puede revertir...',
        onOk() {
          axios.delete(`http://localhost:3001/user/${deleteW.id}`).then(Success()).catch(function (error) {console.log(error);});
        },
                 
      });
    }
    
    function Success(){

      setLoading(true);
      axios.get('http://localhost:3001/user/', {headers: {} }).then( result => setData(result.data.result))  
      .catch(function (error) {console.log(error);}).finally(()=> setLoading(false))

      success({

        title:"Operación exitosa" ,
        icon: <SmileOutlined />,        
        content:"Su operación fue realizada con exito!",
        onOk: Reload(),

      });
    }

    function Reload(){

      setLoading(true);
      axios.get('http://localhost:3001/user/', {headers: {} }).then( result => setData(result.data.result))  
      .catch(function (error) {console.log(error);}).finally(()=> setLoading(false))

      Modal.destroyAll();

    }

    function SuccessForEdit(Workeredit){

      success({

        title:"Operación exitosa" ,
        icon: <SmileOutlined />,        
        content:"Su operación fue realizada con exito!",
        onOk() { ReloadForEdit(Workeredit) }

      });
    }

    function ReloadForEdit(Workeredit){      
      Modal.destroyAll();
      
      axios.get(`http://localhost:3001/user/` + Workeredit.id, {headers: {} }).then(function (result) {ForEdit(result.data);})  
      .catch(function (error) {console.log(error);})
      
      

    }
   
    return( 
        
    <div className='App'><br></br>     
          
      <div className="card"> 
      <div className="card-body">              

        <Table dataSource={data} loading={loading} >
          <Column title="ID" dataIndex='numero_trab' rowKey='numero_trab' />
          <Column title="Correo" dataIndex='email' rowKey="email" />
          <Column title="Nombre" dataIndex='nombre'rowKey="nombre" />         
          <Column title="Apellido" dataIndex='apellido' rowKey="apellido" />
          <Column title="CI" dataIndex='numero_ci' rowKey='numero_ci' />
          <Column title="Cargo" dataIndex='cargo' rowKey='cargo' />
          <Column title="Área" dataIndex='area' rowKey='area' />    
          <Column
            title="Acción"
            rowKey="action"
            render={(data) => (
          <Space size="middle">
            <Button  icon={<EyeOutlined />}   onClick={() => ForVew(data)}></Button>                                          
            <Button  icon={<EditOutlined />}   onClick={() => ForEdit(data)}></Button>                                            
            <Button  icon={<DeleteOutlined />}  onClick={() => ForDelete(data)}></Button>            
          </Space>
      )}
          />    
        </Table> 

        
        </div>          
      </div>
      <br></br>
    </div>    
      
    );

   

}
export default WLBajas;