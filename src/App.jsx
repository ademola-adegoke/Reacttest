import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [URL, setURL] = useState([])
  let endpoint = "https://v2.jokeapi.dev/joke/any"
  const fetchRandomBlogPost = () => {
    axios.get(endpoint)
    .then((response) => {
      console.log(response.data.setup);
      setURL(response.data.setup)
      console.log(URL);
    })
    .then((err) => {
      console.log(err);
    })
  }

  return (
    <>
    <div className="col-lg-8 mx-auto">

    <button  onClick={fetchRandomBlogPost} className='btn bg-primary text-lg form-control mt-5  text-light fw-bold'>GET</button>
    <p className='col card mt-5 bg-primary text-light '>{URL}</p>
    </div>
    </>
  )
}

export default App
