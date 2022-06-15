import React from "react";
import { useNavigate } from "react-router-dom";

const EditEmployee = () => {
  const navigate = useNavigate();

  const mainPage = () => {
    navigate("/employees");
  };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <h4 class="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">
        Edit Employee 
      </h4>
      <div class="flex space-x-2 justify-end">
        <button
          type="button" onClick={() => mainPage()} class="backButton"
          
          
        >
          Back
        </button>
        <button
          type="button" class="editButton"
          
        >
          Edit
        </button>
      </div>

      <form>
        <div class="grid xl:grid-cols-3  m:gap-2">
          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="unit"
              class="form-label inline-block mb-2 text-gray-700"
            >
              First Name
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
              value="Asha"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="unit"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Last Name
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
              value="Sinha"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="unit"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Mobile No
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
              value="989899898"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="unit"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Email
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
              value="a@gmail.com"
            />
          </div>
          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="unit"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Current Status
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
              value="Active"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="unit"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Status
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
              value="Active"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
