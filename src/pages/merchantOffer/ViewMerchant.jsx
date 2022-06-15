import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import "../../pages/view.css";

const ViewMerchant = () => {
  return (
    <div class="container">
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <div class="flex justify-end active">
          <div class="backIcon">
            <Link to="/merchantoffer">
              <AiOutlineRollback />
            </Link>
          </div>
        </div>
        <div class="flex justify-center">
          <ul class="bg-white rounded-lg w-96 text-gray-900">
            <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
            name: Kamlesh,
    
            </li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">
            description: Eng,
   
            </li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">
            discount: 2000</li>
            
                  
            
            <li class="px-6 py-2 border-b border-gray-200 w-full">
              Mobile number :9898989898
            </li>
            <li class="px-6 py-2 w-full rounded-b-lg">Status : Not Yet </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ViewMerchant;
