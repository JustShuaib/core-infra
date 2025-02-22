import React, {createContext, useContext, useState, ReactNode, FC} from "react";

interface AppData {
  user: {name: string; email: string} | null;
  requests: RequestDetails[];
  cardProfiles: CardProfileDetails[];
  updateUser: (user: {name: string; email: string} | null) => void;
  updateRequests: (requests: RequestDetails[]) => void;
}

export interface RequestDetails {
  id: number;
  branch: string;
  initiator: string;
  quantity: number;
  batch: string;
  dateRequested: string;
  status: "ready" | "in progress" | "pending" | "acknowledged";
}
export interface CardProfileDetails {
  id: number;
  currency: string;
  cardName: string;
  expiration: string;
  binPrefix: number;
  dateCreated: string;
}

const DataContext = createContext<AppData | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: FC<DataProviderProps> = ({children}) => {
  const [user, setUser] = useState<{name: string; email: string} | null>(null);
  const [requests, setRequests] = useState<RequestDetails[]>([
    {
      id: 1,
      branch: "Corporate",
      initiator: "FrontView",
      quantity: 10,
      batch: "6472AB25",
      dateRequested: "11/4/2023 10:24:53",
      status: "ready",
    },
    {
      id: 2,
      branch: "Formal",
      initiator: "FrontView",
      quantity: 10,
      batch: "6472AB25",
      dateRequested: "11/4/2023 10:24:53",
      status: "ready",
    },
    {
      id: 3,
      branch: "Redundant",
      initiator: "FrontView",
      quantity: 10,
      batch: "6472AB25",
      dateRequested: "11/4/2023 10:24:53",
      status: "in progress",
    },
    {
      id: 4,
      branch: "Informal",
      initiator: "FrontView",
      quantity: 10,
      batch: "6472AB25",
      dateRequested: "11/4/2023 10:24:53",
      status: "pending",
    },
    {
      id: 5,
      branch: "Corporate",
      initiator: "FrontView",
      quantity: 10,
      batch: "6472AB25",
      dateRequested: "11/4/2023 10:24:53",
      status: "acknowledged",
    },
  ]);
  const cardProfiles = [
    {
      id: 1,
      cardName: "Verve-1",
      currency: "NGN",
      expiration: "40 months",
      binPrefix: 50611234,
      dateCreated: "11/10/2024  23:21:03",
    },
    {
      id: 2,
      cardName: "Verve-1",
      currency: "CAD",
      expiration: "40 months",
      binPrefix: 50611234,
      dateCreated: "11/10/2024  23:21:03",
    },
    {
      id: 3,
      cardName: "Visa",
      currency: "USD",
      expiration: "40 months",
      binPrefix: 50611234,
      dateCreated: "11/10/2024  23:21:03",
    },
    {
      id: 4,
      cardName: "Mastercard",
      currency: "GBP",
      expiration: "40 months",
      binPrefix: 50611234,
      dateCreated: "11/10/2024  23:21:03",
    },
  ];
  const updateUser = (newUser: {name: string; email: string} | null) => {
    setUser(newUser);
  };

  const updateRequests = (newRequests: RequestDetails[]) => {
    setRequests(newRequests);
  };

  return (
    <DataContext.Provider
      value={{user, requests, cardProfiles, updateUser, updateRequests}}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = (): AppData => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};
