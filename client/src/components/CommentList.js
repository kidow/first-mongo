import React from 'react';
import { Table, Button } from 'antd'

const CommentList = ({onModify, onRemove}) => {
  const columns = [{
    title: '아이디',
    dataIndex: 'id',
    key: 'id',
  }, {
    title: '작성자',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '댓글',
    dataIndex: 'comment',
    key: 'comment',
  }, {
    title: '수정',
    key: 'update',
    dataIndex: 'update',
  }, {
    title: '삭제',
    key: 'delete',
    dataIndex: 'delete'
  }];

  const data = [{
    key: '1',
    id: 1,
    name: 'John Brown',
    comment: 'eotrmf',
    update: <Button onClick={onModify}>수정</Button>,
    delete: <Button>삭제</Button>
  }, {
    key: '2',
    id: 2,
    name: 'Jim Green',
    comment: 'ㅈㅂㅇ',
    update: <Button>수정</Button>,
    delete: <Button>삭제</Button>
  }, {
    key: '3',
    id: 3,
    comment: 'ㅎㄱㅂㅎ',
    update: <Button>수정</Button>,
    delete: <Button>삭제</Button>
  }];
  return (
    <Table
      columns={columns}
      dataSource={data}
      style={{ width: '700px' }}
    />
  );
};

export default CommentList;