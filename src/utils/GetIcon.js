import Icon from "../components/Icon/Icon";
import UserIcon from "../components/UserIcon/UserIcon";

import NoPriority from "../assets/No-priority.svg";
import LowPriority from "../assets/Img - Low Priority.svg";
import MediumPriority from "../assets/Img - Medium Priority.svg";
import HighPriority from "../assets/Img - High Priority.svg";
import UrgentPriority from "../assets/SVG - Urgent Priority colour.svg";
import UrgentGreyPriority from "../assets/SVG - Urgent Priority grey.svg";
import Backlog from "../assets/Backlog.svg";
import Todo from "../assets/To-do.svg";
import InProgress from "../assets/in-progress.svg";
import Done from "../assets/Done.svg";
import Cancelled from "../assets/Cancelled.svg";
import Add from "../assets/add.svg";
import Down from "../assets/down.svg";
import Menu from "../assets/3 dot menu.svg";

export function getIcon(name, available, size) {
    // console.log(available)
    switch (name) {
        case "No priority":
            return <Icon path={NoPriority} />;
        case "Low":
            return <Icon path={LowPriority} />;
        case "Medium":
            return <Icon path={MediumPriority} />;
        case "High":
            return <Icon path={HighPriority} />;
        case "Urgent":
            return <Icon path={UrgentPriority} />;
        case "Urgent-grey":
            return <Icon path={UrgentGreyPriority} />;
        case "Backlog":
            return <Icon path={Backlog} />;
        case "Todo":
            return <Icon path={Todo} />;
        case "In progress":
            return <Icon path={InProgress} />;
        case "Done":
            return <Icon path={Done} />;
        case "Canceled":
            return <Icon path={Cancelled} />;
        case "add":
            return <Icon size={size} path={Add} />;
        case "down":
            return <Icon path={Down} />;
        case "menu":
            return <Icon path={Menu} />;
        default:
            return <UserIcon name={name} available={available} />;
    }
}
