import { useState } from 'react'

export default function PTIT_CNTT3_IT04_SS20_EX1() {
    const [value, setValue] = useState("");


    return (
        <div>
            <p>kiem tra do dai chuoi nhap vao</p>
            <input type="text" name='value' onChange={(e) => setValue(e.target.value)} value={value} />
            {value.length > 5 && (
                <div style={{ backgroundColor: "red", color: "white" }}>
                    chuoi nhap vao dai hon 5 ki tu
                </div>
            )}

        </div>
    )
}
