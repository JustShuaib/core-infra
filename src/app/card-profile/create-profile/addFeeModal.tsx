import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  RadioButtonGroup,
  SelectElement,
  SubmitHandler,
  TextFieldElement,
  useForm,
} from "react-hook-form-mui";
import SquarePlus from "@/icons/squarePlus";

interface AddFeeModalProps {
  open: boolean;
  onClose: () => void;
}

export interface FeeData {
  feeName: string;
  value: number;
  currency: string;
  frequency: string;
  feeImpact: string;
  accountPad: string;
  account: string;
}

const AddFeeModal: React.FC<AddFeeModalProps> = ({open, onClose}) => {
  const {control, handleSubmit} = useForm<FeeData>({
    defaultValues: {
      feeName: "",
      value: 0,
      currency: "NGN",
      frequency: "One Off",
      feeImpact: "Issuance",
      accountPad: "None",
      account: "",
    },
  });

  const onSubmit: SubmitHandler<FeeData> = (data) => {
    console.log({data});
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <DialogTitle className="flex justify-between items-center">
          <div className="flex items-center gap-x-2">
            <div className=" border rounded-xl w-12 h-12 flex items-center justify-center">
              <SquarePlus />
            </div>
            <div>
              <p className="text-lg font-medium">Add Fee</p>
              <p className="text-xs">Fill in fee details.</p>
            </div>
          </div>
          <IconButton aria-label="close" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          <div className="flex flex-col">
            <TextFieldElement
              name={"feeName"}
              variant="outlined"
              label="Card Name"
              placeholder={"Maintenance"}
              control={control}
              required
              fullWidth
            />
            <SelectElement
              name={"value"}
              variant="outlined"
              placeholder="00000000"
              label={"Value"}
              options={[
                {
                  id: "1",
                  label: "1",
                },
                {
                  id: "2",
                  label: "2",
                },
              ]}
              control={control}
              required
              fullWidth
              sx={{my: 3}}
            />
            <RadioButtonGroup
              label="Currency"
              name="currency"
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
              row
              control={control}
            />
            <RadioButtonGroup
              label="Fee Frequency"
              name="frequency"
              options={[
                {
                  id: "1",
                  label: "One Off",
                },
                {
                  id: "2",
                  label: "Monthly",
                },
              ]}
              row
              control={control}
            />
            <RadioButtonGroup
              label="Fee Impact"
              name="feeImpact"
              options={[
                {
                  id: "1",
                  label: "Issuance",
                },
                {
                  id: "2",
                  label: "Pin Reissue",
                },
              ]}
              row
              control={control}
            />
            <RadioButtonGroup
              label="Account Pad"
              name="accountPad"
              options={[
                {
                  id: "1",
                  label: "None",
                },
                {
                  id: "2",
                  label: "Branch Code Prefix",
                },
                {
                  id: "3",
                  label: "Branch Code Suffix",
                },
              ]}
              row
              control={control}
            />
            <TextFieldElement
              name={"feeName"}
              variant="outlined"
              label="Account"
              placeholder={"Account"}
              control={control}
              required
              fullWidth
              sx={{borderRadius: "8px"}}
            />
          </div>
        </DialogContent>

        <DialogActions className="p-4">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{textTransform: "none"}}
          >
            Add Fee
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddFeeModal;
