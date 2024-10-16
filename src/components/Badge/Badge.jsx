import "./Badge.css";

export function Badge({ children }) {
    return (
        <div className={"badge"}>
            {children}
        </div>
    )
}