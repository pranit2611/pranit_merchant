import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import "../../pages/view.css";

const ConfirmOrder = () => {
  return (
    <div class="container">
      <div className="m-3 md:m-10 mt-24 p-0 md:p-6 bg-white rounded-3xl">
        <div class="flex justify-end active">
          <div class="backIcon">
            <Link to="/orders">
              <AiOutlineRollback />
            </Link>
          </div>
        </div>
        <div class="flex justify-center">
          <ul class="bg-white rounded-lg w-96 text-gray-900">
            <div class="data">
              <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
                Your Order is Confirmed With Id : F02000
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
