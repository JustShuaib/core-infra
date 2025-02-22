"use client";
import {
  type MRT_ColumnDef,
  useMaterialReactTable,
  MaterialReactTable,
} from "material-react-table";

export interface DataTableProps<TableObjects extends object> {
  data: TableObjects[];
  columns: MRT_ColumnDef<TableObjects>[];
  searchPlaceholder: string;
  renderTopToolbarCustomActions?: () => React.ReactNode;
}

function DataTable<TableObjects extends object>({
  data,
  columns,
  searchPlaceholder,
  renderTopToolbarCustomActions,
}: DataTableProps<TableObjects>) {
  const table = useMaterialReactTable({
    data,
    columns,
    enableColumnFilters: false,
    enableFullScreenToggle: false,
    enableFilterMatchHighlighting: false,
    enableDensityToggle: false,
    enableBottomToolbar: false,
    enableSorting: false,
    enableHiding: false,
    enableColumnActions: false,
    positionGlobalFilter: "left",
    initialState: {
      showGlobalFilter: true,
    },
    muiSearchTextFieldProps: {
      placeholder: searchPlaceholder,
      variant: "outlined",
      style: {
        backgroundColor: "white",
        borderRadius: "8px",
      },
      size: "small",
    },
    muiTopToolbarProps: {
      style: {
        backgroundColor: "#F8FBFF",
        borderBottom: "1px solid #E5E7EB",
      },
    },
    muiTableHeadCellProps: {
      sx: {
        backgroundColor: "#F9FAFB",
        borderRight: "1px solid #E5E7EB",
        "&:last-of-type": {borderRight: "none"},
      },
    },
    muiTableBodyCellProps: {
      sx: {
        borderRight: "1px solid #E5E7EB",
        "&:last-of-type": {borderRight: "none"},
      },
    },
    muiTablePaperProps: {
      elevation: 0,
    },
    renderTopToolbarCustomActions: renderTopToolbarCustomActions
      ? renderTopToolbarCustomActions
      : undefined,
  });

  return (
    <div className="">
      <MaterialReactTable table={table} />
    </div>
  );
}

export default DataTable;
