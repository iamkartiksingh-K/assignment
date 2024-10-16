import { useCallback, useMemo } from 'react';
import './UserIcon.css'

function UserIcon({ name, available }) {
    const text = useMemo(() => {
        return name?.split(" ").map((item) => item[0].toUpperCase()).join("");
    }, [name]);
    const getRandomColor = useCallback(() => {
        const colors = [
            "#4C8C8A",
            "#4C6A52",
            "#7C6F91",
            "#D4A659",
            "#D08C60",
            "#D96C75",
            "#597D9A",
            "#768948"
        ];
        const idx = Math.floor(Math.random() * colors.length);
        return colors[idx];
    }, [])
    return (
        <div className='usericon-container' style={{ backgroundColor: getRandomColor() }}>
            <div className='usericon-text'>{text}</div>
            <div className={`user-status ${available && "available"}`} ></div>
        </div>
    );
}

export default UserIcon;
