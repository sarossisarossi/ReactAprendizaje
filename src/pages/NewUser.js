import "../styles/NewUser.css";
import { useState } from "react";
import { validateEmail } from "../utilities/utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function NewUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    return (
      (firstName.trim().length>=1) &&
      validateEmail(email) &&
      password.value.length>=8 &&
      (role === "individual" || role === "business")
    );
  };

  

  const clearForm = () => {
    // Implement this function
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
                ...password,
                value:"",
                isTouched:false});
    setRole("role")
    



  };

  const handleSubmit = (e) => {
    e.preventDefault();   // ✅ Evita que la página se recargue
    alert("Account created!");
    clearForm();
    
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
            />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
            />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
            />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              type="password"   // 👈 esto hace que se vea como ****
              value={password.value}
              onFocus={() => console.log("Entré al input")}
              onBlur={() => console.log("Salí del input")}
              onChange={(e) => setPassword({
                ...password,
                value:e.target.value,
                isTouched:true})}
              placeholder="Password" // esto hace que se vea como ****
            />
               {password.isTouched && password.value.length < 8 && (
        <PasswordErrorMessage />
      )}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default NewUser;

// codigo alternativo para la validacion del password
{/* <div className="Field"> 
           <label> 
             Password <sup>*</sup> 
           </label> 
           <input 
             value={password.value} 
             type="password" 
             onChange={(e) => { 
               setPassword({ ...password, value: e.target.value }); 
             }} 
             onBlur={() => { 
               setPassword({ ...password, isTouched: true }); 
             }} 
             placeholder="Password" 
           /> 
           {password.isTouched && password.value.length < 8 ? ( 
             <PasswordErrorMessage /> 
           ) : null} 
         </div>  */}