import { useMemo } from "react";
import Column from "../Column/Column";
import "./Board.css";

export default function Board({ groups, users, groupingType }) {
    const columns = useMemo(() => {
        const tempCols = [];
        console.log(users)
        for (const colName in groups) {
            console.log(groups[colName])
            tempCols.push(
                <Column key={colName} tickets={groups[colName]} label={colName}
                    groupingType={groupingType} users={users} />
            )
        }
        return tempCols;
    }, [groups, users, groupingType]);

    return (
        <div className="board">
            {columns}
        </div>
    )
}