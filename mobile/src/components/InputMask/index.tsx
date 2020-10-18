import React, { useRef, useState, useEffect } from 'react';
import { TextInputMaskProps } from 'react-native-masked-text';
import { useField } from '@unform/core';

import { InputBlock } from './styles';

interface InputProps extends TextInputMaskProps {
  name: string;
}

interface InputValueReference {
  value: string;
}

const InputMask: React.FC<InputProps> = ({ name, ...rest }) => {
  const [mask, setMask] = useState('');

  const inputRef = useRef(null);

  const { fieldName, registerField, defaultValue = '', error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      getValue(ref: any) {
        return mask;
      },
    });
  }, [fieldName, registerField, mask]);

  return (
    <InputBlock
      ref={inputRef}
      defaultValue={defaultValue}
      value={mask}
      onChangeText={e => setMask(e)}
      {...rest}
    />
  );
};

export default InputMask;
