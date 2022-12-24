import React, { useState } from "react";

import { DataTable } from "primereact/datatable";
import { useNavigate } from "react-router-dom";
import { confirmDialog } from "primereact/confirmdialog";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

import DeleteDialog from "./DeleteDialog";
import FormDialog from "./FormDialog";

import Delete from "../../../assets/images/delete.svg";
import Add from "../../../assets/images/plus.svg";

const DataList = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [showFormDialog, setShowFormDialog] = useState(false);

  const headerBodyTemplate = (
    <div className="table-header">
      <div className="flex flex-row justify-between">

        {/* Title */}

        <h3 className="mx-2 my-4 text-xl text-black">Hotels</h3>

        {/* icons */}

        <div className="flex mt-2">
          <button className="w-10 h-10 mr-4">
          <img src={Add} alt="add" onClick={() => setShowFormDialog(true)} />
          </button>
          <FormDialog 
          showFormDialog={showFormDialog}
          onHide={() => setShowFormDialog(false)}
          />
          <button className="w-10 h-10 mr-4">
            <img
              src={Delete}
              alt="delete"
              onClick={() => setShowDialog(true)}
            />
          </button>
          <DeleteDialog
            showDialog={showDialog}
            onHide={() => setShowDialog(false)}
          />
        </div>
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
