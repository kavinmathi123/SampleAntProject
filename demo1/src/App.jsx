import { DatePicker } from 'antd';
import { TeamOutlined, SmileOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
function App() {


  return (
    <>
      <DatePicker />
      <TeamOutlined style={{ fontSize: '24px', color: '#08c', margin: '20px' }} />
      <SmileOutlined spin={true} />
      <Row>
        <Col span={24} style={{ background: "blue" }}>Col</Col>
      </Row>
      <Row>
        <Col span={12} style={{ background: "red" }}>Col</Col>
        <Col span={12} style={{ background: "pink" }}>Col</Col>
      </Row>
    </>
  )
}

export default App
