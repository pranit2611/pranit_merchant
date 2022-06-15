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
import { contextMenuItems, merchantTypeGrid, merchantTypeData } from './config/MerchantTypeConfig';

import { BsFillPencilFill } from "react-icons/bs";

import { Header } from "../../components";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const MerchantType = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Search', 'Delete'];

  const editing = { allowDeleting: true, allowEditing: true };

  const navigate = useNavigate();

  const addPage = () => {
    navigate("/merchantType/add");
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Merchant Type" />
      <button
        type="button"
        class="text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
        style={{ backgroundColor: '#03C9D7' }}
        onClick={() => addPage()}
      >
        New Record
      </button>
      <GridComponent
        id="gridcomp"
        dataSource={merchantTypeData}
        width="auto"
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        pageSettings={{ pageCount: 5 }}
        contextMenuItems={contextMenuItems}
        selectionSettings={selectionsettings}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {merchantTypeGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Search, ContextMenu, Page, Selection, Toolbar, Edit, Sort, Filter,
          ExcelExport, PdfExport]} />
      </GridComponent>
    </div>
  );
};
export default MerchantType;
