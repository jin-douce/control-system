import logo from './logo.svg';
import { Breadcrumb, Button, Divider, Form, Grid, Input, Layout, Menu } from 'antd';
import React, {Fragment} from 'react';
import './App.css';
// import 'antd/dist/antd.css'; 
import 'antd/dist/antd.dark.css';
import 'antd/dist/antd.compact.css';
import { FullScreenContainer, BorderBox13, Decoration8, Decoration6, Decoration10, BorderBox7, BorderBox11, BorderBox12, ScrollBoard } from '@jiaminghi/data-view-react'


const { Header, Content, Footer } = Layout;
const Item = Form.Item;
const Row = Grid.Row;
const Col = Grid.Col;

const config = {
  header: ["次数", "虚拟机", "主机", "能耗", "cpu", "Q表值", "奖励"],
  // 表头背景色
  headerBGC: "rgba(0, 80, 179, 0.6)",
  // // 奇数行背景色
  oddRowBGC: '#09184F',
  // // 偶数行背景色
  evenRowBGC: '#070C34',
  // 行号
  index: true,
  // 行号表头
  indexHeader: '序号',
  // 宽度
  columnWidth: [100, 100, 100, 100, 100, 100, 100],
  // 对其方式
  align: ['center'],
  // 表行数
  rowNum: 5,
  data: [
[1, 2, 3, 4, 5, 6, 7],
[1, 2, 3, 4, 5, 6, 7],
[1, 2, 3, 4, 5, 6, 7],
[1, 2, 3, 4, 5, 6, 7],
[1, 2, 3, 4, 5, 6, 7],
  ]
};

const menu = ["模拟结果", "策略对比"];
const detailsList= [
  {
    title: '能耗',
    number: "803.91kWh",
  },
  {
    title: 'slav',
    number: "0.00%",
  },
  {
    title: '迁移数',
    number: 0,
  },
]

function App() {
  return (
    <FullScreenContainer>
          <Layout style={{ background: "#131629" }}>

          <div style={{display: "flex", justifyContent: "center"}}>
            <Decoration10 
              style={{
                position: "absolute",
                width: 440,
                height: "0.0625rem",
                top: 25,
                left: 0
              }} 
              />
            <div className='title-box'>
              <Decoration8
                color={['#568aea', '#131629']}
                style={{
                  position: "absolute",
                  width: 200,
                  height: 30,
                  top: 25,
                  right: 800
                }}
              />
              <div className='title'>
                <span 
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  color: "white"
                }}
                >
                  数据中心节能控制系统
                </span>
              </div>

              <Decoration8
                reverse={true}
                color={['#568aea', '#131629']}
                style={{
                  position: "absolute",
                  width: 200,
                  height: 30,
                  top: 25,
                  left: 800
                }}
              />
            </div>
            <Decoration10 
            reverse={true}
            style={{
              position: "absolute",
                width: 440,
                height: "0.0625rem",
                top: 25,
                right: 0
            }} />
          </div>
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      {/* <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb> */}
      <div style={{ minHeight: 180, display: "flex" }}>
        {/* 左边 */}
        <div style={{width: "30%"}}>
        <BorderBox13 style={{height: "650px", marginBottom: 30}}>
          <span style={{ fontSize: 16, color: "#85a5ff", position: "absolute", top: 15, left: 10}}>配置中心</span>
          <Divider style={{ color: "white", position: "absolute", top: 25}}>通用配置</Divider>
          {/* <span style={{color: "white"}}>通用配置</span> */}
          <Form style={{position: "absolute", top: 80, left: 20}}>
            <Item label={<span style={{color: "#d6e4ff", fontSize: 14}}>虚拟机选择策略</span>}  style={{marginBottom: 20}}>
              <BorderBox7 style={{width: "200px", height: "30px"}}></BorderBox7>
            </Item>
            <Item label={<span style={{color: "#d6e4ff", fontSize: 14}}>虚拟机分配策略</span>}  style={{marginBottom: 20}}>
              <BorderBox7 style={{width: "200px", height: "30px"}}></BorderBox7>
            </Item>
            <Item label={<span style={{color: "#d6e4ff", fontSize: 14, marginRight: 28}}>物理机数量</span>}  style={{marginBottom: 20}}>
              <BorderBox7 style={{width: "200px", height: "30px"}}></BorderBox7>
            </Item>
            <Item label={<span style={{color: "#d6e4ff", fontSize: 14}}>虚拟机workload</span>}  style={{marginBottom: 20}}>
              <BorderBox7 style={{width: "200px", height: "30px"}}></BorderBox7>
            </Item>
            <Item label={<span style={{color: "#d6e4ff", fontSize: 14, marginRight: 28}}>虚拟机数量</span>}  style={{marginBottom: 20}}>
              <BorderBox7 style={{width: "200px", height: "30px"}}></BorderBox7>
            </Item>
          </Form>
          <Divider style={{ color: "white", position: "absolute", top: 325}}>xx策略特定配置</Divider>
          <Form style={{position: "absolute", top: 380, left: 20}}>
            <Item label={<span style={{color: "#d6e4ff", fontSize: 14}}>xxxxxxxxxxxxxx</span>}  style={{marginBottom: 20}}>
              <BorderBox7 style={{width: "200px", height: "30px"}}></BorderBox7>
            </Item>
            <Item label={<span style={{color: "#d6e4ff", fontSize: 14}}>xxxxxxxxxxxxxx</span>}  style={{marginBottom: 20}}>
              <BorderBox7 style={{width: "200px", height: "30px"}}></BorderBox7>
            </Item>
            <Item label={<span style={{color: "#d6e4ff", fontSize: 14}}>xxxxxxxxxxxxxx</span>}  style={{marginBottom: 20}}>
              <BorderBox7 style={{width: "200px", height: "30px"}}></BorderBox7>
            </Item>
          </Form>
          <Button type='primary' style={{background: "#597ef7", position: "absolute", top: 550, left: 160}}>模拟运行</Button>
        </BorderBox13>
        </div>
        {/* 中上 */}
        <div>
        <div style={{color: "white", fontSize: 14, margin: "10px 30px"}}>无调度结果</div>
        <div style={{ marginLeft: 20, display: "flex"}}>
            {detailsList
              ? detailsList.map((item, index) => {
                  return (
                    <div style={{width: 150, height: 100, display: "flex"}} key={index}>
                      <img
                        src={require(`./data1.png`)}
                        style={{width: 50, height: 50, margin: 5}}
                        alt={item.title}
                      />
                      <div style={{ color: "#adc6ff"}}>
                        <span style={{fontWeight: "bolder", fontSize: 16}}>{`${item.title}`}</span>
                        <div style={{fontWeight: "bolder", fontSize: 18}}>{item.number}</div>
                      </div>
                    </div>
                  );
                })
              : ''}
          </div>
          <div style={{color: "white", fontSize: 14, marginLeft: 30, marginBottom: 10}}>调度后结果</div>
        <div style={{ marginLeft: 20, display: "flex"}}>
            {detailsList
              ? detailsList.map((item, index) => {
                  return (
                    <div style={{width: 150, height: 100, display: "flex"}} key={index}>
                      <img
                        src={require(`./data1.png`)}
                        style={{width: 50, height: 50, margin: 5}}
                        alt={item.title}
                      />
                      <div style={{ color: "#adc6ff"}}>
                        <span style={{fontWeight: "bolder", fontSize: 16}}>{`${item.title}`}</span>
                        <div style={{fontWeight: "bolder", fontSize: 18}}>{item.number}</div>
                      </div>
                    </div>
                  );
                })
              : ''}
          </div>
        </div>
        
        <BorderBox12 style={{height: "300px", position: "absolute", right: 10, width: "35%"}}></BorderBox12>
        <div style={{ position: "absolute", top: 420, left: 500}}>
        andsfjdkmg
      <ScrollBoard config={config}
            style={{
              width: "900px", height: "300px",
            }}></ScrollBoard>
            {/* <dv-scroll-board></dv-scroll-board> */}
      </div>
      </div>
      {/* 下 */}
      
     
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
    </FullScreenContainer>
  );
}

export default App;
