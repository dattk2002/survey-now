import React from "react";
import Button from "@mui/material/Button";

const Content = () => {
  return (
    <div className="content-container">
      <div class="column">
        <h3>Thông tin cơ bản</h3>
        <div className="information">
          <p>Họ tên đệm: Nguyễn Thị Lan</p>
          <p>Tên: Hương</p>
          <p>Giới tính: Nữ</p>
          <p>Ngày sinh: 28/12/2000</p>
          <p>Quốc tịch: Việt Nam</p>
          <p>Mối quan hệ: Độc thân</p>
        </div>
      </div>

      <div class="column">
        <h3>Liên lạc</h3>
        <div className="information">
          <p>Địa chỉ: Khu Công Nghệ Cao</p>
          <p>Tỉnh/Thành Phố: TP.HCM</p>
          <p>Số Điện Thoại: 0123456789</p>
          <p>Email: Email@gmail.com</p>
        </div>
      </div>
      <div class="column">
        <h3>Nghề Nghiệp</h3>
        <div className="information">
          <p>Chức Vụ: Giảng Viên</p>
          <p>Lĩnh Vực: Giáo Dục</p>
          <p>Thu Nhập: 100.000.000 VND</p>
          <p>Nơi Công Tác: Đại Học FPT - TP.HCM</p>
        </div>
      </div>
      <div class="column">
        <h3>Sở Thích</h3>
        <div className="information">
          <p>Sở Thích 1: Nghe Nhạc</p>
          <p>Sở Thích 2: Đọc Sách</p>
        </div>
      </div>
    </div>
    
  );
};

export default Content;
