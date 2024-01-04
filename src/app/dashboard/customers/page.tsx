import React from 'react'
import BreadCrumb from "@/components/breadcrumb";
import { UserClient } from "@/components/tables/customer/client";
import { users } from "@/constants/data";

const breadcrumbItems = [{ title: "Customers", link: "/dashboard/customers" }];


const page = () => {
  return (
    <div className='relative'>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <UserClient data={users} />
      </div>
    </div>
  )
}

export default page