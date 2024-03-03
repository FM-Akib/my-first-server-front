import { split } from "postcss/lib/list";
import { useLoaderData, useLocation} from "react-router-dom";


const Dashboard = () => {
    const user = useLoaderData();
   
    const location = useLocation();
    const p = location.pathname;
    // console.log(p);

    const pp = p.split('/')
    // console.log(pp[2]);
    
    const handleupdate=(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user={name, email, password}
          console.log(user);
    
      fetch(`http://localhost:5000/users/${pp[2]}`, {
      method: 'PUT',
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
        <div className="flex p-10 gap-4">
           <div className="p-10 w-1/2 bg-white overflow-hidden shadow rounded-lg border">
    <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
            User Profile
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
            This is some information about the user.
        </p>
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Full name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user.name}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.email}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Phone number
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    (123) 456-7890
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    123 Main St<br/>
                     Anytown, USA 12345
                </dd>
            </div>
        </dl>
    </div>
</div>







<div className="p-10 w-1/2 mx-auto my-10 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg  bg-green-900 text-white">
  <h2 className="text-2xl font-bold pb-5">Update Info</h2>
  <form onSubmit={handleupdate}>
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium">Your name</label>
      <input
        type="text"
        id="name"
        name="name"
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
        placeholder= {user.name}
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
        placeholder= {user.email}
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
        placeholder= {user.password}
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
        Update Information
      </button>
      
    </div>
  </form>
</div>
        </div>
    );
};

export default Dashboard;