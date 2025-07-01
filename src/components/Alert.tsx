import * as React from 'react';

type AlertProps = {
  type: 'success' | 'error';
  message: string;
};

export default function Alert({ type, message }: AlertProps) {
  return (
    <div className={`my-2 px-4 py-2 rounded text-white ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
      {message}
    </div>
  );
} 