'use client';
import Image from 'next/image';
import Link from 'next/link';

import EditIcon from '@mui/icons-material/Edit';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GroupsIcon from '@mui/icons-material/Groups';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import WindowIcon from '@mui/icons-material/Window';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EmailIcon from '@mui/icons-material/Email';

import iconWonderTrust  from '/public/kanban/iconWonderTrust.svg';
import iconMode  from '/public/kanban/iconMode.svg';
import iconSummly  from '/public/kanban/iconSummly.svg';
import iconBark  from '/public/kanban/iconBark.svg';
import iconProfile  from '/public/kanban/iconProfile.svg';

import { experimentalStyled as styled } from '@mui/material/styles';

const BoxDefault = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  borderRadius: '63px',
  padding: '10px 20px',
  fontSize: '14px',
  fontWeight: '700',
  '.text': {
  },
  '.counter': {
    borderRadius: '5px',
    padding: '8px 10px',
    lineHeight: 1,
    color: '#fff',
  },
  '&.red': {
    backgroundColor: '#F3DBE6',
    '.text': {
      color: '#C66995',
    },
    '.counter': {
      backgroundColor: '#C66995',
    },
  },
  '&.orange': {
    backgroundColor: '#F9D9C2',
    '.text': {
      color: '#D17633',
    },
    '.counter': {
      backgroundColor: '#D17633',
    },
  },
  '&.blue': {
    backgroundColor: '#CDE1ED',
    '.text': {
      color: '#518CB5',
    },
    '.counter': {
      backgroundColor: '#518CB5',
    },
  },
  '&.violet': {
    backgroundColor: '#E5D9EB',
    '.text': {
      color: '#9D77BB',
    },
    '.counter': {
      backgroundColor: '#9D77BB',
    },
  },
}));

const headerData = [
  {
    icon: <SmartphoneIcon />,
    text: 'By Status',
  }, 
  {
    icon: <WhatshotIcon />,
    text: 'High Priority',
  },
  {
    icon: <GroupsIcon />,
    text: 'Team View',
  },
  {
    icon: <StopCircleIcon />,
    text: 'Estimated Value>$100k',
  },
  {
    icon: <WindowIcon />,
    text: 'All Record',
  }
];

const counterData = [
  {
    text: 'Lead',
    count: 3,
    amount: '$ 75,000.00',
    color: 'red'
  }, 
  {
    text: 'Qualified',
    count: 1,
    amount: '$ 125,000.00',
    color: 'orange'
  }, 
  {
    text: 'Proposal',
    count: 2,
    amount: '$ 140,000.00',
    color: 'blue'
  }, 
  {
    text: 'Negotiation',
    count: 1,
    amount: '$ 30,000.00',
    color: 'violet'
  },
];

const mainData = [
  {
    logo: iconWonderTrust,
    title: 'Wondertrust',
    name: 'Stan Alvarez',
    amount: '$ 25,000.00',
    email: 'stan@notion.so',
    icon: iconProfile,
    profile: 'Shirley Miao',
  }, 
  {
    logo: iconMode,
    title: 'Mode',
    name: '',
    amount: '$ 125,000.00',
    email: '',
    icon: '',
    profile: '',
  }, 
  {
    logo: iconSummly,
    title: 'Summly',
    name: 'Kim Saunders',
    amount: '$ 30,000.00',
    email: 'ks12@notion.so',
    icon: iconProfile,
    profile: 'Christine Wang',
  }, 
  {
    logo: iconBark,
    title: 'Bark',
    name: '',
    amount: '$ 25,000.00',
    email: '',
    icon: '',
    profile: '',
  }, 
];

export default function Page() {
  return (
    <div>
      <div className='bg-[#FDFDFD] p-[25px] flex flex-col xl:flex-row justify-between items-center gap-[30px]'>
        <div className='flex gap-[10px] items-center'>
          <div className='text-[40px] leading-[50px] font-bold text-[#003C4D] flex-1'>Pipeline</div>
          <div className='text-[#757575]'>
            <EditIcon />
          </div>
        </div>
        <div className='flex flex-col xl:flex-row gap-[28px]'>
          <div className='flex flex-col md:flex-row gap-[28px] text-[#757575]'>
            {headerData.map((item, index) => (
              <div className={`flex items-center gap-[10px] ${index ? '' : 'text-[#003C4D]' } hover:text-[#003C4D] transition-all cursor-pointer`}>
                <div className="">{item.icon}</div>
                <div className='text-[16px] leading-[28px] font-bold'>{item.text}</div>
              </div>
            ))}
          </div>
          <div className='relative w-[210px] h-full m-auto'>
            <div className='absolute left-[10px] top-0 bottom-0 flex items-center justify-center text-[#434343]'>
              <SearchIcon />
            </div>
            <input type="text" placeholder='Search' className='border border-gray-300 rounded-md text-[#003C4D] font-bold pl-[35px] max-w-[200px] py-[10px]' />
          </div>
        </div>
      </div>
      <Link href='/kanban/moderator'>
      <div className='p-[24px] flex flex-col xl:flex-row justify-between items-center gap-[28px] flex-wrap'>
        {counterData.map((item, index) => (
          <div className='flex items-center gap-[10px]'>
            <div className='flex items-center gap-[10px]'>
              <BoxDefault className={`${item.color}`}>
                <div className='text'>{item.text}</div>
                <div className='counter'>{item.count}</div>
              </BoxDefault>
              <div className='text-[#4F4F4F] font-medium'>{item.amount}</div>
            </div>
            <div className='text-[#003C4D]'>
              <AddIcon />
              <MoreHorizIcon />
            </div>
          </div>
        ))} 
      </div>
      </Link>
      <div className='p-[24px] flex flex-col xl:flex-row gap-[24px] flex-wrap items-center xl:items-start'>
        {mainData.map((item, index) => (
          <Link href={`/kanban/${item.title.toLowerCase()}`}>
            <div className='bg-[#fff] rounded-[8px] px-[22px] py-[17px] flex gap-[10px] flex-col w-[370px]'> 
              { item.title ?
              <div className='flex items-center gap-[10px]'> 
                { item.logo ? <Image src={item.logo} alt={item.title} width={24} height={24} /> : "" }
                <div className='text-[#003C4D] font-bold leading-[21px]'>{item.title}</div>
              </div>
              : "" }
              { item.name ? <div className='text-[#4F4F4F] text-[14px] leading-[21px]'>{item.name}</div> : "" }
              { item.amount ? <div className='text-[#003C4D] text-[24px] leading-[34px] font-bold'>{item.amount}</div> : "" }
              { item.email ? 
              <div className='flex items-center gap-[10px]'> 
                <EmailIcon className='text-[#4F4F4F] w-[20px] h-[20px]' />
                <div className='text-[#4F4F4F] text-[14px] leading-[21px]'>{item.email}</div>
              </div>
              : "" }
              { item.profile ? <hr className=' border-[#EEE] my-[10px]' /> : "" }
              { item.profile ?
              <div className='flex items-center gap-[6px]'> 
                <Image src={item.icon} alt={item.profile} width={24} height={24} />
                <div className='text-[#4F4F4F] font-bold leading-[21px]'>{item.profile}</div>
              </div>
              : "" }
            </div>
          </Link>
        ))} 
      </div>
    </div>
  );
}
