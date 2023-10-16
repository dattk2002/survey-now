import React from "react";
import { Button, Space } from "antd";
import img4 from "../assets/image-4.png";
import img5 from "../assets/image-5.png";
import img6 from "../assets/image-6.png";
const ContentSecond = () => {
  return (
    <div className="content-container">
      <div class="column">
        <div className="mini-column">
          <div className="div-left">
            {/* <Button type="dashed">Bước 1</Button> */}
            <button type="button" className="btn-step">
              Bước 1
            </button>
            <p className="div-text">ĐĂNG KÍ</p>
          </div>
          <div className="div-right">
            <img src={img4} alt="img-4" />;
          </div>
        </div>
        <p>
          Bắt đầu bằng cách tạo một tài khoản SurveyNow miễn phí. Chỉ cần cung
          cấp một số thông tin cơ bản là bạn đã trở thành một nhà tạo khảo sát
          trên SurveyNow.
        </p>
      </div>

      <div class="column">
        <div className="mini-column">
          <div className="div-left">
            {/* <Button type="dashed">Bước 1</Button> */}
            <button type="button" className="btn-step">
              Bước 2
            </button>
            <p className="div-text">ĐĂNG KHẢO SÁT</p>
          </div>
          <div className="div-right">
            <img src={img5} alt="img-5" />;
          </div>
        </div>
        <p>
          Tạo các khảo sát theo nhu cầu của bạn. Với giao diện dễ sử dụng, bạn
          có thể lựa chọn từ nhiều loại câu hỏi, tùy chỉnh để tạo ra các khảo
          sát chất lượng chỉ trong vài phút. Ngoài ra, bạn cũng có thể đăng link
          khảo sát của các nền tảng khác. Đặt các tiêu chí và đối tượng mục tiêu
          để khảo sát đến được người phù hợp.
        </p>
      </div>
      <div class="column">
        <div className="mini-column">
          <div className="div-left">
            {/* <Button type="dashed">Bước 1</Button> */}
            <button type="button" className="btn-step">
              Bước 3
            </button>
            <p className="div-text">NHẬN KẾT QUẢ</p>
          </div>
          <div className="div-right">
            <img src={img6} alt="img-6" />;
          </div>
        </div>
        <p>
          Bạn sẽ nhận được kết quả từng khảo sát một cách chi tiết và dễ hiểu
          với các phân tích dữ liệu và thống kê. Điều này giúp bạn nắm bắt thông
          tin một cách trực quan để đưa ra các quyết định tốt hơn và tối ưu hóa
          hoạt động của bạn.
        </p>
      </div>
    </div>
  );
};

export default ContentSecond;
