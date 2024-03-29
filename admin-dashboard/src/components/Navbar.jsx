// Core
import React, { useEffect } from 'react';
// Components
import { Cart, Chat, Notification, UserProfile } from '.';
// Context
import { useStateContext } from '../contexts/ContextProvider';
// Images
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button 
      type='button' 
      style={{ color }}
      className='relative text-xl rounded-full p-3 hover:bg-light-gray'
      onClick={customFunc}>
        <span style={{ background: dotColor}}
          className='absolute inline-flex
          rounded-full h-2 w-2 right-2 top-2'
        />
        { icon }
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked,
    handleClick, screenSize, setScreenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if(screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize])
  
  return (
    <div className='flex justify-between p-2
    md:mx-6 relative'>
      <NavButton 
        title='Menu' 
        color="blue"
        icon={<AiOutlineMenu />}
        customFunc={() => 
          setActiveMenu((prevActiveMenu) => !prevActiveMenu)
        }
      />
        <div className='flex justify-between p-2 md:mx-6 relative'>
          
          <div className='flex'>
            <NavButton 
              title='Cart' 
              color="blue"
              icon={<FiShoppingCart />}
              customFunc={() => handleClick('cart')}
            />
            <NavButton 
              title='Chat'
              dotColor="#03c9D7"
              color="blue"
              icon={<BsChatLeft />}
              customFunc={() => 
                setActiveMenu(handleClick('chat'))
              }
            />
            <NavButton 
              title='Notifications'
              dotColor="#03c9D7"
              color="blue"
              icon={<RiNotification3Line />}
              customFunc={() => setActiveMenu(handleClick('notification'))}
            />
            <TooltipComponent 
              content="Profile"
              position="BottomCenter"
            >
              <div 
              className='flex items-center gap-2
                cursor-pointer p-1 hover:bg-light-gray
                rounded-lg'
              onClick={() => handleClick('userProfile')}
              >
                <img 
                  className="rounded-full w-8 h-8 object-cover"
                  src={avatar}
                />
                <p>
                  <span className='text-gray-400 text-14'>Hi,</span>
                  {' '}
                  <span className='text-gray-400 font-bold ml-1 text-14'>Denys</span>
                </p>
                <MdKeyboardArrowDown className='text-gray-400 text-14' />
              </div>
            </TooltipComponent>
            { isClicked.cart && <Cart /> }
            { isClicked.chat && <Chat /> }
            { isClicked.notification && <Notification /> }
            { isClicked.userProfile && <UserProfile /> }
          </div>
        </div>
    </div>
  )
}

export default Navbar 