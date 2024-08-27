import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";

import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

const Job = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600 "> 2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2 ">
        <Button>
          <Avatar>
            <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-600">India</p>
        </div>
      </div>
      <div className="font-bold text-lg my-2 ">
        <h1>Title</h1>
        <p className="text-sm text-gray-600 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi soluta
          impedit, in magnam eum iste provident quae nemo saepe distinctio.
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4 ">
        <Badge className="text-blue-700 font-bold " variant="ghost">
          12 Positions
        </Badge>
        <Badge className="text-[#F83002]" variant="ghost">
          Part Time
        </Badge>
        <Badge className="text-[#7209b7]" variant="ghost">
          24 Lpa
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button variant='outline'>Details</Button>
        <Button className='bg-[#7209b7]'>Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;
