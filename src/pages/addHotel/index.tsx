import React from 'react'
import NavigationBar from '../../components/menu'

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";


import document from "../../assets/images/document.gif"
import DataList from './components/DataList';

export default function AddHotel() {
  return (
    <div>
        <NavigationBar/>
        <div className='flex flex-col mt-2 ml-32 mr-32 py-3.5 align-center'>
            <div className='flex flex-row w-full bg-darkBlue h-auto rounded-md items-center'>
                <img src={document} width={80} height={80} />
                <div className='pl-3.5 font-bold text-white text-xl'>Add Hotel</div>
            </div>
            <DataList />
        </div>
    </div>
  )
}
