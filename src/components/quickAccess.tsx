import {Card, CardContent, Typography, Box, Avatar} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CreditCardShield from "@/icons/creditCardShield";
import CreditCard from "@/icons/creditCard";
import CreditCardEdit from "@/icons/creditCardEdit";
import CreditCardPlus from "@/icons/creditCardPlus";

export default function QuickAccess() {
  const quickAccessItems = [
    {label: "Manage a Card", icon: <CreditCardShield />, link: "#"},
    {label: "Issue Instant Card", icon: <CreditCard />, link: "#"},
    {label: "Issue Personalized Card", icon: <CreditCardEdit />, link: "#"},
    {label: "Review Card Requests", icon: <CreditCardPlus />, link: "#"},
  ];

  return (
    <Card className="my-2 border !rounded-xl !shadow-none">
      <CardContent>
        <Typography variant="h6">Your Quick Access</Typography>

        <Box className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {quickAccessItems.map((item, index) => (
            <Box
              key={index}
              onClick={() => window.open(item.link, "_blank")}
              className="flex items-center bg-[#F1F7FF] text-sm py-2 px-3 rounded-md cursor-pointer hover:bg-blue-100 transition-colors"
            >
              <Avatar
                sx={{bgcolor: "#014DAF", mr: 1, width: "28px", height: "28px"}}
              >
                {item.icon}
              </Avatar>

              <span className="font-medium flex-1">{item.label}</span>
              <ArrowForwardIosIcon sx={{color: "#808080", fontSize: 14}} />
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
