import { useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>

            {
                users.map(user =><div key={user._id} className="p-2 flex items-center rounded-xl justify-center font-bold text-green-700 bg-sky-100 mt-2 w-1/2 mx-auto"><p >{user.name}</p>
                  <button type="submit" className="text-white ml-4 bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-xs py-2.5 px-5 w-full sm:w-auto">
                  Update</button>
                </div> )
            }
            
        </div>
    );
};

export default Users;