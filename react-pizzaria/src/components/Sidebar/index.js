import React from 'react';

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Pizzas</SidebarLink>
                <SidebarLink to="/">Desserts</SidebarLink>
                <SidebarLink to="/">Full menu</SidebarLink>
            </SidebarMenu>
        </SidebarContainer>
    )
}

export default Sidebar