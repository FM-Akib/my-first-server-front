import { Link } from "react-router-dom";

const Home = () => {
  const handlesingup=(e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user={name, email, password}
    console.log(user);

  fetch('http://localhost:5000/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  }

  return (
 <div className="">
          
<div className="w-80 mx-auto my-10 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-green-900 text-white">
  <h2 className="text-2xl font-bold pb-5">SignUp</h2>
  <form onSubmit={handlesingup}>
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium">Your name</label>
      <input
        type="text"
        id="name"
        name="name"
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
        placeholder="Enter your name."
        required
        
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium">Your email</label>
      <input
        type="email"
        id="email"
        name="email"
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
        placeholder="andrew@mail.com"
        required
       
      />
    </div>
    <div className="mb-4">
      <label  className="block mb-2 text-sm font-medium">Your password</label>
      <input
        type="password"
        id="password"
        name="password"
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
        placeholder="*********"
        required
       
      />
    </div>
    <div>
      <p className="text-red-500 pb-5"></p>
    </div>
    <div className="flex items-center justify-between mb-4">
      <button
        type="submit"
        className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-xs py-2.5 px-5 w-full sm:w-auto"
      >
        Register
      </button>
      <div className="flex items-center text-xs">
        <p>Already have an account?</p>
        <p className="underline cursor-pointer ml-1">Sign in</p>
      </div>
    </div>
  </form>
</div>

<div className="flex justify-center">
  <Link to="/dashboard">
<button type="submit" className="text-white  bg-red-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-md text-xl mb-10 py-2.5 px-5 w-full sm:w-auto">
        Go To Profile
      </button></Link>
      </div>


        </div>
    );
};

export default Home;