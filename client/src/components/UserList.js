import React from 'react';
import { Table } from 'antd'

const columns = [{
  title: '아이디',
  dataIndex: 'id',
  key: 'id',
}, {
  title: '이름',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '나이',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '결혼 여부',
  key: 'married',
  dataIndex: 'married',
}];

const data = [{
  key: '1',
  id: 1,
  name: 'John Brown',
  age: 32,
  married: '기혼',
}, {
  key: '2',
  id: 2,
  name: 'Jim Green',
  age: 42,
  married: '미혼'
}, {
  key: '3',
  id: 3,
  name: 'Joe Black',
  age: 32,
  married: '기혼'
}];

const UserList = () => {
  return (
    <Table 
      columns={columns} 
      dataSource={data} 
      style={{ width: '700px'}}
    />
  );
};

export default UserList;