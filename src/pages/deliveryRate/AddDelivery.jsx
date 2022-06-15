import React from "react";
import { useNavigate } from "react-router-dom";

const AddDelivery = () => {
  const navigate = useNavigate();

  const mainPage = () => {
    navigate("/deliveryrate");
  };
  return (
    <div>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <h4 class="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">
          Delivery Rate 
        </h4>
        <div class="flex space-x-2 justify-end">
          <button
            type="button" class="backButton"
           
            onClick={() => mainPage()}
          >
            Back
          </button>
          <button
            type="button" class="addButton">
           
            Add
          </button>
        </div>

        <form>
          <div class="grid xl:grid-cols-2  m:gap-2">
            <div class="relative z-0 p-2 w-full mb-6 group">
              <label>Delivery Amount Range</label>
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
                <option value="1">0 to 200</option>
                <option value="2">200 to 500</option>
                <option value="3">500 to 750</option>
                <option value="4">750 to 100000</option>
              </select>
            </div>

            <div class="relative z-0 p-2 w-full mb-6 group">
              <label>Delivery KM Range</label>
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
                <option value="1">0 to 3</option>
                <option value="2">3 to 5</option>
                <option value="3">5 to 7</option>
                <option value="4">7 to 1000</option>
              </select>
            </div>

            <div class="relative z-0 p-2 w-full mb-6 group">
              <label
                for="deliveryamount"
                class="form-label inline-block mb-2 text-gray-700"
              >
                Delivery Amount
              </label>
              <input
                type="number"
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
                id="deliveryamount"
                placeholder="Amount Charge from Customer"
              />
            </div>

            <div class="relative z-0 p-2 w-full mb-6 group">
              <label
                for="deliveryfees"
                class="form-label inline-block mb-2 text-gray-700"
              >
                Delivery Fees
              </label>
              <input
                type="number"
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
                id="deliveryfees"
                placeholder="Amount Pay to individual Employee"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDelivery;
