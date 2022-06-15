import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";

// import { orderData, contextMenuItems, orderGrid } from "../../data/dummy";
import { Header } from "../../components";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
;
import {FiEye  } from "react-icons/fi";
import ConfirmModal from "./ConfirmModel";
import CancelModel from "./CancelModel"
import DeleteModel from "./DeleteModel"


import { BsFillPencilFill } from "react-icons/bs";


const gridOrderEdit = () => (
  <div className="flex items-center justify-center gap-2">
    <h1
      style={{ color: "#8be78b", display: "flex" }}
      className="font-small leading-tight text-xl mt-0 mb-2 "
    >
      <Link style={{ marginRight: 2 }} to="/orders/edit">
        <BsFillPencilFill/>
      </Link>
    </h1>
    <h1
      style={{ color: "#03c9d7", display: "flex" }}
      className="font-small leading-tight text-xl mt-0 mb-2 "
    >
      <Link style={{ marginLeft: 2, marginRight: 2 }} to="/Order/view">
        <FiEye/>
      </Link>
    </h1>
    <h1
     style={{ color: "#ff5c8e", display: "flex" }}
     className="font-small leading-tight text-xl mt-0 mb-2 "
    >
      <DeleteModel/>
      {/* <Link to="/orders/orderid">
        <button
          style={{ color: "white", backgroundColor: "#8be78b" }}
          type="button"
          class="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
        >
          Confirm
        </button>
      </Link> */}
    </h1>
    
    {/* <h1
      style={{ color: "#ff5c8e", display: "flex" }}
      className="font-small leading-tight text-xl mt-0 mb-2 "
    >
      <Link style={{ marginLeft: 2, marginRight: 2 }} to="">
        <AiFillDelete/>
      </Link>
    </h1> */}
    <h1/>
  </div>
);
const gridPaymentStatus = (props) => (
  <button
    type="button"
    style={{ background: props.PaymentStatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.PaymentStatus}
  </button>
);
 {/*const gridDeletModel = () => (
  <div class="flex space-x-2 justify-center">
    <h6
      style={{ color: "#03c9d7", display: "flex" }}
      class="font-medium leading-tight text-3xl mt-0 mb-2 "
    >
      <DeleteModel/>
      {/* <Link to="/orders/orderid">
        <button
          style={{ color: "white", backgroundColor: "#8be78b" }}
          type="button"
          class="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
        >
          Confirm
        </button>
      </Link> 
    </h6> 
  </div>
);*/}

const gridConfirm = () => (
  <div class="flex space-x-2 justify-center">
     <h6
      style={{ color: "#03c9d7", display: "flex" }}
      class="font-medium leading-tight text-3xl mt-0 mb-2 "
    >
      <ConfirmModal />
      {/* <Link to="/orders/orderid">
        <button
          style={{ color: "white", backgroundColor: "#8be78b" }}
          type="button"
          class="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
        >
          Confirm
        </button>
      </Link> */}
    </h6>
  </div>
);
const gridCancel = () => (
  <div class="flex space-x-2 justify-center">
    <h6
      style={{ color: "#03c9d7", display: "flex" }}
      class="font-medium leading-tight text-3xl mt-0 mb-2 "
    >
       <CancelModel/>
      {/*<Link to="">
       
        <button
          style={{ color: "white", backgroundColor: "#ff5c8e" }}
          type="button"
          class="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
        >
          Cancel
        </button>
</Link> */}
    </h6> 
  </div>
);
export const orderGrid = [
  
  {
    field: "id",
    headerText: "Id",
    width: "Auto",
    editType: "dropdownedit",
    textAlign: "Center",
  },

  {
    field: "clientname",
    headerText: "Client Name",
    width: "Auto",
    textAlign: "Center",
  },
  {
    field: "orderdate",
    headerText: "Order Date",
    width: "Auto",
    textAlign: "Center",
  },
  {
    field: "orderamount",
    headerText: "Order Amount",
    width: "Auto",
    textAlign: "Center",
  },
  {
    field: "paymentdate",
    headerText: "Payment Date",
    width: "Auto",
    textAlign: "Center",
  },

  {
    field: "paymentstatus",
    headerText: "Payment Status",
    width: "Auto",
    textAlign: "Center",
    template: gridPaymentStatus,
  },
  {
    field: "confirm",
    headerText: "Confirm",
    textAlign: "Center",
    width:"Auto",
    template: gridConfirm,
  },
  {
    field: "cancel",
    headerText: "Cancel",
    textAlign: "Center",
    width:"Auto",
    template: gridCancel,
  },
  // {
  //   field: "action",
  //   headerText: "Action",
  //   width:"Auto",
  //   textAlign: "Center",
  //   template: gridDeletModel,
  // },
  {
    field: "action",
    headerText: "Action",
    width:"Auto",
    textAlign: "Center",
    template: gridOrderEdit,
  },
];

export const contextMenuItems = [
  "AutoFit",
  "AutoFitAll",
  "SortAscending",
  "SortDescending",
  "Copy",
  "Edit",
  "Delete",
  "Save",
  "Cancel",
  "PdfExport",
  "ExcelExport",
  "CsvExport",
  "FirstPage",
  "PrevPage",
  "LastPage",
  "NextPage",
];

export const orderData = [
  {
    id: 1,
    orderid: 123,
    clientname: "Simran Singh",
    orderdate: "2022-05-26",
    orderamount: 1000,
    orderstatus: "Delivered",
    paymentdate: "2022-05-27",
    paymentmode: "UPI",
    paymentstatus: "Done",
    PaymentStatus: "Done",
    PaymentStatusBg: "#8BE78B",
  },
  {
    id: 2,
    orderid: 124,
    clientname: "Simran Singh",
    orderdate: "2022-05-26",
    orderamount: 1000,
    orderstatus: "Delivered",
    paymentdate: "2022-05-27",
    paymentmode: "UPI",
    paymentstatus: "Done",
    PaymentStatus: "Done",
    PaymentStatusBg: "#8BE78B",
  },
  {
    id: 3,
    orderid: 125,
    clientname: "Simran Singh",
    orderdate: "2022-05-26",
    orderamount: 1000,
    orderstatus: "Delivered",
    paymentdate: "2022-05-27",
    paymentmode: "UPI",
    paymentstatus: "Done",
    PaymentStatus: "Done",
    PaymentStatusBg: "#8BE78B",
  },
  {
    id: 4,
    orderid: 134,
    clientname: "Simran Singh",
    orderdate: "2022-05-26",
    orderamount: 1000,
    orderstatus: "Delivered",
    paymentdate: "2022-05-27",
    paymentmode: "UPI",
    paymentstatus: "Done",
    PaymentStatus: "Done",
    PaymentStatusBg: "#8BE78B",
  },
  {
    id: 5,
    orderid: 135,
    clientname: "Simran Singh",
    orderdate: "2022-05-26",
    orderamount: 1000,
    orderstatus: "Delivered",
    paymentdate: "2022-05-27",
    paymentmode: "UPI",
    paymentstatus: "Done",
    PaymentStatus: "Done",
    PaymentStatusBg: "#8BE78B",
  },
  {
    id: 6,
    orderid: 135,
    clientname: "Simran Singh",
    orderdate: "2022-05-26",
    orderamount: 1000,
    orderstatus: "Delivered",
    paymentdate: "2022-05-27",
    paymentmode: "UPI",
    paymentstatus: "Done",
    PaymentStatus: "Done",
    PaymentStatusBg: "#8BE78B",
  },
  {
    id: 7,
    orderid: 135,
    clientname: "Simran Singh",
    orderdate: "2022-05-26",
    orderamount: 1000,
    orderstatus: "Delivered",
    paymentdate: "2022-05-27",
    paymentmode: "UPI",
    paymentstatus: "Done",
    PaymentStatus: "Done",
    PaymentStatusBg: "#8BE78B",
  },
  {
    id: 8,
    orderid: 135,
    clientname: "Simran Singh",
    orderdate: "2022-05-26",
    orderamount: 1000,
    orderstatus: "Delivered",
    paymentdate: "2022-05-27",
    paymentmode: "UPI",
    paymentstatus: "Done",
    PaymentStatus: "Done",
    PaymentStatusBg: "#8BE78B",
  },
  {
    id: 9,
    orderid: 135,
    clientname: "Simran Singh",
    orderdate: "2022-05-26",
    orderamount: 1000,
    orderstatus: "Delivered",
    paymentdate: "2022-05-27",
    paymentmode: "UPI",
    paymentstatus: "Done",
    PaymentStatus: "Done",
    PaymentStatusBg: "#8BE78B",
  },
  {
    id: 10,
    orderid: 135,
    clientname: "Simran Singh",
    orderdate: "2022-05-26",
    orderamount: 1000,
    orderstatus: "Delivered",
    paymentdate: "2022-05-27",
    paymentmode: "UPI",
    paymentstatus: "Done",
    PaymentStatus: "Done",
    PaymentStatusBg: "#8BE78B",
  },
];

const Orders = () => {
  const selectionsettings = { persistSelection: true };
  const editing = { allowDeleting: true };
  const toolbarOptions =['search'];

  const navigate = useNavigate();

  const addPage = () => {
    navigate("/manageItem/add");
  };
  return (
    
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header  title="Orders" />
     
      <GridComponent
        id="gridcomp"
        dataSource={orderData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
        toolbar={toolbarOptions}
        selectionSettings={selectionsettings}
      >
        <ColumnsDirective>
          {orderGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};
export default Orders;
