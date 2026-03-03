import { useState, useCallback } from 'react';

export function usePhoneFormatter(initialValue: string = '') {
  const [phone, setPhoneRaw] = useState(initialValue);

  const setPhone = useCallback((value: string) => {
    // Remove all non-digits
    const cleaned = ('' + value).replace(/\D/g, '');
    
    // Check if the input is of correct length
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    
    if (match) {
      let formatted = match[1];
      if (match[2]) {
        formatted = `(${formatted}) ${match[2]}`;
      }
      if (match[3]) {
        formatted = `${formatted}-${match[3]}`;
      }
      setPhoneRaw(formatted);
    } else if (cleaned.length <= 10) {
        setPhoneRaw(cleaned);
    }
  }, []);

  return [phone, setPhone] as const;
}
