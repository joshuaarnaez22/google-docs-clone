
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useSession } from "next-auth/client";
import {signOut} from "next-auth/client"


const Header = () => {
    const [session] = useSession();
    return (
        <header className="flex items-center sticky top-0 z-50 px-4 py-2 bg-white shadow-md">
            <Button color="white" iconOnly={true} ripple="dark" rounded={true} className="h-20 w-20 border-0 ">
            <Icon color="gray" name="menu" size="3xl"/>
           </Button>

            <Icon color="blue" name="description" size="5xl"/>
            <h1 className="text-gray-400 text-2xl ml-2 mr-5">Docs</h1>

            <div className="flex items-center flex-grow  py-2 px-2 bg-white-100  rounded-lg shadow-md focus-within:text-gray-600  focus-within:shadow-lg hover:shadow-lg md:mx-16">
            <Icon color="gray" name="search" size="3xl"/>
            <input type="text" className="flex-grow  outline-none px-5 text-base bg-transparent" placeholder="Search"/>
            </div>

            <Button color="white" iconOnly={true} ripple="dark" rounded={true} className="h-20 w-20 border-0">
            <Icon color="gray" name="apps" size="3xl"/>
           </Button>
           <img
            loading="lazy" 
            src={session?.user?.image}
            alt=""
            className="cursor-pointer h-12 w-12 rounded-full mx-2"
            onClick={signOut}
            />
        </header>
    )
}

export default Header
