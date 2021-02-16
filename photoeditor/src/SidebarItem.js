import React from 'react';

function SidebarItem({ name }) {
    return (
        <button className="sidebar-item">
           { name }
        </button>
    )
}

export default SidebarItem;
