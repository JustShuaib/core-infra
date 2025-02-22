import {Dialog, DialogContent, DialogActions, Button} from "@mui/material";
import CheckCircle from "@/icons/checkCircle";

interface ModalProps {
  open: boolean;
  description: string;
  onClose: () => void;
}

const SuccessModal = ({open, onClose, description}: ModalProps) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogContent>
        <div className="border flex items-center justify-center w-12 h-12 rounded-xl">
          <CheckCircle />
        </div>
        <p className="text-lg font-medium my-1">Successful</p>
        <p className="text-gray-600 mb-6">{description}</p>
        <Button variant="contained" onClick={onClose} sx={{bgcolor: "#014DAF",textTransform: 'capitalize',px:4}}>
          Continue
        </Button>
      </DialogContent>

      <DialogActions className="p-4"></DialogActions>
    </Dialog>
  );
};

export default SuccessModal;
