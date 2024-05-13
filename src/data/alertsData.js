import TodayIcon from "../assets/todayIcon.png";
import AllIcon from "../assets/allIcon.png";
import NewIcon from "../assets/newIcon.png";
import FlaggedIcon from "../assets/flaggedIcon.png";
import InProgress from "../assets/inProgressIcon.png";
import Late from "../assets/lateIcon.png";
import TodaySmall from "../assets/todaySmall.png";
export const contentData = [
  {
    id: "tab1",
    icon: TodayIcon,
    text: "Today",
    number: "03",
    numberColor: "#4283f2",
    heightImg: 10,
    smallIcon: TodaySmall,
    title: "Today",
    alerts: [
      {
        alertType: "Mold",
        location: "Hidden Valley Apartments",
        status: "MOLD DETECTED",
        time: "08:21 AM",
        unit: "Building 12 - Unit 21",
        tasks: "2",
        statusType: "InProgress",
        notifyType: "Warning",
      },
      {
        alertType: "Mold",
        location: "Hidden Valley Apartments",
        status: "MOLD DETECTED",
        time: "08:21 AM",
        unit: "Building 12 - Unit 21",
        tasks: "2",
        statusType: "New",
        notifyType: "Danger",
      },
      {
        alertType: "Water",
        location: "Lakeview Apartments",
        status: "WATER LEAK",
        time: "10:45 AM",
        unit: "Building 5 - Unit 10",
        tasks: "3",
        statusType: "New",
        notifyType: "Danger",
      },
    ],
  },
  {
    id: "tab2",
    icon: AllIcon,
    text: "All",
    number: "06",
    numberColor: "#31353b",
    heightImg: 10,
    smallIcon: TodaySmall,
    title: "All",
    alerts: [
      {
        alertType: "Water",
        location: "Lakeview Apartments",
        status: "WATER LEAK",
        time: "10:45 AM",
        unit: "Building 5 - Unit 10",
        tasks: "3",
        statusType: "New",
        notifyType: "Danger",
      },
      {
        alertType: "Fire",
        location: "Hillside Condos",
        status: "SMOKE DETECTED",
        time: "02:15 PM",
        unit: "Building 8 - Unit 15",
        tasks: "4",
        statusType: "InProgress",
        notifyType: "Warning",
      },
      {
        alertType: "Mold",
        location: "Mountain View Apartments",
        status: "MOLD DETECTED",
        time: "12:30 PM",
        unit: "Building 3 - Unit 5",
        tasks: "2",
        statusType: "InProgress",
        notifyType: "Warning",
      },
    ],
  },
  {
    id: "tab3",
    icon: NewIcon,
    text: "New",
    number: "04",
    numberColor: "#31353b",
    heightImg: 10,
    smallIcon: TodaySmall,
    title: "New",
    alerts: [
      {
        alertType: "Fire",
        location: "Hillside Condos",
        status: "SMOKE DETECTED",
        time: "02:15 PM",
        unit: "Building 8 - Unit 15",
        tasks: "4",
        statusType: "InProgress",
        notifyType: "Warning",
      },
    ],
  },
  {
    id: "tab4",
    icon: FlaggedIcon,
    text: "Flagged",
    number: "08",
    numberColor: "#31353b",
    heightImg: 10,
    smallIcon: TodaySmall,
    title: "Flagged",
    alerts: [
      {
        alertType: "Fire",
        location: "Hillside Condos",
        status: "SMOKE DETECTED",
        time: "02:15 PM",
        unit: "Building 8 - Unit 15",
        tasks: "4",
        statusType: "InProgress",
        notifyType: "Warning",
      },
      {
        alertType: "Mold",
        location: "Hidden Valley Apartments",
        status: "MOLD DETECTED",
        time: "08:21 AM",
        unit: "Building 12 - Unit 21",
        tasks: "2",
        statusType: "InProgress",
        notifyType: "Warning",
      },
    ],
  },
  {
    id: "tab5",
    icon: InProgress,
    text: "In Progress",
    number: "09",
    numberColor: "#31353b",
    heightImg: 16,
    smallIcon: TodaySmall,
    title: "In Progress",
    alerts: [
      {
        alertType: "Mold",
        location: "Hidden Valley Apartments",
        status: "MOLD DETECTED",
        time: "08:21 AM",
        unit: "Building 12 - Unit 21",
        tasks: "2",
        statusType: "New",
        notifyType: "Danger",
      },
      {
        alertType: "Fire",
        location: "Hillside Condos",
        status: "SMOKE DETECTED",
        time: "02:15 PM",
        unit: "Building 8 - Unit 15",
        tasks: "4",
        statusType: "InProgress",
        notifyType: "Warning",
      },
    ],
  },
  {
    id: "tab6",
    icon: Late,
    text: "Late",
    number: "00",
    numberColor: "#31353b",
    heightImg: 16,
    smallIcon: TodaySmall,
    title: "Late",
    alerts: [
      {
        alertType: "Water",
        location: "Lakeview Apartments",
        status: "WATER LEAK",
        time: "10:45 AM",
        unit: "Building 5 - Unit 10",
        tasks: "3",
        statusType: "New",
        notifyType: "Danger",
      },
    ],
  },
];
