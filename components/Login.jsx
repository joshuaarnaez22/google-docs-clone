
import Button from "@material-tailwind/react/Button";
import {signIn} from "next-auth/client"
import Image from "next/image"
function Login() {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen">
                <Image 
                src="https://www.wired.com/wp-content/uploads/2016/04/Google-Docs-Icon-lead-582x437.jpg"
                width="550"
                height="300"
                objectFit="contain"
                />
                 <Button onClick={() => signIn()} color="blue" className="border-0 ">
                     Login
                  </Button>
        </div>
    )
}

export default Login 
