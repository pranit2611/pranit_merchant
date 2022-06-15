import React from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const navigate = useNavigate();

  const mainPage = () => {
    navigate("/employees");
  };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <h4 class="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">
        Add
      </h4>
      <div class="flex space-x-2 justify-end">
        <button type="button" class="backButton" onClick={() => mainPage()}>
          Back
        </button>
        <button type="button" class="addButton">
          Add
        </button>
      </div>
      <form>
        <div className="grid xl:grid-cols-2  m:gap-2">
          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="firstname"
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
              id="firstname"
              placeholder="Enter First Name"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="lastname"
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
              id="lastname"
              placeholder="Enter Last Name"
            />
          </div>
          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="gender"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Gender
            </label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="male"
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="inlineRadio10"
              >
                Male
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="female"
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="inlineRadio20"
              >
                Female
              </label>
            </div>
          </div>
          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="deliveryrate"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Per Delivery Rate
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
              id="deliveryrate"
              placeholder="Per Delivery Rate"
            />
          </div>
          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="mobilenumber"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Mobile Number
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
              id="mobilenumber"
              placeholder="Enter Mobile No"
            />
          </div>
          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="email"
              class="form-label inline-block mb-2 text-gray-700"
            >
              E-mail Address
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
              id="email"
              placeholder="Email Address"
            />
          </div>
          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="password"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
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
              id="password"
              placeholder="Enter Password"
            />
          </div>
          <div class="relative z-0 p-2 w-full mb-6 group">
            <input
              class="form-check-input appearance-none h-6 w-6 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              class="form-check-label inline-block text-gray-800"
              for="flexCheckDefault"
            >
              Active/Inactive
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;


{/*import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";
import "../view.css";

const AddMerchant = () => {
  const navigate = useNavigate();

  const mainPage = () => {
    navigate("/merchants");
  };

  //ImagePreview
  const [image, setImage] = useState([]);

  function uploadSingleImage(e) {
    setImage([...image, URL.createObjectURL(e.target.files[0])]);
    console.log("Image", image);
  }

  // function upload(e) {
  //   e.preventDefault();
  //   console.log(image);
  // }

  function deleteImage(e) {
    const s = image.filter((item, index) => index != e);
    setImage(s);
    console.log(s);
  }

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <h4 class="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">
       Add
      </h4>
      <div class="flex space-x-2 justify-end">
        <button type="button" class="backButton" onClick={() => mainPage()}>
          Back
        </button>
        <div class="flex space-x-2 justify-end">
        <button type="button" class="addButton">
          Add
        </button>
      </div>


      </div>

      <form>
        <div class="grid xl:grid-cols-3  m:gap-2">
          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="firstname"
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
              id="firstname"
              placeholder="Enter First Name"
            />
          </div>
          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="lastname"
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
              id="lastname"
              placeholder="Enter Last Name"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="gender"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Gender
            </label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="male"
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="inlineRadio10"
              >
                Male
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200  mr-2 cursor-pointer"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="female"
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="inlineRadio20"
              >
                Female
              </label>
            </div>
          </div>
          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="lastname"
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
              id="lastname"
              placeholder="Enter Classification"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="lastname"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Shop Name
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
              placeholder="Enter Shop Name"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="lastname"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Pincode
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
              placeholder="Enter Pincode"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="lastname"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Address
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
              placeholder="Enter Address"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="lastname"
              class="form-label inline-block mb-2 text-gray-700"
            >
              City
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
              placeholder="Enter City"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="lastname"
              class="form-label inline-block mb-2 text-gray-700"
            >
              State
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
              placeholder="Enter State"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="addhar"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Addhar Card
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
              id="addhar"
              placeholder="Enter Addhar Card Number"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="pancard"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Pan Card
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
              id="pancard"
              placeholder="Enter Pan Card Number"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="mobileno"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Mobile No:
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
              id="mobileno"
              placeholder="Enter Mobile No"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="email"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Email Address
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
              id="email"
              placeholder="Enter Per Delivery Rate"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="password"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
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
              id="password"
              placeholder="Enter Per Delivery Rate"
            />
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            <label
              for="Status"
              class="form-label inline-block mb-2 text-gray-700"
            ></label>
            <input
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 bg-no-repeat bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              class="form-check-label inline-block text-gray-800"
              for="flexCheckDefault"
            >
              Active / Inactive
            </label>
          </div>

          <div class="relative z-0 p-2 w-full mb-6 group">
            {image.length > 0 &&
              image.map((item, index) => {
                return (
                  <div style={{ display: "inline-block" }} key={item}>
                    <p className="block-icon">
                      <img src={item} alt="img" />
                      <ImCross
                        style={{ cursor: "pointer" }}
                        onClick={() => deleteImage(index)}
                        className="icon-tag"
                      />
                    </p>

                    {/* <button type="button" onClick={() => deleteImage(index)}>
                      Delete
                    </button> 
                  </div>
                );
              })}
            <input
              accept="image/*"
              disabled={image.length === 1}
              type="file"
              onChange={uploadSingleImage}
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

export default AddMerchant;*/}
