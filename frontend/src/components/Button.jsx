import Button from 'react-bootstrap/Button';
import React from 'react';

function BlockExample() {
  return (
    <div >
      <Button type='submit' variant="secondary" size="lm">
        Enviar Datos
      </Button>
      {/* <Button variant="secondary" size="lg">
        Block level button
      </Button> */}
    </div>
  );
}

export default BlockExample;