import React from 'react';
import { Form, Input, Button } from 'antd'

const AddComment = ({onChange, onSubmit, commenter, comment}) => {
  return (
    <div>
      <h2>댓글 등록</h2>
      <Form layout='inline'>
        <Form.Item>
          <Input placeholder='사용자 아이디' onChange={onChange} value={commenter} name='commenter'/>
          <Input placeholder='댓글' onChange={onChange} value={comment} name='comment'/>
          <Button onClick={onSubmit}>등록</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddComment;