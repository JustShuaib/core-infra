"use client";
import {
  SelectElement,
  SubmitHandler,
  TextFieldElement,
  useForm,
} from "react-hook-form-mui";
import React, {useState} from "react";
import {
  Box,
  Button,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {DatePickerElement} from "react-hook-form-mui/date-pickers";
import AddFeeModal from "./addFeeModal";
interface ProfileDetailsFormData {
  cardName: string;
  binPrefix: string;
  cardScheme: string;
  expiration: string;
  description: string;
  currency: string;
  branchBlacklist: string;
}

const CreateProfile = () => {
  const [openModal, setOpenModal] = useState(false);
  const {control, handleSubmit} = useForm<ProfileDetailsFormData>({
    defaultValues: {
      cardName: "",
      binPrefix: "",
      cardScheme: "Verve",
      expiration: "0",
      description: "",
      currency: "NGN",
      branchBlacklist: "Head Office",
    },
  });
  const onSubmit: SubmitHandler<ProfileDetailsFormData> = (data) =>
    console.log({data});
  const fees: Fee[] = [
    {
      id: 1,
      name: "Fees",
      value: 1000,
      frequency: "monthly",
      currency: "NGN",
      time: "13:05",
      accountPaid: "00000000",
      account: "00000",
    },
  ];
  return (
    <div className="p-6">
      <h1 className="text-[#101828] font-bold text-lg">Card Profile</h1>
      <p className="text-[#475467] text-sm my-2">
        Fill in profile details and add card fee.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="bg-white border mb-6 p-4 rounded-[10px]">
          <p className="text-lg font-medium mb-6">Profile Details</p>
          <div className="grid grid-cols-2 gap-6">
            <TextFieldElement
              name={"cardName"}
              variant="outlined"
              label="Card Name"
              placeholder={"Enter card name"}
              control={control}
              required
              fullWidth
            />
            <TextFieldElement
              name={"cardName"}
              variant="outlined"
              placeholder="00000000"
              label={"Bin Prefix"}
              control={control}
              required
              fullWidth
            />
            <SelectElement
              name={"cardScheme"}
              variant="outlined"
              placeholder="00000000"
              label={"Card Scheme"}
              options={[
                {
                  id: "1",
                  label: "Verve-1",
                },
                {
                  id: "2",
                  label: "Verve-2",
                },
              ]}
              control={control}
              required
              fullWidth
            />
            <DatePickerElement
              label="Expiration"
              name="expiration"
              control={control}
            />
            <TextFieldElement
              name={"description"}
              variant="outlined"
              placeholder="00000000"
              label={"Description"}
              control={control}
              required
              fullWidth
            />
            <SelectElement
              name={"currency"}
              variant="outlined"
              placeholder="00000000"
              label={"Currency"}
              options={[
                {
                  id: "1",
                  label: "NGN",
                },
                {
                  id: "2",
                  label: "CAD",
                },
              ]}
              control={control}
              required
              fullWidth
            />
            <SelectElement
              name={"branchBlacklist"}
              variant="outlined"
              placeholder="00000000"
              label={"Branch Blacklist"}
              options={[
                {
                  id: "1",
                  label: "Head Office",
                },
                {
                  id: "2",
                  label: "First Branch",
                },
              ]}
              control={control}
              required
              fullWidth
            />
          </div>
        </div>

        <Box>
          <div className="p-4 rounded-[10px] border bg-white">
            <p className="text-lg font-medium mb-2">Fees</p>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={() => setOpenModal(true)}
              sx={{textTransform: "capitalize", bgcolor: "#014DAF", my: 2}}
            >
              Add fee
            </Button>

            <TableContainer>
              <Table>
                <TableHead className="bg-[#F1F7FF]">
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Value</TableCell>
                    <TableCell>Frequency</TableCell>
                    <TableCell>Currency</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell>Account Paid</TableCell>
                    <TableCell>Account</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {fees.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} align="center">
                        No fees added yet
                      </TableCell>
                    </TableRow>
                  ) : (
                    fees.map((fee) => (
                      <TableRow key={fee.id} hover>
                        <TableCell>{fee.name}</TableCell>
                        <TableCell>{fee.value}</TableCell>
                        <TableCell>{fee.frequency}</TableCell>
                        <TableCell>{fee.currency}</TableCell>
                        <TableCell>{fee.time}</TableCell>
                        <TableCell>{fee.accountPaid}</TableCell>
                        <TableCell>{fee.account}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </div>

          <Button
            variant="contained"
            color="primary"
            sx={{
              textTransform: "capitalize",
              bgcolor: "#014DAF",
              width: "290px",
              my: 2,
              py: 1,
            }}
          >
            Create Profile
          </Button>
        </Box>
        <AddFeeModal open={openModal} onClose={() => setOpenModal(false)} />
      </form>
    </div>
  );
};

export default CreateProfile;

interface Fee {
  id: number;
  name: string;
  value: number;
  frequency: string;
  currency: string;
  time: string;
  accountPaid: string;
  account: string;
}
