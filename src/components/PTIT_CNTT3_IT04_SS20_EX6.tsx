import { useEffect, useRef, useState } from "react";

export default function ModalFocusExample() {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus(); // tự động focus khi modal mở
    }
  }, [isOpen]);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Ứng dụng React với Modal và Focus Input</h2>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: "10px 20px",
          marginTop: "20px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Mở Modal
      </button>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              minWidth: "300px",
            }}
          >
            <h3>Đăng nhập</h3>
            <input
              ref={inputRef}
              type="text"
              placeholder="Nhập tên người dùng"
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "10px",
                marginBottom: "15px",
              }}
            />
            <button
              onClick={() => setIsOpen(false)}
              style={{
                padding: "8px 15px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
