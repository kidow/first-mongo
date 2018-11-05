import React from 'react';
import { Form, Input, Button } from 'antd'

const AddUser = ({name, age, married, onChange, onToggle, onSubmit}) => {
  return (
    <div>
      <h2>사용자 등록</h2>
      <Form layout='inline'>
        <Form.Item>
          <Input placeholder='이름' value={name} name='name' onChange={onChange}/>
          <Input placeholder='나이' value={age} name='age' onChange={onChange}/>
          <div onClick={onToggle}>
            <input type='checkbox' value='결혼 여부' checked={married} readOnly/> 결혼 여부
          </div>
          <Button onClick={onSubmit}>등록</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddUser;