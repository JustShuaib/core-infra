import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import Maximize from "@/icons/maximize";

/**
 * Helper function to map status text to MUI Chip color.
 * Adjust to suit your color preferences or theme.
 */
const getStatusColor = (status: string)=> {
  switch (status) {
    case "Ready":
      return "success"; // green
    case "In Progress":
      return "warning"; // orange
    case "Acknowledged":
      return "info"; // blue
    case "Pending":
      return "default"; // gray
    default:
      return "default";
  }
}

export default function RecentCardRequests() {

  const rows = [
    {
      branch: "Corporate",
      cardType: "Instant",
      quantity: 10,
      status: "Ready",
    },
    {
      branch: "Corporate",
      cardType: "Personalized",
      quantity: 10,
      status: "In Progress",
    },
    {
      branch: "Corporate",
      cardType: "Instant",
      quantity: 10,
      status: "Acknowledged",
    },
    {
      branch: "Corporate",
      cardType: "Instant",
      quantity: 10,
      status: "Pending",
    },
  ];

  return (
    <Paper
      sx={{borderRadius: "12px"}}
      className="w-full p-4 row-span-6 border !shadow-none"
    >
      <div className="flex mb-4 items-center justify-between">
        <Typography variant="h6"> Recent Card Requests</Typography>
        <IconButton aria-label="Maximize">
          <Maximize />
        </IconButton>
      </div>

      <TableContainer style={{width: "100%", overflowX: "visible"}}>
        <Table>
          <TableHead className="bg-[#F1F7FF]">
            <TableRow>
              <TableCell>Branch</TableCell>
              <TableCell>Card Type</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index} hover>
                <TableCell>{row.branch}</TableCell>
                <TableCell>{row.cardType}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={getStatusColor(row.status)}
                    variant="outlined"
                    sx={{fontSize: "12px", padding: "1px"}}
                  />
                </TableCell>
                <TableCell>
                  <Button variant="text" className="text-[#014DAF] !capitalize">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
