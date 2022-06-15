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

import { Header } from "../../components";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import {FiEye  } from "react-icons/fi";

import { BsFillPencilFill } from "react-icons/bs";

const gridDeliveryEdit = () => (
  <div className="flex items-center justify-center gap-2">
     <h1
      style={{ color: "#8be78b", display: "flex" }}
      className="font-small leading-tight text-xl mt-0 mb-2 "
    >
      <Link style={{ marginRight: 2 }} to="/deliveryrate/edit">
        <BsFillPencilFill/>
      </Link>
    </h1>
    <h1
      style={{ color: "#03c9d7", display: "flex" }}
      className="font-small leading-tight text-xl mt-0 mb-2 "
    >
      <Link style={{ marginLeft: 2, marginRight: 2 }} to="/DeliveryRate/view">
        <FiEye/>
      </Link>
    </h1>
    <h1
      style={{ color: "#ff5c8e", display: "flex" }}
      className="font-small leading-tight text-xl mt-0 mb-2 "
    >
      <Link style={{ marginLeft: 2, marginRight: 2 }} to="">
        <AiFillDelete/>
      </Link>
    </h1>
  </div>
);

export const deliveryGrid = [
  
  {
    field: "id",
    headerText: "Id",
    width: "Auto",
    textAlign: "Center",
    isPrimaryKey:true
  },
  {
    field: "amountrange",
    headerText: "Amount Range",
    width: "Auto",
    editType: "dropdownedit",
    textAlign: "Center",
  },
  {
    field: "kmrange",
    headerText: "KM Range",
    width:"Auto",
    textAlign: "Center",
  },
  {
    field: "amount",
    headerText: "Amount",
    width: "Auto",
    textAlign: "Center",
  },
  {
    field: "amountemployee",
    headerText: "Amount to Employee",
    width: "Auto",
    textAlign: "Center",
  },
  {
    field: "action",
    headerText: "Action",
    width: "Auto",
    textAlign: "Center",
    template: gridDeliveryEdit,
  },
];

export const deliveryData = [
  {
    id: 1,
    amountrange: 5000,
    kmrange: 3,
    amount: 1000,
    amountemployee: 200,
  },
  {
    id: 2,
    amountrange: 5000,
    kmrange: 3,
    amount: 1000,
    amountemployee: 200,
  },
  {
    id: 3,
    amountrange: 5000,
    kmrange: 3,
    amount: 1000,
    amountemployee: 200,
  },
  {
    id: 4,
    amountrange: 5000,
    kmrange: 3,
    amount: 1000,
    amountemployee: 200,
  },
  {
    id: 5,
    amountrange: 5000,
    kmrange: 3,
    amount: 1000,
    amountemployee: 200,
  },
  {
    id: 6,
    amountrange: 5000,
    kmrange: 3,
    amount: 1000,
    amountemployee: 200,
  },
  {
    id: 7,
    amountrange: 5000,
    kmrange: 3,
    amount: 1000,
    amountemployee: 200,
  },
  {
    id: 8,
    amountrange: 5000,
    kmrange: 3,
    amount: 1000,
    amountemployee: 200,
  },
  {
    id: 9,
    amountrange: 5000,
    kmrange: 3,
    amount: 1000,
    amountemployee: 200,
  },
  {
    id: 10,
    amountrange: 5000,
    kmrange: 3,
    amount: 1000,
    amountemployee: 200,
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

const DeliveryRate = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions=['Search','Delete'];
  const editing = { };
  const navigate = useNavigate();

  const addPage = () => {
    navigate("/deliveryrate/add");
  };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header  title="Delivery" />
      <div class="flex space-x-2 m-4 justify-end">
      <button
        type="button" onClick={() => addPage()} class="addButton"
        >
        New Delivery Rate
      </button>
      </div>
      <GridComponent
        id="gridcomp"
        dataSource={deliveryData}
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
          {deliveryGrid.map((item, index) => (
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
export default DeliveryRate;
