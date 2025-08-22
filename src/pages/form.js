import { useState } from "react";
function FormContact(){
    const [name,setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        console.log('Form submitted');
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
            <label htmlFor ="name">Name:</label>
            <input id="name" type="text" placeholder="Name" name="name" value = {name} onChange={e => setName(e.target.value)} />
            <button disabled= {!name} type="submit">submit</button>
            </fieldset>
            </form>
        </div>
    )
}
export default FormContact;