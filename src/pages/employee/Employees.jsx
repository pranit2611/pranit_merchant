import React from "react";
import {
  GridComponent,
  Inject,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Page,
  Selection,
  Edit,
  Toolbar,
  Sort,
  Filter,
  Resize,
  ContextMenu,
  ExcelExport,
  PdfExport,
} from "@syncfusion/ej2-react-grids";

import { BsFillPencilFill } from "react-icons/bs";

// import { employeeData, employeeGrid } from "../../data/dummy";
import { Header } from "../../components";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ToogleSwitch from "../ToogleSwitch/ToogleSwitch"
import { AiFillDelete } from "react-icons/ai";
import {FiEye  } from "react-icons/fi";




const gridEmployeeEdit = () => (
  <div className="flex items-center justify-center gap-1">
     <h1
      style={{ color: "#8be78b", display: "flex" }}
      className="font-small leading-tight text-xl mt-0 mb-0 "
    >
      <Link style={{ marginRight: 5 }} to="/employees/edit">
        <BsFillPencilFill/>
      </Link>
    </h1>
    <h1
      style={{ color: "#03c9d7", display: "flex" }}
      className="font-small leading-tight text-xl mt-0 mb-0 "
    >
      <Link style={{ marginLeft: 5, marginRight: 5 }} to="/Employee/view">
        <FiEye/>
      </Link>
    </h1>
    <h1
      style={{ color: "#ff5c8e", display: "flex" }}
      className="font-small leading-tight text-xl mt-0 mb-0 "
    >
      <Link style={{ marginLeft: 5, marginRight: 5 }} to="Delete">
        <AiFillDelete/>
      </Link>
    </h1>
  </div>
  
);

const gridStatus = () => (
  <div style={{paddingLeft:12}} class="flex items-center justify-center">
    <ToogleSwitch label="Status" />
  </div>
);


export const employeeGrid = [
  /*{ type: "checkbox", width: 50 },*/
  
  {
    field: "id",
    headerText: "Id",
    width: "Auto",
    textAlign: "Center",
    isPrimaryKey: true,
    
  },
  {
    field: "firstname",
    headerText: "First Name",
    width: "Auto",
    textAlign: "Center",
  },
  {
    field: "lastname",
    headerText: "Last Name",
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
    headerText: "Email",
    width: "Auto",
    textAlign: "Center",
  },
 
  {
    field: "status",
    headerText: "Status",
    template: gridStatus ,
    width: "Auto",
     textAlign: "Center",
  },
  {
    field: "action",
    headerText: "Action",
    width: "Auto",
    textAlign: "Center",
    template: gridEmployeeEdit,
  },
];

export const employeeData = [
  {
    id: 1,
    firstname: "Asha",
    lastname: "Singa",
    mobileno: 9898989898,
    email: "a@gmail.com",
    
  },
  {
    id: 2,
    firstname: "Asha",
    lastname: "Singa",
    mobileno: 9898989898,
    email: "a@gmail.com",
   
  },
  {
    id: 3,
    firstname: "Asha",
    lastname: "Singa",
    mobileno: 9898989898,
    email: "a@gmail.com",
   
  },
  {
    id: 4,
    firstname: "Asha",
    lastname: "Singa",
    mobileno: 9898989898,
    email: "a@gmail.com",
   
  },
  {
    id: 5,
    firstname: "Asha",
    lastname: "Singa",
    mobileno: 9898989898,
    email: "a@gmail.com",
    
  },
  {
    id: 6,
    firstname: "Asha",
    lastname: "Singa",
    mobileno: 9898989898,
    email: "a@gmail.com",
    
  },
  {
    id: 7,
    firstname: "Asha",
    lastname: "Singa",
    mobileno: 9898989898,
    email: "a@gmail.com",
    
  },
  {
    id: 8,
    firstname: "Asha",
    lastname: "Singa",
    mobileno: 9898989898,
    email: "a@gmail.com",
    
  },
  {
    id: 9,
    firstname: "Asha",
    lastname: "Singa",
    mobileno: 9898989898,
    email: "a@gmail.com",
   
  },
  {
    id: 10,
    firstname: "Asha",
    lastname: "Singa",
    mobileno: 9898989898,
    email: "a@gmail.com",
   
  },
];

const Employees = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Search', 'Delete'];

  const editing = { };

  const navigate = useNavigate();

  const addPage = () => {
    navigate("/employees/add");
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header  title="Employees" />
      <div class="flex space-x-2 m-4 justify-end">
       <button type="button"  onClick={() => addPage()} class="addButton">
       New Record
      </button>
      </div>
      
      <GridComponent
        dataSource={employeeData}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
        selectionSettings={selectionsettings}
      >
        <ColumnsDirective>
          {employeeGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Search, Page]} />
      </GridComponent>
    </div>
  );
};
export default Employees;
