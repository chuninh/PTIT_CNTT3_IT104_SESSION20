import { useEffect, useState } from "react";

export default function PageTitle() {
  const [name, setName] = useState("");

  useEffect(() => {
    if (name.trim() !== "") {
      document.title = `Xin chào, ${name}!`;
    } else {
      document.title = "Chào mừng đến với trang của chúng tôi!";
    }
  }, [name]);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Chào mừng bạn đến với trang của chúng tôi!</h2>
      <input
        type="text"
        placeholder="Nhập tên của bạn"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "8px", width: "250px", marginTop: "10px" }}
      />
      <p>Tiêu đề của trang sẽ thay đổi khi bạn nhập tên vào trường trên.</p>
    </div>
  );
}
