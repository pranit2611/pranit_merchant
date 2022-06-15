import React from "react";
import { useNavigate } from "react-router-dom";

const EditDelivery = () => {
  const navigate = useNavigate();

  const mainPage = () => {
    navigate("/deliveryrate");
  };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <h4 class="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">
        Edit Delivery Rate 
      </h4>
      <div class="flex space-x-2 justify-end">
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => mainPage()}
        >
          Back
        </button>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Edit
        </button>
      </div>

      <form>
        <div class="grid xl:grid-cols-2  m:gap-2">
          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="unit"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Voucher Name
            </label>
            <input
              type="text"
              class="form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="unit"
              value="ASA"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="unit"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Actual Amount
            </label>
            <input
              type="text"
              class="form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="unit"
              value="1000"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="unit"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Discounted Amount
            </label>
            <input
              type="text"
              class="form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="unit"
              value="100"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="unit"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Validity From
            </label>
            <input
              type="text"
              class="form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="unit"
              value="2022-05-05"
            />
          </div>
          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="unit"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Validity To
            </label>
            <input
              type="text"
              class="form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="unit"
              value="2022-05-05"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="unit"
              class="form-label inline-block mb-2 text-gray-700"
            >
              ZipCode
            </label>
            <input
              type="text"
              class="form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="unit"
              value="400111"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditDelivery;
