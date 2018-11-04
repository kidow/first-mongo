import React from 'react';
import { Form, Input, Checkbox, Button } from 'antd'

const AddUser = ({name, age, onChange}) => {
  return (
    <div>
      <h2>사용자 등록</h2>
      <Form layout='inline'>
        <Form.Item>
          <Input placeholder='이름' value={name} name='name' onChange={onChange}/>
          <Input placeholder='나이' value={age} name='age' onChange={onChange}/>
          <Checkbox>결혼 여부</Checkbox><br />
          <Button>등록</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddUser;