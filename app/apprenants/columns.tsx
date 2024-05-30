"use client";

import { ColumnDef } from "@tanstack/react-table";
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
import { Stagiaire } from "../type/Stagiaire";
import Link from "next/link";
import { useQueryClient } from "react-query";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { api } from "../api";

export const columns: ColumnDef<Stagiaire>[] = [
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
      const stagiaire = row.original;
      const queryClient = useQueryClient();
      const deleteStagiaire = async () => {
        const res = api.delete(`/stagiaire/delete/${stagiaire.id}`);
        console.log(res);
        queryClient.invalidateQueries("stagiaires");
      };

      const [open, setopen] = useState(false);

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-right" align="end">
              <DropdownMenuLabel>الوظائف</DropdownMenuLabel>
              <Link href={stagiaire.id ? `/apprenants/${stagiaire.id}` : `#`}>
                <DropdownMenuItem>تفاصيل المتدرب</DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setopen(true)}>
                حذف المتدرب
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div>
            <AlertDialog open={open} onOpenChange={setopen}>
              <AlertDialogTrigger asChild></AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>هل أنت متأكد تمامًا؟</AlertDialogTitle>
                  <AlertDialogDescription>
                    هذا الإجراء لا يمكن التراجع عنه. سيتم حذف هذا الطلب بشكل
                    دائم وإزالة البيانات الخاصة بك من خوادمنا.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="gap-8">
                  <AlertDialogCancel>إلغاء</AlertDialogCancel>
                  <AlertDialogAction onClick={deleteStagiaire}>
                    متابعة
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </>
      );
    },
  },
];
