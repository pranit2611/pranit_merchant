import React from "react";
import { useNavigate } from "react-router-dom";

const AddInvoice = () => {
  const navigate = useNavigate();

  const mainPage = () => {
    navigate("/invoice");
  };
  return (
    <div>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <h4 class="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">
          Employee Add 
        </h4>
        <div class="flex space-x-2 justify-end">
          <button
            type="button"
            class="backButton"
            onClick={() => mainPage()}
          >
            Back
          </button>
          <button
            type="button" class="addButton"
            
          >
            Add
          </button>
        </div>

        <form>
          <div class="grid xl:grid-cols-2  m:gap-2">
            <div class="relative z-0 p-2 w-full mb-6 group">
              <label
                for="invoicenumber"
                class="form-label inline-block mb-2 text-gray-700"
              >
                Invoice Number
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
                id="invoicenumber"
                placeholder="10050401020"
              />
            </div>
            <div class="relative z-0 p-2 w-full mb-6 group">
              <label
                for="customermobilenumber"
                class="form-label inline-block mb-2 text-gray-700"
              >
                Customer Mobile Number
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
                id="customermobilenumber"
                placeholder="xxxxxxxxxx"
              />
            </div>

            <div class="relative z-0 p-2 w-full mb-6 group">
              <label
                for="customeremail"
                class="form-label inline-block mb-2 text-gray-700"
              >
                Customer Email
              </label>
              <input
                type="email"
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
                id="customeremail"
                placeholder="Enter Customer Email"
              />
            </div>

            <div class="relative z-0 p-2 w-full mb-6 group">
              <label
                for="invoiceamount"
                class="form-label inline-block mb-2 text-gray-700"
              >
                Invoice Amount
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
                id="invoiceamount"
                placeholder="Enter Mobile No"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddInvoice;
