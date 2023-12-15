"use client";
import React, { useState } from 'react';
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { User } from "@/constants/data";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { X } from 'lucide-react'
import NewCustomer from './new-customer';

interface ProductsClientProps {
  data: User[];
}

export const UserClient: React.FC<ProductsClientProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Customers (${data.length})`}
          description="Manage customers for your business"
        />
        <Button
          className="text-xs md:text-sm"
          onClick={handleToggle}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <NewCustomer isOpen={isOpen} handleToggle={handleToggle} />
    </>
  );
};