import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

const AddFoodForm = ({setFoods}) => {

    const [name,setName] = useState('')
    const [image, setImage] = useState('')
    const [calories,setCalories] = useState('')
    const [servings, setServings] = useState('')
    const [message, setMessage] = useState(null);

    const handleSubmit = event => {
        event.preventDefault()
        console.log("submit")

        setFoods((prevFoods) => {
            return[...prevFoods, {
                id: uuidv4(),
                name:name,
                calories:calories,
                image:image,
                servings:servings
            }]

        })
        setName('')
        setImage('')
        setCalories('')
        setServings('')
        setMessage("Your food was added successfully!");
    }


    return(
        <div className="Form">
            <div className="formTitle">Add new Food</div>
            {message && <div className={message.includes("successfully") ? "successMessage" : "errorMessage"}>{message}</div>}
            <form onSubmit={handleSubmit}>
                <label>
                   <span>Name</span> 
                    <input
                        name="name"
                        type="text"
                        placeholder="name"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                </label>
                <label>
                    <span>Image</span>
                    <input
                        name="image"
                        type="text"
                        placeholder="image"
                        value={image}
                        onChange={event => setImage(event.target.value)}
                    />
                </label>
                <label>
                    <span>Calories</span>
                    <input
                        name="calories"
                        type="number"
                        placeholder="number"
                        value={calories}
                        onChange={event => setCalories(event.target.value)}
                    />
                </label>
                <label>
                    <span>Servings</span>
                    <input
                        name="servings"
                        type="number"
                        placeholder="number"
                        value={servings}
                        onChange={event => setServings(event.target.value)}
                    />
                </label>
                <button className="formSubmit" type="submit">Create</button>
            </form>
        </div>
    )
}

export default AddFoodForm;