import React from 'react';

import Input from './Input';

export default function InputContainer() {
  return (
    <Input
      value={taskTitle}
      onChange={onChangeTitle}
      onClick={onClickAddTask}
    />
  );
}
