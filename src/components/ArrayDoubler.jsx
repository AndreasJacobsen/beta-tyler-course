import React from 'react';
import '../App.css';

function doubler(x) {
  const results = x * 2;
  return results;
}

function ArrayDoubler({ items }) {
  const doublerReciver = items.map(item => <> {doubler(item)} </>);
  const originalValue = items.map(item => <> {item}</>);

  return (
    <div>
      Original value: {originalValue} <br />
      Doublet value:{doublerReciver}
    </div>
  );
}

export default ArrayDoubler;
