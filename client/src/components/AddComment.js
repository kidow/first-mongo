import React from 'react';
import { Form, Input, Button } from 'antd'

const AddComment = () => {
  return (
    <div>
      <h2>댓글 등록</h2>
      <Form layout='inline'>
        <Form.Item>
          <Input placeholder='사용자 아이디' />
          <Input placeholder='댓글' />
          <Button>등록</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddComment;