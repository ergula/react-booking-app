import React, { useEffect, useState } from "react";

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


const RenderPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log("data", data);

  const [countries, setCountries] = useState([]);
  const countryservice = new CountryService();


  useEffect(() => {
    countryservice.getCountries().then((data) => setCountries(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="w-full flex flex-col justify-center ">
      <div className=" w-full  ">
        <div className="w-full rounded text-black mx-auto p-8 ">
          {/* Form */}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Hotel Name Input */}

            <div className="">
              <label className="text-sm font-bold text-white">Hotel Name</label>
              <input
                {...register("name", { required: true })}
                type="text"
                className="w-full p-2 border border-darkBlue rounded mt-1"
              />
              {errors.name && (
                <div className="text-orange py-1 font-bold">
                  Hotel Name is required*
                </div>
              )}
            </div>

            {/* Phone Number Input */}

            <div>
              <label htmlFor="" className="text-sm font-bold text-white ">
                Phone Number
              </label>
              <input
                {...register("hotelName", { required: true })}
                type="tel"
                className="w-full p-2 border border-darkBlue bg-white rounded mt-1"
              />
              {errors.hotelName && (
                <div className="text-orange py-1 font-bold">
                  Phone Number is required*
                </div>
              )}
            </div>

            {/* Select Country Input */}

            <div>
              <label htmlFor="" className="text-sm font-bold text-white ">
                Country
              </label>
              <select
                name=""
                id=""
                className="w-full p-4 border-darkBlue rounded mt-1"
              >
                <option value="test">1-3</option>
                <option value="test2">3-5</option>
              </select>
            </div>
            {/* Select Rank Input */}

            <div>
              <label htmlFor="" className="text-sm font-bold text-white ">
                Rank
              </label>
              <select
                name=""
                id=""
                className="w-full p-4 border-darkBlue rounded mt-1"
              >
                <option value="test">1-3</option>
                <option value="test2">3-5</option>
              </select>
            </div>

            {/* Submit Button */}

            <button
              data-dismiss="modal"
              className="w-full px-4 bg-orange rounded py-2 text-white font-bold"
            >
              SUBMIT
            </button>
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
      closable={true}
      modal={true}
      onHide={onHide}
    >
      <div className="flex justify-content-center flex-column pt-6 px-3"></div>
      {RenderPage()}
    </Dialog>
  );
};

export default FormDialog;
