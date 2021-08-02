import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as SiIcons from 'react-icons/si';
import * as BiIcons from 'react-icons/bi';

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
  {
    id: 3,
    title: 'Collatz Conjecture',
    path: '/collatz',
    icon: <BiIcons.BiLineChartDown />,
    className: 'sidebar-text',
  },
];

export default SidebarData;
