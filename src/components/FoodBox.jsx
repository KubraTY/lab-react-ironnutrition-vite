const FoodBox = ({ foods , onDelete }) => {
    
    return (
        <>
            {foods.map((food) => (
                <div key={food.id} style={{border:"solid", borderColor:"black", borderBottomWidth:1, padding:20, marginBottom:10}} >
                    <p style={{fontWeight:700}}>{food.name}</p>

                    <img src={food.image} style={{width:300}}/>

                    <p>Calories: {food.calories}</p>
                    <p>Servings {food.servings}</p>

                    <p>
                        <b>Total Calories: {food.servings * food.calories} </b> kcal
                    </p>

                    <button onClick={() => onDelete(food.id)}>Delete</button>
                </div>
            ))}

        </>

    )

}

export default FoodBox;