import React from "react";
import "./vieworder.css";
import { Link } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";

const ViewOrder = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div class="box">
        <div class="flex-container">
          <div>
            
            <h6 class="font-medium leading-tight text-base mt-0 mb-2 ">
              simran singh
            </h6>
            <h6 class="font-small leading-tight text-base mt-0 mb-2 ">
              @gmail.com
            </h6>
            <h6 class="font-small leading-tight text-base mt-0 mb-2 ">
              7218650239
            </h6>
          </div>
          
          <div>
            <h6 class="font-medium leading-tight text-base mt-0 mb-2 ">
              KUDAL
            </h6>
            <h6 class="font-small leading-tight text-base mt-0 mb-2 ">
              sitaramteli83@gmail.com
            </h6>
            <h6 class="font-small leading-tight text-base mt-0 mb-2 ">
              7218650239
            </h6>
            
          </div>
          <div class="flex justify-end active">
          <div class="backIcon">
            <Link to="/orders">
              <AiOutlineRollback />
            </Link>
          </div>
        </div>
        </div>
        <hr class="new1"></hr>
        <div className="flex-container">
          <div>
            <h6 class="font-medium leading-tight text-base mt-0 mb-2 ">
              ORDER DATE
            </h6>
            <h6 class="font-small leading-tight text-base mt-0 mb-2 ">
              2022-05-28 18:53:57
            </h6>
          </div>
          <div>
            <h6 class="font-medium leading-tight text-base mt-0 mb-2 ">
              ORDER NO.
            </h6>
            <h6 class="font-small leading-tight text-base mt-0 mb-2 ">
              WO20220528185357141
            </h6>
          </div>
          <div>
            <h6 class="font-medium leading-tight text-base mt-0 mb-2 ">
              ORDER STATUS
            </h6>
            <h6 class="font-small leading-tight text-base mt-0 mb-2 ">
              Done
            </h6>
          </div>
          <div>
            <h6 class="font-medium leading-tight text-base mt-0 mb-2 ">
              ORDER TO
            </h6>
            <h6 class="font-small leading-tight text-base mt-0 mb-2 ">
              Vidya shirke morya redency e wing second floor room no 202, near
              vad Ganesh Mandir pinguli kudal sawantwadi highway XPM3+MP6,
              Hathkhamba-Goa Rd, Tembdhurinagar, Maharashtra 416520, India
            </h6>
          </div>
        </div>
      </div>
      <div class="tablefont">
        <table class="min-w-full auto">
          <thead class="bg-white border-b">
            <tr>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900  text-left"
              >
                MERCHANT
              </th>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-2 py-2 text-left"
              >
                CATEGORY
              </th>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-2 py-2 text-left"
              >
                CLASS.
              </th>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-2 py-2 text-left"
              >
                SUB CLASS.
              </th>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-2 py-2 text-left"
              >
                ITEMS
              </th>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-2 py-2 text-left"
              >
                UNIT
              </th>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-2 py-2 text-left"
              >
                QTY
              </th>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-2 py-2 text-left"
              >
                AMOUNT
              </th>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-2 py-2 text-left"
              >
                TOTAL
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                Burger Nest
              </td>

              <td class="text-sm text-gray-900  font-light px-2 py-2 whitespace-nowrap">
                --- PIZZA/SANDWICH/BURGER PIZZA/SANDWICH/BURGER
              </td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                Chicken Burger
              </td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                Pcs
              </td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                1
              </td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                65
              </td>
              <td class="px-6  py-4 whitespace-nowrap text-md font-medium text-green-900">
                65
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>

              <td class="text-sm text-gray-900  font-light px-2 py-2 whitespace-nowrap"></td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>

              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                SUB TOTAL
              </td>
              <td class="px-6  py-4 whitespace-nowrap text-md font-medium text-green-900">
                65
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>

              <td class="text-sm text-gray-900  font-light px-2 py-2 whitespace-nowrap"></td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>

              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                DISCOUNT AMOUNT
              </td>
              <td class="px-6  py-4 whitespace-nowrap text-md font-medium text-green-900">
                0
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>

              <td class="text-sm text-gray-900  font-light px-2 py-2 whitespace-nowrap"></td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>

              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                ORIZ COMMISSION
              </td>
              <td class="px-6  py-4 whitespace-nowrap text-md font-medium text-green-900">
                4
              </td>
            </tr>

            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>

              <td class="text-sm text-gray-900  font-light px-2 py-2 whitespace-nowrap"></td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>

              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                GST
              </td>
              <td class="px-6  py-4 whitespace-nowrap text-md font-medium text-green-900">
                0
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>

              <td class="text-sm text-gray-900  font-light px-2 py-2 whitespace-nowrap"></td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>

              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>
              <td class="px-2 py-2 whitespace-nowrap text-md font-medium text-gray-900">
                DELIVERY AMOUNT
              </td>
              <td class="px-6  py-4 whitespace-nowrap text-md font-medium text-green-900">
                0
              </td>
            </tr>

            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>

              <td class="text-sm text-gray-900  font-light px-2 py-2 whitespace-nowrap"></td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>

              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900"></td>
              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                FINAL AMOUNT
              </td>
              <td class="px-6  py-4 whitespace-nowrap text-md font-medium text-green-900">
                61
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="footerfont">
        <div class="flex-container">
          <div>
            <h4 class="font-medium leading-tight text-2xl mt-0 mb-2 text-blue-600">
              Assign Employee Details
            </h4>
            <h6 class="font-medium leading-tight text-base mt-0 mb-2 text-blue-600">
              Order Pick Up Time
            </h6>
            <h6 class="font-medium leading-tight text-base mt-0 mb-2 text-blue-600">
              Order Delivery Time:
            </h6>
            <h6 class="font-medium leading-tight text-base mt-0 mb-2 text-blue-600">
              Employee Name:
            </h6>
            <h6 class="font-medium leading-tight text-base mt-0 mb-2 text-blue-600">
              Employee Email:
            </h6>
            <h6 class="font-medium leading-tight text-base mt-0 mb-2 text-blue-600">
              Employee Mobile:
            </h6>
          </div>
          <div class="right">
            <h4 class="font-medium leading-tight text-2xl mt-0 mb-2 text-blue-600">
              Total Amount
            </h4>
            <h3 class="font-large leading-tight text-3xl mt-0 mb-2 text-green-800">
              <span class="text-xxl inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded-full">
                618.00
              </span>
            </h3>
            <h6 class="font-medium leading-tight text-base mt-0 mb-2 text-blue-600">
              Taxes Included
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;
