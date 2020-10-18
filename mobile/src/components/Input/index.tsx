import React, { useEffect, useRef } from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { InputBlock } from './styles';

interface InputProps extends TextInputProps {
  name: string;
}

interface InputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({ name, onChangeText, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue = '', error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <InputBlock
      ref={inputRef}
      defaultValue={defaultValue}
      onChangeText={value => {
        inputValueRef.current.value = value;
      }}
      {...rest}
    />
  );
};
export default Input;
