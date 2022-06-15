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

// import { invoiceData, contextMenuItems, invoiceGrid } from "../../data/dummy";
import { Header } from "../../components";
import { useNavigate } from "react-router-dom";

const gridPaymentStatus = (props) => (
  <button
    type="button"
    style={{ background: props.PaymentStatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.PaymentStatus}
  </button>
);

export const invoiceGrid = [

  {
    field: "id",
    headerText: "Id",
    width: "Auto",
    editType: "dropdownedit",
    textAlign: "Center",
  },
  {
    field: "invoiceno",
    headerText: "Invoice No",
    width: "Auto",
    textAlign: "Center",
  },
  {
    field: "invoiceamount",
    headerText: "Invoice Amount",
    width: "Auto",
    textAlign: "Center",
  },
  {
    field: "mobileno",
    headerText: "Mobile No",
    width: "Auto",
    textAlign: "Center",
  },
  {
    field: "email",
    headerText: "E Mail",
    width: "Auto",
    textAlign: "Center",
  },
  {
    field: "invoicedate",
    headerText: "Invoice Date",
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

export const invoiceData = [
  {
    id: 1,
    invoiceno: "GT/25",
    invoiceamount: 2000,
    mobileno: 9898989898,
    email: "admin@gmail.com",
    invoicedate: "03-03-2022",
    paymentstatus: "Done",
    PaymentStatus: "Done",
    PaymentStatusBg: "#8BE78B",
  },
  {
    id: 2,
    invoiceno: "GT/25",
    invoiceamount: 2000,
    mobileno: 9898989898,
    email: "admin@gmail.com",
    invoicedate: "03-03-2022",
    paymentstatus: "Done",
    PaymentStatus: "Done",
    PaymentStatusBg: "#8BE78B",
  },
  {
    id: 3,
    invoiceno: "GT/25",
    invoiceamount: 2000,
    mobileno: 9898989898,
    email: "admin@gmail.com",
    invoicedate: "03-03-2022",
    paymentstatus: "Done",
    PaymentStatus: "Done",
    PaymentStatusBg: "#8BE78B",
  },
  {
    id: 4,
    invoiceno: "GT/25",
    invoiceamount: 2000,
    mobileno: 9898989898,
    email: "admin@gmail.com",
    invoicedate: "03-03-2022",
    paymentstatus: "Done",
    PaymentStatus: "Done",
    PaymentStatusBg: "#8BE78B",
  },
  {
    id: 5,
    invoiceno: "GT/25",
    invoiceamount: 2000,
    mobileno: 9898989898,
    email: "admin@gmail.com",
    invoicedate: "03-03-2022",
    paymentstatus: "Done",
    PaymentStatus: "Done",
    PaymentStatusBg: "#8BE78B",
  },
  {
    id: 6,
    invoiceno: "GT/25",
    invoiceamount: 2000,
    mobileno: 9898989898,
    email: "admin@gmail.com",
    invoicedate: "03-03-2022",
    paymentstatus: "Done",
    PaymentStatus: "Done",
    PaymentStatusBg: "#8BE78B",
  },
  {
    id: 7,
    invoiceno: "GT/25",
    invoiceamount: 2000,
    mobileno: 9898989898,
    email: "admin@gmail.com",
    invoicedate: "03-03-2022",
    paymentstatus: "Done",
    PaymentStatus: "Done",
    PaymentStatusBg: "#8BE78B",
  },
  {
    id: 8,
    invoiceno: "GT/25",
    invoiceamount: 2000,
    mobileno: 9898989898,
    email: "admin@gmail.com",
    invoicedate: "03-03-2022",
    paymentstatus: "Done",
    PaymentStatus: "Done",
    PaymentStatusBg: "#8BE78B",
  },
  {
    id: 9,
    invoiceno: "GT/25",
    invoiceamount: 2000,
    mobileno: 9898989898,
    email: "admin@gmail.com",
    invoicedate: "03-03-2022",
    paymentstatus: "Done",
    PaymentStatus: "Done",
    PaymentStatusBg: "#8BE78B",
  },
  {
    id: 10,
    invoiceno: "GT/25",
    invoiceamount: 2000,
    mobileno: 9898989898,
    email: "admin@gmail.com",
    invoicedate: "03-03-2022",
    paymentstatus: "Done",
    PaymentStatus: "Done",
    PaymentStatusBg: "#8BE78B",
  },
];

const Invoice = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Search","Delete"];
  const editing ={} ;

  const navigate = useNavigate();
  const addPage = () => {
    navigate("/invoice/add");
  };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header  title="Invoices" />
      <div class="flex space-x-2 m-4 justify-end">
      <button
        type="button" onClick={() => addPage()} class="addButton"
        
        
      >
        Send Invoice
      </button>
      </div>
      <GridComponent
        id="gridcomp"
        dataSource={invoiceData}
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
          {invoiceGrid.map((item, index) => (
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
export default Invoice;
