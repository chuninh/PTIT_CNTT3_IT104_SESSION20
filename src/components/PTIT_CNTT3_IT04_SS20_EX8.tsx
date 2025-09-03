import { useReducer } from "react";

type State = {
  name: string;
  email: string;
};

function userReducer(state: State, action: { field: keyof State; value: string }): State {
  return {
    ...state,
    [action.field]: action.value,
  };
}

export default function UserForm() {
  const initialState: State = { name: "", email: "" };
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        User Information Form
      </h2>

      <div style={{ marginBottom: "15px" }}>
        <label>Tên:</label>
        <input
          type="text"
          value={state.name}
          onChange={(e) =>
            dispatch({ field: "name", value: e.target.value })
          }
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Email:</label>
        <input
          type="email"
          value={state.email}
          onChange={(e) =>
            dispatch({ field: "email", value: e.target.value })
          }
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
      </div>

      <div>
        <h4>Thông tin người dùng:</h4>
        <p>
          <strong>Tên:</strong>{" "}
          {state.name !== "" ? state.name : "(Chưa nhập)"}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          {state.email !== "" ? state.email : "(Chưa nhập)"}
        </p>
      </div>
    </div>
  );
}
