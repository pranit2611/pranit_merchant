import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import "../../pages/view.css";

const ViewManageItem = () => {
  return (
    <div class="container">
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <div class="flex justify-end active">
          <div class="backIcon">
            <Link to="/manageItem">
              <AiOutlineRollback />
            </Link>
          </div>
        </div>
        <div class="flex justify-center">
          <ul class="bg-white rounded-lg w-96 text-gray-900">
            <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
            merchanttype: Restraunt
             </li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">
            classification: Pizza
            </li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">
            itemname: The Pasta Place
            </li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">
            Category: veg
            </li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">
            Classification : chapati
            </li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">
             sub Classification : coke
            </li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">
            Group Category : Bakery 
            </li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">
            Brand :Amul
            </li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">
            Quantity :1000
            </li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">
            Net Weight : 1000
            </li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">
            Price : 2000
            </li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">
            Discount : 100
            </li>
            
            <li class="px-6 py-2 w-full rounded-b-lg">Status : Available </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ViewManageItem;
