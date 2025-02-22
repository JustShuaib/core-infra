"use client";
import React, {useMemo} from "react";
import DataTable from "@/components/dataTable";
import {MRT_ColumnDef} from "material-react-table";
import {Button} from "@mui/material";
import NextLink from "next/link";
import {RequestDetails, useDataContext} from "@/services/context";
import {getStatusColor} from "@/utils/getStatusColor";

const CardRequest = () => {
  const {requests} = useDataContext();
  const columns = useMemo<MRT_ColumnDef<RequestDetails>[]>(
    () => [
      {
        accessorKey: "branch",
        header: "Branch",
      },
      {
        accessorKey: "initiator",
        header: "Initiator",
      },
      {
        accessorKey: "quantity",
        header: "Quantity",
      },
      {
        accessorKey: "batch",
        header: "Batch",
      },
      {
        accessorKey: "dateRequested",
        header: "Date Requested",
      },
      {
        accessorKey: "status",
        header: "Status",
        Cell: ({cell}) => (
          <span
            className={`border rounded-2xl bg-opacity-65 px-2 py-1 capitalize text-xs ${getStatusColor(
              cell.getValue<string>()
            )}`}
          >
            {cell.getValue<string>()}
          </span>
        ),
      },
      {
        accessorKey: "id",
        header: "Action",
        Cell: ({cell}) => (
          <Button
            component={NextLink}
            href={"/card-request/request-details?id=" + cell.getValue<string>()}
            variant="text"
            sx={{textTransform: "capitalize"}}
          >
            View
          </Button>
        ),
      },
    ],
    []
  );
  return (
    <div className="p-4 mb-48">
      <h1 className="text-[#101828] font-bold text-lg">Card Request</h1>
      <p className="text-[#475467] border-b pb-2 text-sm my-1 mb-4">
        View and attend to card requests here.
      </p>

      <DataTable
        data={requests}
        columns={columns}
        searchPlaceholder="Search by branch"
      />
    </div>
  );
};

export default CardRequest;
