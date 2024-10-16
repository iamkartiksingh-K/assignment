import { getIcon } from "../../utils/GetIcon";
import "./Column.css";
import Card from "../Card/Card";

export default function Column({ tickets, label, groupingType, users }) {
    return (
        <div className='column'>
            <div className='column-header'>
                <div className='column-header-left-container'>
                    {getIcon(groupingType === "user" ? users[label]?.name : label, users[label]?.available)}
                    <div className='column-title'>
                        {groupingType === "user" ? users[label]?.name : label}
                        <span className='count'>{tickets.length}</span>
                    </div>
                </div>
                <div className='column-header-right-container'>
                    {getIcon("add", 20)}
                    {getIcon("menu")}

                </div>
            </div>
            <div className='cards-container'>
                {tickets.map((ticket) => <Card key={ticket.id} data={ticket} groupingType={groupingType} user={users[ticket.userId]} />)}
            </div>
        </div>
    )
}