import React from 'react';
import { Form, Input, Checkbox, Button } from 'antd'

const AddUser = () => {
  return (
    <div>
      <h2>사용자 등록</h2>
      <Form layout='inline'>
        <Form.Item>
          <Input placeholder='이름'/>
          <Input placeholder='나이'/>
          <Checkbox>결혼 여부</Checkbox><br />
          <Button>등록</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddUser;