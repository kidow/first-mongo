import React from 'react';
import { Table, Button } from 'antd'

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

const CommentList = ({onModify, onRemove, comments}) => {
  // const commentList = comments.map(item => {
  //   return Object.assign({}, {
  //     id: item._id,
  //     comment: item.comment,
  //     name: item.name,
  //     update: <Button onClick={onModify}>수정</Button>,
  //     delete: <Button onClick={onRemove}>삭제</Button>
  //   })
  // })

  const data = [{
    key: '1',
    id: 1,
    name: 'John Brown',
    comment: 'eotrmf',
    update: <Button onClick={onModify}>수정</Button>,
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