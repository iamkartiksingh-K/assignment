import React from 'react';

const Icon = ({ path, color, size = 15 }) => {
    const iconStyle = {
        width: `${size}px`,
        height: `${size}px`,
        ...(color && { fill: color })
    };

    return (
        <div style={iconStyle}>
            <img
                src={path}
                alt="icon"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
        </div>
    );
};

export default Icon;
