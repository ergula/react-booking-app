import React, { useEffect, useState } from "react";

import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { InputMask } from "primereact/inputmask";

interface FormDialogProps {
  showFormDialog: boolean;
  onHide: () => void;
}

const addHeaderBodyTemplate = (
  <div className="p-dialog-header">
    <label>Add Hotel</label>
  </div>
);

const hotelRank = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
];

const hotelCapacity = [
  { label: "20 - 49", value: "1" },
  { label: "50- 99", value: "2" },
  { label: "100 - 149", value: "3" },
  { label: "<150", value: "4" },
];

const RenderPage = () => {
  const [hotelName, setHotelName] = useState("");
  const [rank, setRank] = useState("");
  const [hotelNumber, setHotelNumber] = useState("");
  const [capacity, setCapacity] = useState("");

  return (
    <div className="flex flex-col p-2">
      <div className="flex flex-row">
        <div className="flex flex-col p-2">
          <label style={{ paddingLeft: 12, paddingBottom: 5 }}>
            Hotel Name
          </label>
          <InputText
            style={{ marginLeft: 10, height: 40, width: 280 }}
            value={hotelName}
            onChange={(e) => setHotelName(e.target.value)}
          />
        </div>
        <div className="flex flex-col p-2">
          <label style={{ paddingLeft: 12, paddingBottom: 5 }}>
            Phone Number
          </label>
          <InputMask
              mask="(999) 999-9999"
              value={hotelNumber}
              placeholder="(999)9999999"
              style={{ marginLeft: 10, height: 40, width: 267 }}  
              onChange={(e) => setHotelNumber(e.target.value)}
              />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col p-2">
          <label style={{ paddingLeft: 12, paddingBottom: 5 }}>Country</label>
          <InputText style={{ marginLeft: 10, height: 40, width: 280 }} />
        </div>
        <div className="flex flex-col p-2">
          <label style={{ paddingLeft: 12, paddingBottom: 5 }}>City</label>
          <InputText style={{ marginLeft: 10, height: 40, width: 280 }} />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col p-2">
          <label style={{ paddingLeft: 12, paddingBottom: 5 }}>Rank</label>
          <Dropdown
            options={hotelRank}
            value={rank}
            onChange={(e) => setRank(e.target.value)}
            placeholder="Choose Rank"
            style={{ marginLeft: 10, height: 40, width: 280 }}
          />
        </div>
        <div className="flex flex-col p-2">
          <label style={{ paddingLeft: 12, paddingBottom: 5 }}>
            Maximum Capacity
          </label>
          <Dropdown
            options={hotelCapacity}
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            placeholder="Choose Capacity"
            style={{ marginLeft: 10, height: 40, width: 280 }}
          />
        </div>
      </div>
    </div>
  );
};

const FormDialog = ({ showFormDialog, onHide }: FormDialogProps) => {
  return (
    <Dialog
      header={addHeaderBodyTemplate}
      visible={showFormDialog}
      style={{}}
      footer={
        <>
          <Button type="submit" label="Add" onClick={() => onHide()} />
        </>
      }
      closable={false}
      modal={true}
      onHide={onHide}
    >
      {RenderPage()}
    </Dialog>
  );
};

export default FormDialog;
