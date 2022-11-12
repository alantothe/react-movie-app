import { useState } from "react"





const MovieFormPage = (props) => {
    const { handleAddMovie } = props;
    const [title, setTitle] = useState("");
    return(
        <div>
        <h1> Movie Form Page</h1>
        <input
        placeholder='Enter Movie Title'
        type='text'
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>

<button onClick={()=>{
	handleAddMovie(title)
}}>Add Movie</button>

        </div>
    )
}

export default MovieFormPage;