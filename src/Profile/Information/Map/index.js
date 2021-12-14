import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';


const Map = ({ mapOpen, location }) => {
  const [isModalVisible, setIsModalVisible] = useState(mapOpen);

  useEffect(() => {
    setIsModalVisible(mapOpen);
  }, [mapOpen])

  const handleOk = () => {
    localStorage.setItem('location', location);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Modal title="Change Location" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {location}
      </Modal>
    </div>
  )
}

export default Map;