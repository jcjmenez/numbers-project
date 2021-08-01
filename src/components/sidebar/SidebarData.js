import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as SiIcons from 'react-icons/si';

const SidebarData = [
  {
    id: 1,
    title: 'Home',
    path: '/#',
    icon: <AiIcons.AiFillHome />,
    className: 'sidebar-text',
  },
  {
    id: 2,
    title: 'Fibonacci',
    path: '/fibonacci',
    icon: <SiIcons.SiGraphcool />,
    className: 'sidebar-text',
  },
];

export default SidebarData;
