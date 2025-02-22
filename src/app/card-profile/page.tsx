"use client";
import React, {useMemo} from "react";
import {IconButton, Button} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Trash from "@/icons/trash";
import EditPencil from "@/icons/editPencil";
import NextLink from "next/link";
import DataTable from "@/components/dataTable";
import {CardProfileDetails, useDataContext} from "@/services/context";
import {MRT_ColumnDef} from "material-react-table";

const CardProfile = () => {
  const {cardProfiles} = useDataContext();
  const columns = useMemo<MRT_ColumnDef<CardProfileDetails>[]>(
    () => [
      {
        accessorKey: "cardName",
        header: "Card Name",
      },
      {
        accessorKey: "currency",
        header: "Currency",
      },
      {
        accessorKey: "expiration",
        header: "Expiration",
      },
      {
        accessorKey: "binPrefix",
        header: "Bin Prefix",
      },
      {
        accessorKey: "dateCreated",
        header: "Date Created",
      },
      {
        accessorKey: "id",
        header: "Action",
        Cell: () => (
          <div className="flex gap-x-3 items-center">
            <IconButton>
              <Trash />
            </IconButton>
            <IconButton>
              <EditPencil />
            </IconButton>
          </div>
        ),
      },
    ],
    []
  );
  return (
    <div className="p-6">
      <h1 className="text-[#101828] font-bold text-lg">Card Profile</h1>
      <p className="text-[#475467] text-sm my-1">
        Create, view and edit card profiles here.
      </p>
      <div className="flex items-center justify-between border-y py-3 mb-6"></div>
      <DataTable
        data={cardProfiles}
        columns={columns}
        searchPlaceholder="Search by branch"
        renderTopToolbarCustomActions={() => (
          <Button
            component={NextLink}
            href="/card-profile/create-profile"
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            sx={{textTransform: "capitalize", bgcolor: "#014DAF", marginLeft: 'auto'}}
          >
            Add Profile
          </Button>
        )}
      />
    </div>
  );
};

export default CardProfile;
