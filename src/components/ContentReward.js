import React from "react";
import { Button, Space, Skeleton } from 'antd';
// import Skeleton from '@mui/material/Skeleton';

const ContentReward = () => {
//   const [active, setActive] = React.useState(false);
  return (
    <div className="content-reward-container">
      {/* <div class="column-1">
        <Skeleton.Image active={active} />
      </div>

      <div class="column-2">
        <Skeleton.Image active={active} />
        <div className="information"></div>
      </div>
      <div class="column-3">
        <Skeleton.Image active={active} />
        <div className="information"></div>
      </div> */}
      <Skeleton active />
      <Button disabled>Xem cách hoạt động</Button>
    </div>
  );
};

export default ContentReward;
