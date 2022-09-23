import { lighten1, lighten2, lighten3 } from "./colors";

const nanoid = (range) => Math.random() * Number(range);
const transactions = [
  {
    iconColor: lighten1,
    logo: require("./assets/logo/kuda.png"),
    purpose: "SPEND AND SAVE",
    amount: 22.0,
    id: nanoid(1000),
    time: "07:19 PM",
  },
  {
    iconColor: lighten2,
    logo: require("./assets/logo/access.jpg"),
    purpose: "TITILAYO ABIODUN",
    amount: "90,000",
    id: nanoid(9000),
    time: "07:19 PM",
  },
  {
    iconColor: lighten3,
    logo: require("./assets/logo/polaris.png"),
    purpose: "MUSA JOSEPH",
    amount: "1,000",
    id: nanoid(20000),
    time: "07:19 PM",
  },
  {
    iconColor: lighten3,
    logo: require("./assets/logo/polaris.png"),
    purpose: "MUSA JOSEPH",
    amount: "1,000",
    id: nanoid(20000),
    time: "07:19 PM",
  },
  {
    iconColor: lighten3,
    logo: require("./assets/logo/polaris.png"),
    purpose: "MUSA JOSEPH",
    amount: "1,000",
    id: nanoid(20000),
    time: "07:19 PM",
  },
  {
    iconColor: lighten3,
    logo: require("./assets/logo/polaris.png"),
    purpose: "MUSA JOSEPH",
    amount: "1,000",
    id: nanoid(20000),
    time: "07:19 PM",
  },
  {
    iconColor: lighten3,
    logo: require("./assets/logo/polaris.png"),
    purpose: "MUSA JOSEPH",
    amount: "1,000",
    id: nanoid(20000),
    time: "07:19 PM",
  },
  {
    iconColor: lighten3,
    logo: require("./assets/logo/polaris.png"),
    purpose: "MUSA JOSEPH",
    amount: "1,000",
    id: nanoid(20000),
    time: "07:19 PM",
  },
];

export default transactions;
