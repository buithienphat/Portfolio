import React, { useEffect } from "react";
import "./index.css";

const Test = () => {
    useEffect(() => {
        document
            .getElementById("text-container")
            .addEventListener("mousemove", function (event) {
                // Tính toán vị trí của chuột trong phần tử
                const x = event.clientX - this.offsetLeft;
                const y = event.clientY - this.offsetTop;

                // Tính toán tọa độ tương ứng trong phần tử và lấy màu sắc
                const pixel = this.getContext("2d").getImageData(
                    x,
                    y,
                    1,
                    1
                ).data;
                const color = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;

                // Đổi màu chữ cái thành màu của pixel đó
                document.getElementById("color-change-text").style.color =
                    "red";
            });
    }, []);

    return (
        <div id="text-container">
            <p id="color-change-text">Your text here</p>
        </div>
    );
};

export default Test;
