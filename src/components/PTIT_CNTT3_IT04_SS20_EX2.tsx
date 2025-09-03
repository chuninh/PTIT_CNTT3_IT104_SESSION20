import { useState } from 'react'

export default function PTIT_CNTT3_IT04_SS20_EX2() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [submit, setSubmit] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (name != "" && email != "") {
            setSubmit(true)
        }else{
            setSubmit(false)
        }


    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <p>thong tin nguoi dung</p>
                <input type="text"
                    placeholder='nhap ten'
                    name='name' value={name}
                    onChange={(e) => setName(e.target.value)}
                /><br />
                <input type="text"
                    placeholder='nhap email'
                    name='email' value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br />
                <button type='submit' >submit</button>
                {submit ? (
                    <div>
                        {(
                            <p>ten:{name}</p>
                        )}

                        <p>email:{email}</p>
                    </div>
                ) : ""}

            </form>
        </div>
    )
}
