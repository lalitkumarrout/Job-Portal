import React from "react";
import { Popover, PopoverContent } from "../ui/popover";
import { Button } from "../ui/button";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  
  const {user}=useSelector(store=>store.auth)
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to="/browse">Browse</Link></li>
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
                <Link to="/login"><Button variant="Outline">Login</Button></Link>
                <Link to="/Signup"><Button className='bg-[#6A38C2] hover:bg-[#5b30a6]'>Signup</Button></Link>
              
              
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="">
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Lalit kumar Rout</h4>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Assumenda, voluptatibus!
                    </p>
                  </div>
                </div>
                <div className="flex flex-col my-2 text-grey-600">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2 />
                    <Button variant="link"><Link to="/profile">View Profile</Link></Button>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button variant="link">Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
