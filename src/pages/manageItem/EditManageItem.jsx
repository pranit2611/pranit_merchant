import React from "react";
import { useNavigate } from "react-router-dom";

const EditManageItem = () => {
  const navigate = useNavigate();

  const mainPage = () => {
    navigate("/manageItem");
  };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <h4 class="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">
        Edit Item :
      </h4>
      <div class="flex space-x-2 justify-end">
        <button
          type="button"
          
          onClick={() => mainPage()} class="backButton"
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
              Type
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
              value="Saraza"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="unit"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Category
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
              value="veg"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="unit"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Classification
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
              value="chapati"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="unit"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Sub Classification
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
              value="Coke"
            />
          </div>
          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="unit"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Group Category
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
              value="Bakery"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="unit"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Brand Name
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
              value="Amul"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="name"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Name
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
              value="Suchit"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="unit"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Unit Quantity
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
              Unit/Quantity
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
              value="1 Ltr"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="netweight"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Net Weight (in GM)
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
              id="netweight"
              value="1000"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="price"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Price
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
              id="price"
              value="2000"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="unit"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Discount Type
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
              value="Fixed"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="discount"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Discount
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
              id="discount"
              value="100"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label for="gst" class="form-label inline-block mb-2 text-gray-700">
              GST
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
              id="gst"
              value="12"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="orbit"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Orbit Mart Commision
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
              id="orbit"
              value="50"
              disabled="true"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="actualprice"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Actual Price
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
              id="actualprice"
              value="200"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="stock"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Stock Quantity
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
              id="stock"
              value="100"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="description"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Description
            </label>
            <textarea
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
              id="description"
              value="nothing"
            />
          </div>

          <div class="form-group mb-6 p-2">
            <label
              for="image"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Image
            </label>
            <input
              type="file"
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
              id="image"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditManageItem;
