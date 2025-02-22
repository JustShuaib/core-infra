"use client";
import CustomChip from "@/components/customChip";
import CheckCircleBroken from "@/icons/checkCircleBroken";
import FileDownload from "@/icons/fileDownload";
import LoadingIcon from "@/icons/loading";
import PackageCheckIcon from "@/icons/packageCheck";
import PackageSent from "@/icons/packageSent";
import SuccessModal from "@/modals/successModal";
import {useDataContext} from "@/services/context";
import {getStatusColor} from "@/utils/getStatusColor";
import {Button} from "@mui/material";
import {useSearchParams} from "next/navigation";
import {useState} from "react";
import {TextFieldElement, useForm} from "react-hook-form-mui";
interface RequestDetailsProps {
  branchName: string;
  initiator: string;
  cardType: string;
  cardCharges: string;
  quantity: number;
  batch: string;
}
const RequestDetails = () => {
  const {requests} = useDataContext();
  const id = useSearchParams().get("id");
  const currentRequest = requests.find((request) => request.id === Number(id));

  const [status, setStatus] = useState("pending");
  const [openDownloadModal, setOpenDownloadModal] = useState(false);
  const [openDispatchModal, setOpenDispatchModal] = useState(false);
  const {control} = useForm<RequestDetailsProps>({
    defaultValues: {
      branchName: currentRequest?.branch,
      initiator: currentRequest?.initiator,
      quantity: currentRequest?.quantity || 0,
      batch: currentRequest?.batch,
    },
  });

  return (
    <div className="p-6">
      <p className="text-lg font-medium">Request Details</p>
      <p className="text-gray-600">
        Perform predetermined actions on card requests here.
      </p>
      <form noValidate>
        <div className="bg-white border my-6 p-4 rounded-[10px]">
          <p className="text-lg font-medium mb-6">Card Request Details</p>
          <div className="grid grid-cols-2 gap-6 mb-12 gap-x-12">
            <TextFieldElement
              name={"branchName"}
              variant="outlined"
              label="Branch Name"
              placeholder={"Enter branch name"}
              control={control}
              disabled
              required
              fullWidth
              sx={{bgcolor: "#F5F5F7", borderRadius: "8px"}}
            />
            <TextFieldElement
              name={"initiator"}
              variant="outlined"
              placeholder="00000000"
              label={"Initiator"}
              control={control}
              disabled
              required
              fullWidth
              sx={{bgcolor: "#F5F5F7", borderRadius: "8px"}}
            />
            <TextFieldElement
              name={"cardType"}
              variant="outlined"
              placeholder="00000000"
              label={"Card Type"}
              control={control}
              disabled
              required
              fullWidth
              sx={{bgcolor: "#F5F5F7", borderRadius: "8px"}}
            />
            <TextFieldElement
              name={"cardCharges"}
              variant="outlined"
              placeholder="00000000"
              label={"Card Charges"}
              control={control}
              disabled
              required
              fullWidth
              sx={{bgcolor: "#F5F5F7", borderRadius: "8px"}}
            />
            <TextFieldElement
              name={"quantity"}
              variant="outlined"
              placeholder="00000000"
              label={"Quantity"}
              control={control}
              disabled
              required
              fullWidth
              sx={{bgcolor: "#F5F5F7", borderRadius: "8px"}}
            />
            <TextFieldElement
              name={"batch"}
              variant="outlined"
              placeholder="00000000"
              label={"Batch"}
              control={control}
              disabled
              required
              fullWidth
              sx={{bgcolor: "#F5F5F7", borderRadius: "8px"}}
            />
            <div>
              <span className="text-gray-700">Date Requested</span>
              <p className="text-gray-900 mt-2 font-medium">
                {currentRequest?.dateRequested}
              </p>
            </div>
            <div>
              <p>Status</p>
              <CustomChip
                label={currentRequest?.status || ""}
                color={getStatusColor(currentRequest?.status || "default")}
              />
            </div>
          </div>
          <div>
            <p className="font-medium">Actions</p>
            <div className="flex justify-around items-center mt-2">
              <Button
                startIcon={<FileDownload />}
                disabled={status !== "pending"}
                onClick={() => setOpenDownloadModal(true)}
                variant="contained"
                sx={{
                  bgcolor: "#344054",
                  textTransform: "none",
                  minWidth: "max-content",
                }}
              >
                Download for Production
              </Button>
              <Button
                startIcon={<LoadingIcon />}
                disabled={status !== "downloaded"}
                variant="contained"
                onClick={() => setStatus("in-progress")}
                sx={{
                  bgcolor: "#B54708",
                  textTransform: "none",
                  maxWidth: "fit-content",
                }}
              >
                Mark as In Progress
              </Button>
              <Button
                startIcon={<PackageCheckIcon />}
                variant="contained"
                disabled={status !== "in-progress"}
                onClick={() => setStatus("ready")}
                sx={{
                  bgcolor: "#067647",
                  textTransform: "none",
                  minWidth: "max-content",
                }}
              >
                Mark as Ready
              </Button>
              <Button
                startIcon={<PackageSent />}
                onClick={() => setOpenDispatchModal(true)}
                disabled={status !== "ready"}
                variant="contained"
                sx={{
                  bgcolor: "#8020E7",
                  textTransform: "none",
                  minWidth: "max-content",
                }}
              >
                Send to Dispatch
              </Button>
              <Button
                startIcon={<CheckCircleBroken />}
                onClick={() => setStatus("acknowledged")}
                disabled={status !== "sent"}
                variant="contained"
                sx={{
                  bgcolor: "#014DAF",
                  textTransform: "none",
                  minWidth: "max-content",
                }}
              >
                Mark as Acknowledged
              </Button>
            </div>
          </div>
        </div>
        <SuccessModal
          open={openDownloadModal}
          onClose={() => {
            setStatus("downloaded");
            setOpenDownloadModal(false);
          }}
          description="Production file has been downloaded."
        />
        <SuccessModal
          open={openDispatchModal}
          onClose={() => {
            setStatus("sent");
            setOpenDispatchModal(false);
          }}
          description="Card batch successfully sent to dispatch."
        />
      </form>
    </div>
  );
};

export default RequestDetails;
