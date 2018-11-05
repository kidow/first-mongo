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

const UserList = ({users}) => {
  const userList = users.map((user, index) => {
    const { _id, name, age, married } = user
    return { key: String(index + 1), id: _id, name, age, married: married ? '기혼' : '미혼' }
  })
  return (
    <Table 
      columns={columns}
      dataSource={userList}
      style={{ width: '700px'}}
    />
  );
};

export default UserList;