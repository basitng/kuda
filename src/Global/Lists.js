import { MaterialCommunityIcons, Feather, Fontisto } from "@expo/vector-icons";
import { primaryColor } from "../../colors";

const nanoid = (range) => Math.random() * Number(range);
const ListItems = [
  {
    title: "Send Money",
    description: "Free Transfer to all banks.",
    id: nanoid(4000),
    icon: <Feather name="send" size={24} color={primaryColor} />,
  },
  {
    title: "Buy Airtime",
    description: "Recharge any phone easily.",
    id: nanoid(4000),
    icon: <Feather name="smartphone" size={24} color={primaryColor} />,
  },
  {
    title: "Pay A Bill",
    description: "Take care of your essentials.",
    id: nanoid(4000),
    icon: <Fontisto name="favorite" size={24} color={primaryColor} />,
  },
  {
    title: "Gift Cards",
    description: "Spend Cards.",
    id: nanoid(4000),
    icon: <Feather name="gift" size={24} color={primaryColor} />,
  },
  {
    title: "Web Payment",
    description: "Pay online without card",
    id: nanoid(4000),
    icon: <MaterialCommunityIcons name="web" size={24} color={primaryColor} />,
  },
  {
    title: "ATM & POS Payme...",
    description: "Get cash pay on a POS with no card",
    id: nanoid(4000),
    icon: (
      <MaterialCommunityIcons
        name="calculator"
        size={24}
        color={primaryColor}
      />
    ),
  },
];

export default ListItems;
