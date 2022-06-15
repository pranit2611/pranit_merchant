import React from "react";
import { useNavigate } from "react-router-dom";

const EditOrder = () => {
  const navigate = useNavigate();

  const mainPage = () => {
    navigate("/orders");
  };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <h4 class="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">
        Edit Order 
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
              Order Id
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
              value="113"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="unit"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Client Name
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
              value="Harpal Singh"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="unit"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Order Date
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
              Order Amount
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
              Payment Date
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
              Payment Mode
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
              value="UPI"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="name"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Payment Status
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
              id="name"
              value="Done"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditOrder;
