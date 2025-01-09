import * as React from 'react';

interface Props {
  totalPrice: number;
}


const Price: React.FC<Props> = ({ totalPrice }) => {
  return (
    <p>Price: <strong>{totalPrice}</strong></p>
  );
};

export default Price;