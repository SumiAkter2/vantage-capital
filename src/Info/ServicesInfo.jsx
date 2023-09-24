import { MdManageAccounts } from "react-icons/md";
import { RiBankFill } from "react-icons/ri";
import { BsArrowLeftRight } from "react-icons/bs";
import { RiFundsLine } from "react-icons/ri";
export const ManageAccount = <MdManageAccounts size="60px" color="#1ba9ca" />;
export const Bank = <RiBankFill size="60px" color="#1ba9ca" />;
export const trad = <BsArrowLeftRight size="60px" color="#1ba9ca" />;
export const Fund = <RiFundsLine size="60px" color="#1ba9ca" />;

export const services = [
  {
    id: 1,
    icon: ManageAccount,
    name: "Manage MAM Account",
    dis: "Experience the ease and effectiveness of our MAM account management services. Our professionals utilize advanced trading strategies to optimize your investment performance, while you retain full control over your funds.",
  },

  {
    id: 2,
    icon: trad,
    name: "Forex Trading Expertise",
    dis: "Tap into the potential of the foreign currency exchange market with our specialized expertise. We leverage our in-depth market knowledge to navigate the nuances of forex trading, aiming for steady growth and capital preservation.",
  },
  {
    id: 3,
    icon: Fund,
    name: "Profit-Sharing Model",
    dis: "Our transparent profit-sharing model ensures a fair and mutually beneficial arrangement. We are committed to aligning our interests with yours, as your success directly impacts ours. Our profit-sharing model is 40% / 60%, where clients take 60% and Vantage Capital FX takes 40%. ",
  },
  {
    id: 4,
    icon: Bank,
    name: "Managed Forex Accounts",
    dis: "A managed forex account is a type of currency trading account in which a professional money manager makes trades and transactions on a client's behalf for a fee. Individual investors who are not experts in foreign currencies but still want exposure to this asset class may consider a managed forex account. ",
  },
];
