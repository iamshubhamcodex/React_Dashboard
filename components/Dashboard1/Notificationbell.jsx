import React, { useState } from 'react';
import { BsBell} from 'react-icons/bs';

const NotificationBell = () => {
  const [showNotification, setShowNotification] = useState(false);

  const toggleNotification = () => {
    setShowNotification(!showNotification);
    // You can add logic here to handle notifications
  };

  return (
    <div className="notification-bell" onClick={toggleNotification}>
      <BsBell className="bell-icon" />
      {showNotification && <div className="notification-dot"></div>}
    </div>
  );
};

export default NotificationBell;