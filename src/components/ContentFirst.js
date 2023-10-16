import React from "react";
import { Button, Space, Row, Col } from "antd";
import { Divider } from "antd";
import img1 from "../assets/image-1.png";
import img2 from "../assets/image-2.png";
import img3 from "../assets/image-3.png";


const ContentFirst = () => {
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
            <img src={img1} alt="img-1" />;
          </div>
        </div>
        <p>
          Bắt đầu bằng cách tạo một tài khoản SurveyNow miễn phí. Ngoài một số
          thông tin cơ bản, bạn sẽ cần phải xác thực tài khoản để bắt đầu điền
          khảo sát nhận thưởng.
        </p>
      </div>

      <div class="column">
        <div className="mini-column">
          <div className="div-left">
            {/* <Button type="dashed">Bước 1</Button> */}
            <button type="button" className="btn-step">
              Bước 2
            </button>
            <p className="div-text">ĐIỀN KHẢO SÁT</p>
          </div>
          <div className="div-right">
            <img src={img2} alt="img-2" />;
          </div>
        </div>
        <p>
          Khi bạn đã xác thực tài khoản thành công, bạn sẽ có quyền truy cập vào
          danh sách các khảo sát có sẵn. Hãy lựa chọn những khảo sát phù hợp với
          sở thích và mục tiêu của bạn. Hãy điền các câu trả lời một cách chân
          thực để đảm bảo sự chính xác của dữ liệu.
        </p>
      </div>
      <div class="column">
        <div className="mini-column">
          <div className="div-left">
            {/* <Button type="dashed">Bước 1</Button> */}
            <button type="button" className="btn-step">
              Bước 3
            </button>
            <p className="div-text">NHẬN PHẦN THƯỞNG</p>
          </div>
          <div className="div-right">
            <img src={img3} alt="img-3" />;
          </div>
        </div>
        <p>
          Khi bạn hoàn thành các khảo sát, điểm thưởng sẽ được chuyển vào tài
          khoản của bạn. Chúng tôi cam kết trả tiền thưởng một cách nhanh chóng
          và đáng tin cậy. Bạn có thể rút tiền thưởng qua nhiều phương thức
          thanh toán như ngân hàng, ví điện tử,...
        </p>
      </div>
    </div>
  );
};

export default ContentFirst;
