import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as SiIcons from 'react-icons/si';

const SidebarData = [
  {
    // EXIT
    id: 1,
    title: '',
    path: '/#',
    icon: <AiIcons.AiOutlineClose />,
    className: 'sidebar-text exit',
  },
  {
    id: 2,
    title: 'Home',
    path: '/#',
    icon: <AiIcons.AiFillHome />,
    className: 'sidebar-text',
  },
  {
    id: 3,
    title: 'Fibonacci',
    path: '/fibonacci',
    icon: <SiIcons.SiGraphcool />,
    className: 'sidebar-text',
  },
];

export default SidebarData;
