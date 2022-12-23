import React from "react";

import { DataTable } from "primereact/datatable";
import { useNavigate } from "react-router-dom";
import { confirmDialog } from "primereact/confirmdialog";
import { Column } from "primereact/column";

import  Delete from "../../../assets/images/delete.svg"
import Add from "../../../assets/images/plus.svg";

const DataList = () => {
  const headerBodyTemplate = (
    <div className="table-header">
      <div className="flex flex-row justify-between">
        <h3 className="mx-2 my-4 text-xl text-black">Hotels</h3>
        <div className="flex mt-2">
          <img src={Add} alt="add" className="w-10 h-10 mr-4" />
          <img src={Delete} alt="add" className="w-10 h-10 mr-4" />
        </div>
      </div>
      <div className="custom-button-set">
        <img src="" className="custom-icon-button" />

        <img src="" className="custom-icon-button" />
      </div>
    </div>
  );
  return (
    <div>
      <div className="mr-2 ml-2">
        <DataTable
          rowsPerPageOptions={[5, 10, 20, 50]}
          paginator
          responsiveLayout="scroll"
          rows={20}
          header={headerBodyTemplate}
        >
          <Column field="invoice_type" header="Invoice Type" sortable></Column>
          <Column
            field="invoice_number"
            header="Invoice Number"
            sortable
          ></Column>
          <Column field="Customer" header="Customer" sortable></Column>
          <Column
            field="payment_model"
            header="Payment Model"
            sortable
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default DataList;
