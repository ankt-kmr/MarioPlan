import { useState } from "react";

function SignIn() {
    const [state, setstate] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setstate({
            [e.target.id]: (e.target.value)
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
    }

        return(
            <div className="continer">
                <form onSubmit={handleSubmit} className='white'>
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={handleChange} />
                    </div>
                    
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={handleChange}  />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">LogIn</button>
                    </div>
                </form>
            </div>
        )
}

export default SignIn;