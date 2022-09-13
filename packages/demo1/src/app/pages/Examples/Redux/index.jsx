import React from 'react';
import { useSelector, useDispatch } from '@xarc/react-redux';
import { Button, Card, Divider, Typography } from '@mui/material';

import { getInfo } from './selectors';
import { updateSomething } from './actions';

export const ReduxDemo = () => {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        textAlign: 'center',
        background: '#efefef',
        padding: '25px',
        margin: '50px',
      }}
    >
      <Divider />
      <Typography variant="body1" component="div">
        <Typography variant="h2">Redux State Sharing</Typography>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            padding: 20,
          }}
        >
          <Typography variant="h5">Core App State</Typography>
          <Card style={{ padding: 20 }}>
            <Typography variant="h4">Name:</Typography>
            <Typography variant="h4">Login Id:</Typography>
            <Typography variant="body1" style={{ wordBreak: 'break-all' }}>
              Auth Token:
            </Typography>
          </Card>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            padding: 20,
          }}
        >
          <Typography variant="h5">Sub App State</Typography>
          <Card style={{ padding: 20 }}>
            <Typography variant="h4" fontSize="small">
              Data: {useSelector(getInfo)?.msg}
            </Typography>
            <div>
              <Button
                color="secondary"
                fontSize="small"
                onClick={() =>
                  dispatch(
                    updateSomething({ msg: 'Subapp State' + Math.random() })
                  )
                }
              >
                Update Sub App State
              </Button>
            </div>
          </Card>
        </div>
      </Typography>
    </div>
  );
};
export default ReduxDemo;
