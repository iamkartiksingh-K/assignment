import { getIcon } from "../../utils/GetIcon"
import "./Card.css"
import { Badge } from "../Badge/Badge";
import { getPriorityLabel } from "../../utils/helpers";

export default function Card({ data, groupingType, user }) {
    const { id, priority, status, tag, title } = data;
    return (
        <div className="card-body">
            <div className="card-header">
                <p>{id}</p>
                {groupingType !== "user" && getIcon(user.name, user.available)}
            </div>
            <div className="body">
                {groupingType !== "status" && getIcon(status)}
                <p className="card-title">{title}</p>
            </div>
            <div className="card-footer">
                {groupingType !== "priority" && <Badge>
                    {getIcon(getPriorityLabel(priority))}
                </Badge>}
                <Badge >
                    <div className={`circle`} ></div>
                    {tag[0]}
                </Badge>
            </div>
        </div>
    )
}