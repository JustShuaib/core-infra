export const getStatusColor = (status: string): string => {
  switch (status) {
    case "ready":
      return "border-[#ABEFC6] text-[#067647] bg-[#ABEFC6]";
    case "in progress":
      return "border-[#FEDF89] text-[#B54708] bg-[#FEDF89]";
    case "pending":
      return "border-[#EAECF0] text-[#344054] bg-[#EAECF0]";
    case "acknowledged":
      return "border-[#B2DDFF] text-[#175CD3] bg-[#B2DDFF]";
    default:
      return "border-[#EAECF0] text-[#344054] bg-[#EAECF0]";
  }
};
