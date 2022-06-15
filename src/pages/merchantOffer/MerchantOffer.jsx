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

// import { merchantData, contextMenuItems, merchantGrid } from "../../data/dummy";
import { Header } from "../../components";
import { Link } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import {FiEye  } from "react-icons/fi";

const gridMerchantEdit = () => (
  <div className="flex items-center justify-center gap-2">
     <h1
      style={{ color: "#8be78b", display: "flex" }}
      className="font-small leading-tight text-xl mt-0 mb-2 "
    >
      <Link style={{ marginRight: 5 }} to="/merchantoffer/edit">
        <BsFillPencilFill/>
      </Link>
    </h1>
    <h1
      style={{ color: "#03c9d7", display: "flex" }}
      className="font-small leading-tight text-xl mt-0 mb-2 "
    >
      <Link style={{ marginLeft: 5, marginRight: 5 }} to="/merchantoffer/view">
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
const gridPaymentStatus = (props) => (
  <button
    type="button"
    style={{ background: props.PaymentStatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.PaymentStatus}
  </button>
);

export const merchantGrid = [
  
  {
    field: "id",
    headerText: "Id",
    width: "Auto",
    textAlign: "Center",
  },
  {
    field: "name",
    headerText: "Name",
    width: "Auto",
    editType: "dropdownedit",
    textAlign: "Center",
  },
  {
    field: "description",
    headerText: "Description",
    width: "Auto",
    textAlign: "Center",
  },
  {
    field: "discount",
    headerText: "Discount",
    width: "Auto",
    textAlign: "Center",
  },
  {
    headerText: "PaymentStatus",
    width: "Auto",
    template: gridPaymentStatus,
    field: "id",
    textAlign: "Center",
  },
  {
    field: "action",
    headerText: "Action",
    width: "Auto",
    textAlign: "Center",
    template: gridMerchantEdit,
  },
];

export const merchantData = [
  {
    id: 1,
    name: "Kamlesh",
    description: "Eng",
    discount: 2000,
    PaymentStatus: "Pending",
    PaymentStatusBg: "#FF5C8E",
    
  },
  {
    id: 2,
    name: "Kamlesh",
    description: "Eng",
    discount: 2000,
    publishstatus: "Not Yet",
    PaymentStatus: "Done",
    PaymentStatusBg: "#8BE78B",
  },
  {
    id: 3,
    name: "Kamlesh",
    description: "Eng",
    discount: 2000,
    publishstatus: "Not Yet",
    PaymentStatus: "Pending",
    PaymentStatusBg: "#FF5C8E",
  },
  {
    id: 4,
    name: "Kamlesh",
    description: "Eng",
    discount: 2000,
    publishstatus: "Not Yet",
    PaymentStatus: "Done",
    PaymentStatusBg: "#8BE78B",
  },
  {
    id: 5,
    name: "Kamlesh",
    description: "Eng",
    discount: 2000,
    publishstatus: "Not Yet",
    PaymentStatus: "Pending",
    PaymentStatusBg: "#FF5C8E",
  },
  {
    id: 6,
    name: "Kamlesh",
    description: "Eng",
    discount: 2000,
    publishstatus: "Not Yet",
    PaymentStatus: "Done",
    PaymentStatusBg: "#8BE78B",
  },
  {
    id: 7,
    name: "Kamlesh",
    description: "Eng",
    discount: 2000,
    publishstatus: "Not Yet",
    PaymentStatus: "Pending",
    PaymentStatusBg: "#FF5C8E",
  },
  {
    id: 8,
    name: "Kamlesh",
    description: "Eng",
    discount: 2000,
    publishstatus: "Not Yet",
    PaymentStatus: "Done",
    PaymentStatusBg: "#8BE78B",
  },
  {
    id: 9,
    name: "Kamlesh",
    description: "Eng",
    discount: 2000,
    publishstatus: "Not Yet",
    PaymentStatus: "Pending",
    PaymentStatusBg: "#FF5C8E",
  },
  {
    id: 10,
    name: "Kamlesh",
    description: "Eng",
    discount: 2000,
    publishstatus: "Not Yet",
    PaymentStatus: "Done",
    PaymentStatusBg: "#8BE78B",
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

const MerchantOffer = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions=["Search","Delete"];
  const editing = {};
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header  title="Merchant Offer" />
      <GridComponent
        id="gridcomp"
        dataSource={merchantData}
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
          {merchantGrid.map((item, index) => (
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
export default MerchantOffer;
