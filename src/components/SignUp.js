import React from 'react'

class SignUp extends React.Component{



    render(){
        return (
            <form>
            <h3>Sign Up</h3>
            <div className="form-group">
                <label>Username:</label>
                <input type="text" className="form-control" placeholder="Enter Username" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            {/* <p className="forgot-password text-right">
                Already registered <a href="#">sign in?</a>
            </p> */}
        </form>
       )  
    }
}

export default SignUp;

// you need to fetch all the dogs or just look at the dogs state 