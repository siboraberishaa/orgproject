import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const Preloader = () => {
  return (
    <>
        <Spin
        className='preloader'
          indicator={
            <LoadingOutlined
              style={{
                fontSize: 100,
                color: '#ffbc3b'
              }}
              spin
            />
          }
        />
    </>
  )
}

export default Preloader