import { RegisterFormContext } from '../../../contexts/RegisterFormContext';
import React, { useContext } from 'react';
import { Alert } from 'react-bootstrap';

const Msg = (props) => {

    const { setErr } = useContext(RegisterFormContext);
    
    return (
        <Alert
            variant="warning"
            onClose={() => setErr(false)}
            dismissible
        >
          {props.children}
      </Alert>
    );
};

export default Msg;