import { useEffect } from "react";

export default function PTIT_CNTT3_IT04_SS20_EX3() {

  useEffect(() => {
    console.log("Component đã được render lần đầu!");
  }, []);

  return (
    <div>
      <h2>
        Chào mừng bạn đến với ứng dụng của chúng tôi!
      </h2>
    </div>
  );
}
