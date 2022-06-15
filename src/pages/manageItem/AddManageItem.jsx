import React from "react";
import { useNavigate } from "react-router-dom";

const AddManageItem = () => {
  const navigate = useNavigate();

  const mainPage = () => {
    navigate("/manageitem");
  };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <h4 class="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">
        Add Item 
      </h4>
      <div class="flex space-x-2 justify-end">
        <button
          type="button" onClick={() => mainPage()} class="backButton"
         >
          Back
        </button>
        <button
          type="button" class="addButton">
         
        
          Add
        </button>
      </div>

      <form>
        <div class="grid xl:grid-cols-3  m:gap-2">
          <div class="relative z-0 p-2 w-full mb-6 group">
            <label>Type</label>
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
              <option selected>Restraunt</option>
              <option value="1">Aliza</option>
              <option value="2">Imperial Place</option>
              <option value="3">Saraza</option>
              <option value="4">The Second Wife</option>
            </select>
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label>Category</label>
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
              <option value="1">Veg</option>
              <option value="2">Non Veg</option>
            </select>
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label>Classification</label>
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
              <option selected>Add On</option>
              <option value="1">Chapati</option>
              <option value="2">Chicken Wings</option>
              <option value="3">Extra Cheese</option>
              <option value="4">Salad</option>
            </select>
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label>Sub Classification</label>
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
              <option selected>Bevrages</option>
              <option value="1">Coke</option>
              <option value="2">Pepsi</option>
              <option value="3">ThumbsUp</option>
              <option value="4">Butter Milk</option>
            </select>
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label>Group Category</label>
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
              <option selected>Aata & Other Floor</option>
              <option value="1">Bakery</option>
              <option value="2">Body Lotion & Oil</option>
              <option value="3">Bread & Egg</option>
              <option value="4">Cat Food</option>
            </select>
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label>Brand Name</label>
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
              <option selected>Amul</option>
              <option value="1">Bingo</option>
              <option value="2">Lays</option>
              <option value="3">Balaji</option>
              <option value="4">Maggie</option>
            </select>
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
              placeholder="Enter Item Name"
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
              id="unit"
              placeholder="Enter Quantity"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label>Unit / Quantity</label>
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
              <option selected>1 Ltr</option>
              <option value="1">1 Pcs</option>
              <option value="2">10 Pcs</option>
              <option value="3">25 Pcs</option>
              <option value="4">1 Kg</option>
            </select>
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="netweight"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Net Weight (in GM)
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
              id="netweight"
              placeholder="Weight of item in Gram"
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
              placeholder="MRP Including Discount & Commission"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label>Discount Type</label>
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
              <option selected>Percent %</option>
              <option value="1">Fixed</option>
            </select>
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
              placeholder="Customer Discount"
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
              placeholder="Enter GST %"
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
              placeholder="Available Stock"
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
              placeholder="Description of Current Product"
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

export default AddManageItem;
