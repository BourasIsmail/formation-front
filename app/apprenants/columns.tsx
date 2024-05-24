"use client";

import { ColumnDef } from "@tanstack/react-table";
import { access } from "fs";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DataTableColumnHeader } from "@/components/ui/DataTableColumnHeader";
import { Apprenant } from "../data/apprenants";

export const columns: ColumnDef<Apprenant>[] = [
  {
    accessorKey: "nom",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="الاسم العائلي" />
    ),
  },
  {
    accessorKey: "prenom",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="الاسم الشخصي" />
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="البريد الإلكتروني" />
    ),
  },
  {
    accessorKey: "adresse",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="العنوان" />
    ),
  },
  {
    accessorKey: "nomUniversite",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="اسم الجامعة" />
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const association = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="text-right" align="end">
            <DropdownMenuLabel>الوظائف</DropdownMenuLabel>
            <DropdownMenuItem>تفاصيل المتدرب</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>حذف المتدرب</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
