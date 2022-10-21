
import {Typography, Space} from 'antd';

function Deleter() {  

const { Text } = Typography;

      return(
                
        <Space direction="vertical">
        <Text type='danger'>Este empleado sera removido permanentemente de la base de datos
        ...Esta acción no se puede revertir...</Text>       
        </Space>

      )}
 
    export default Deleter;
       