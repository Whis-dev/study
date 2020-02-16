import { useState } from 'react';

export const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = event => {
      const {
        target: { value }
      } = event;
      let willUpdate = true;
  
      (typeof(validator) === "function") && (willUpdate = validator(value))
      
      willUpdate && setValue(value);
    };
  
    return { value, onChange };
  };