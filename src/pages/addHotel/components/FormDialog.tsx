import React, { useEffect, useState, ReactNode } from "react";

import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Divider } from "primereact/divider";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";

import { CountryService } from "../../../services/countryService";
import { useForm, Controller } from "react-hook-form";

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
  const [countries, setCountries] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const countryservice = new CountryService();
  const defaultValues = {
    name: "",
    email: "",
    password: "",
    date: null,
    country: null,
    accept: false,
  };

  useEffect(() => {
    countryservice.getCountries().then((data) => setCountries(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues });

  const onSubmit = (data: any) => {
    setFormData(data);
    setShowMessage(true);

    reset();
  };


  return (
      <div className="w-full flex flex-col justify-center ">
          <div className=" w-full ">
              <div className="text-center flex font-medium text-xl">Form</div>
              <div className="w-full rounded text-black mx-auto bg-white p-8 border border-darkBlue">
                  <form action="" className="space-y-6">
                      <div>
                          <label htmlFor="" className="text-sm font-bold text-black">Hotel Name</label>
                          <input type="text" className="w-full p-2 border border-darkBlue rounded mt-1" />
                      </div>
                      <div>
                          <label htmlFor="" className="text-sm font-bold text-black ">Phone Number</label>
                          <input type="text" className="w-full p-2 border border-darkBlue rounded mt-1" />
                      </div>
              
                      <div>
                          <label htmlFor="" className="text-sm font-bold text-darkBlue ">Rank</label>
                          <select name= "" id="" className="w-full p-4 border-darkBlue rounded mt-1" >
                              <option value="test">1-3</option>
                              <option value="test2">3-5</option>
                          </select>
                      </div>
                  </form>
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
          <Button type="submit" label="Submit" onClick={() => onHide()} />
        </>
      }
      closable={false}
      modal={true}
      onHide={onHide}
    >
      <div className="flex justify-content-center flex-column pt-6 px-3">
      </div>
      {RenderPage()}
    </Dialog>
  );
};

export default FormDialog;
