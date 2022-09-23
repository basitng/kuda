import { dangerColor, primaryColor, successColor } from "../../colors";

const nanoid = (range) => Math.random() * Number(range);

const budgetAnalysis = [
  {
    topper: true,
    value: "₦184,164",
    icon: "plus",
    id: nanoid(1000),
    iconColor: successColor,
    backgroundColor: "#DCFFEC",
    title: "Money In",
  },
  {
    topper: true,
    value: "₦350,000",
    icon: "minus",
    id: nanoid(1000),
    iconColor: dangerColor,
    backgroundColor: "#FFDBDB",
    title: "Money out",
  },
  {
    topper: false,
    value: "₦65.13",
    icon: "activity",
    id: nanoid(1000),
    iconColor: primaryColor,
    backgroundColor: "#EFEFEF90",
    title: "Balance",
  },
  {
    topper: false,
    value: "No Budget",
    icon: "pie-chart",
    id: nanoid(1000),
    iconColor: "#FFF",
    backgroundColor: "#55555540",
    title: "Create Bu...",
  },
];

export default budgetAnalysis;
