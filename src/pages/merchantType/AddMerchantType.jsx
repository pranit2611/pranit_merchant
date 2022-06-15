import React from "react";
import { useNavigate } from "react-router-dom";

const AddMerchantType = () => {
  const navigate = useNavigate();

  const mainPage = () => {
    navigate("/merchantType");
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <h4 class="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">
        Merchant Type Add :
      </h4>
      <div class="flex space-x-2 justify-end">
        <button
          type="button"
          class="text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
          style={{ backgroundColor: '#03C9D7' }}
          onClick={() => mainPage()}
        >
          Back
        </button>
        <button
          type="button"
          class="text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
          style={{ backgroundColor: '#03C9D7' }}
        >
          Add
        </button>
      </div>

      <form>
        <div class="grid xl:grid-cols-3  m:gap-2">
          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="firstname"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Merchant Type
            </label>
            <select
              class="form-select appearance-none
            block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option selected>Select Type</option>
              <option value="1">Manufacturer</option>
              <option value="2">Wholeseller</option>
              <option value="3">Retailer</option>
              <option value="4"></option>
            </select>
          </div>
          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="lastname"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Domain
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
              id="lastname"
              placeholder="Enter Domain"
            />
          </div>

        </div>
      </form>
    </div>
  );
};

export default AddMerchantType;