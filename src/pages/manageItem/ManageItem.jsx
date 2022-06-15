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

// import { itemsData, contextMenuItems, itemsGrid } from "../../data/dummy";
import { Header } from "../../components";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { BsFillPencilFill } from "react-icons/bs";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import {FiEye  } from "react-icons/fi";

const gridItemEdit = () => (
  <div className="flex items-center justify-center gap-2">
     <h1
      style={{ color: "#8be78b", display: "flex" }}
      className="font-small leading-tight text-xl mt-0 mb-2 "
    >
      <Link style={{ marginRight: 5 }} to="/manageItem/edit">
        <BsFillPencilFill/>
      </Link>
    </h1>
    <h1
      style={{ color: "#03c9d7", display: "flex" }}
      className="font-small leading-tight text-xl mt-0 mb-2 "
    >
      <Link style={{ marginLeft: 5, marginRight: 5 }} to="/manageItem/view">
        <FiEye/>
      </Link>
    </h1>
    <h1
      style={{ color: "#ff5c8e", display: "flex" }}
      className="font-small leading-tight text-xl mt-0 mb-2 "
    >
      <Link style={{ marginLeft: 5, marginRight: 5 }} to="">
        <AiFillDelete/>
      </Link>
    </h1>
  </div>
);
/*const gridmerchantStatus = (props) => (
  <button
    type="button"
    style={{ background: props.PaymentStatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.PaymentStatus}
  </button>
);
const gridDistributerStatus = (props) => (
  <button
    type="button"
    style={{ background: props.distributerStatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.DistributerStatus}
  </button>
);*/

export const itemsGrid = [

  
  {
    field: "id",
    headerText: "Id",
    width: "25",
    editType: "dropdownedit",
    textAlign: "Center",

  },
  {
    field: "merchanttype",
    headerText: "Merchant Type",
    width: "50",
    textAlign: "Center",
  },
  {
    field: "classification",
    headerText: "Classification",
    width: "60",
    textAlign: "Center",
  },
  {
    field: "itemname",
    headerText: "Item Name",
    width: "50",
    textAlign: "Center",
  },
  {
    field: "quantity",
    headerText: "Quantity",
    format: "C2",
    textAlign: "Center",
    editType: "numericedit",
    width: "40",
  },
  /* {
    field: "description",
    headerText: "Description",
    width: "70",
    textAlign: "Center",
  },
 {
    field: "merchantstatus",
    headerText: "Merchant Status",
    textAlign: "Center",
    width: "60",
    template: gridmerchantStatus,
  },
  {
    field: "distributorstatus",
    headerText: "Distributor Status",
    textAlign: "Center",
    width: "50",
    template: gridDistributerStatus,
  },
  {
    field: "adminstatus",
    headerText: "Admin Status",
    textAlign: "Center",
    width: "50",
    template: gridmerchantStatus,
  },*/
  {
    field: "action",
    headerText: "Action",
    width: "45",
    textAlign: "Center",
    template: gridItemEdit,
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

export const itemsData = [
 
  {
    id: 1,
    merchanttype: "Restraunt",
    classification: "Pizza",
    itemname: "The Pasta Place",
    quantity: "100",
     /*description: "Continetal Food",


    PaymentStatus: "Active",
    PaymentStatusBg: "#8BE78B",

    DistributerStatus : "Pending",
    distributerStatusBg: "#FF5C8E",

    adminstatus: "Active",*/
  },
  {
    id: 2,
    merchanttype: "Restraunt",
    classification: "Pizza",
    itemname: "The Pasta Place",
    quantity: "100",
    description: "Continetal Food",
    

     /*PaymentStatus: "Active",
    PaymentStatusBg: "#8BE78B",

    DistributerStatus : "Pending",
    distributerStatusBg: "#FF5C8E",
    
    adminstatus: "Active",*/
  },
  {
    id: 3,
    merchanttype: "Restraunt",
    classification: "Pizza",
    itemname: "The Pasta Place",
    quantity: "100",
    description: "Continetal Food",

    /* PaymentStatus: "Active",
    PaymentStatusBg: "#8BE78B",

    DistributerStatus : "Pending",
    distributerStatusBg: "#FF5C8E",
    
    adminstatus: "Active",*/
  },
  {
    id: 4,
    merchanttype: "Restraunt",
    classification: "Pizza",
    itemname: "The Pasta Place",
    quantity: "100",
    description: "Continetal Food",

    
    

     /*PaymentStatus: "Active",
    PaymentStatusBg: "#8BE78B",

    DistributerStatus : "Pending",
    distributerStatusBg: "#FF5C8E",
    
    adminstatus: "Active",*/
  },
  {
    id: 5,
    merchanttype: "Restraunt",
    classification: "Pizza",
    itemname: "The Pasta Place",
    quantity: "100",
    /* description: "Continetal Food",

    

    PaymentStatus: "Active",
    PaymentStatusBg: "#8BE78B",

    DistributerStatus : "Pending",
    distributerStatusBg: "#FF5C8E",
    
    adminstatus: "Active",*/
  },
  {
    id: 6,
    merchanttype: "Restraunt",
    classification: "Pizza",
    itemname: "The Pasta Place",
    quantity: "100",
     /*description: "Continetal Food",

    

    PaymentStatus: "Active",
    PaymentStatusBg: "#8BE78B",

    DistributerStatus : "Pending",
    distributerStatusBg: "#FF5C8E",
    
    adminstatus: "Active",*/
  },
  {
    id: 7,
    merchanttype: "Restraunt",
    classification: "Pizza",
    itemname: "The Pasta Place",
    quantity: "100",
     /*description: "Continetal Food",

   
    

    PaymentStatus: "Active",
    PaymentStatusBg: "#8BE78B",

    DistributerStatus : "Pending",
    distributerStatusBg: "#FF5C8E",
    
    adminstatus: "Active",*/
  },
  {
    id: 8,
    merchanttype: "Restraunt",
    classification: "Pizza",
    itemname: "The Pasta Place",
    quantity: "100",
     /*description: "Continetal Food",

   

    PaymentStatus: "Active",
    PaymentStatusBg: "#8BE78B",

    DistributerStatus : "Pending",
    distributerStatusBg: "#FF5C8E",
    
    adminstatus: "Active",*/
  },
  {
    id: 9,
    merchanttype: "Restraunt",
    classification: "Pizza",
    itemname: "The Pasta Place",
    quantity: "100",
     /*description: "Continetal Food",

  
   

    PaymentStatus: "Active",
    PaymentStatusBg: "#8BE78B",

    DistributerStatus : "Pending",
    distributerStatusBg: "#FF5C8E",
   
    adminstatus: "Active",*/
  },
  {
    id: 10,
    merchanttype: "Restraunt",
    classification: "Pizza",
    itemname: "The Pasta Place",
    quantity: "100",
     /*description: "Continetal Food",

   
    

    PaymentStatus: "Active",
    PaymentStatusBg: "#8BE78B",
  

    DistributerStatus : "Pending",
    distributerStatusBg: "#FF5C8E",
    
    adminstatus: "Active",*/
  },
];

const ManageItem = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Search","Delete"];
  const editing = { };

  const navigate = useNavigate();

  const addPage = () => {
    navigate("/manageItem/add");
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header  title="Manage Items" />
      <div class="flex space-x-2 m-4 justify-end">
      <button
        type="button" onClick={() => addPage()} class="addButton"
        >
        New Record
      </button>
      </div>
      <GridComponent
        id="gridcomp"
        dataSource={itemsData}
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
          {itemsGrid.map((item, index) => (
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
export default ManageItem;
