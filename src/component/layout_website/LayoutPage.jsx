import React, { useEffect } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import './LayoutPage.css'
import logo from '../../assets/logo/PC_logo.png'
import { Avatar, Badge, Button, Dropdown, Modal } from 'antd'
import { getUser} from '../../share_front/helperFront'
import { RiLoginCircleLine, RiLogoutCircleLine } from "react-icons/ri";

export default function LayoutPage() {
    const [visible, setVisible] = React.useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('');
    }

    const handleLogin = () => {
      navigate('/login');
    }
        

    // useEffect(() => {
    //   islogin();
    // }, [])

    // const islogin = ()=> {
    //   let isLogin = localStorage.getItem('isLogin');
    //   if(isLogin == 'false'){
    //     navigate('');
    //   }
    // }

    const itemsProfile = [
        {
          key: '1',
          label: (
            <a className='manrope font-bold' rel="noopener noreferrer" >
              My Profile
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a className='manrope font-bold' onClick={""} target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              Change Password
            </a>
          ),
        },
        {
            key: '4',
            label: (
              <a className='manrope font-bold' onClick={handleLogout} >
              Logout <RiLogoutCircleLine className='inline-block ml-4' size='20px' />
              </a>
            ),
          },
          // {
          //   key: '4',
          //   label: (
          //     <a className='Manrope' onClick={handleLogin} >
          //     Login <RiLoginCircleLine className='inline-block ml-4' size='20px' />
          //     </a>
          //   ),
          // }
      ];

  const user = getUser();

  return (
   <>
    <header className='w-full h-12 shadow bg-black sticky top-0 bg-opacity-90 z-50'>
        <nav className='max-w-8xl h-full mx-auto p-2 flex justify-between'>
            <div className="logo flex cursor-pointer">
                <img className='h-8' src={logo} alt="logo" />
                <h1 className='text-[20px] ml-1 uppercase font-bold manrope text-gray-100'>PreyCode</h1>
            </div>
           
            <div>
                <ul className='flex space-x-8 text-sm p-[5px] text-gray-100'>
                   <li>
                        <NavLink className={({isActive})=> isActive ? 'manrope font-medium text-gray-100 underline duration-300' : "manrope font-thin hover:text-gray-300 hover:font-medium hover:underline hover:duration-300"} to="">Home</NavLink>
                   </li>
                   <li>
                        <NavLink className={({isActive})=> isActive ? 'manrope font-medium text-gray-100 underline duration-300' : "manrope font-thin hover:text-gray-300 hover:font-medium hover:underline hover:duration-300"} to="/shop">Shop</NavLink>
                   </li>
                    <li>
                          <NavLink className='manrope font-thin hover:text-gray-300 hover:underline hover:duration-300' href="/">Blog</NavLink>
                    </li>
                    <li>
                          <NavLink className='manrope font-thin hover:text-gray-300 hover:underline hover:duration-300' href="/">Service</NavLink>
                    </li>
                    <li>
                          <NavLink className='manrope font-thin hover:text-gray-300 hover:underline hover:duration-300' href="/">About</NavLink>
                    </li>
                    <li>
                          <NavLink className='manrope font-thin hover:text-gray-300 hover:underline hover:duration-300' href="/">Contact</NavLink>
                    </li>
                    
                </ul>
            </div>
            <div></div>
            <div className='space-x-3 cursor-pointer flex'>
                <div className='flex space-x-5'>
                  <div className='mt-[5px]'>
                    <Badge count={0} size='small'>
                      <i class="fa-solid fa-cart-arrow-down text-gray-100 text-xl"></i>
                    </Badge>
                  </div>
                  <div>
                    <Badge >
                        <Avatar src="https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg" shape="square" size="medium" />
                    </Badge>
                  </div>
                </div>
                
                <Dropdown  menu={{ items:itemsProfile }} placement="bottomRight" arrow>
                    <Button className='manrope font-medium text-gray-100 '> {user.firstname+' -- '+user.lastname} </Button> 
                </Dropdown>
            </div>
        </nav>
        <Modal
                className='manrope'
                title="Login Here"
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                footer={null}
                open={visible}
            >

            </Modal>
    </header>
    <Outlet />
    <footer className='w-full bg-black mt-5'>
      <div className='mx-auto max-w-7xl grid grid-cols-4 py-6 gap-4'>
        <div className='h-full'>
            <h1 className='text-gray-100 manrope text-xl font-bold'>Aboute Us</h1>
            <p  className='text-gray-300 manrope text-[13px] mt-3 font-medium'>Welcome to [Your E-commerce Website], where your shopping experience 
              meets unparalleled convenience and limitless possibilities. As a premier
              online destination for all your retail needs, we take pride in offering
              a diverse array of high-quality products coupled with exceptional 
              customer service.</p>
              <div>
                <ul className='flex space-x-6 mt-3'>
                  <li>
                    <a href=""><i class="fa-brands fa-facebook-f text-teal-400 text-xl"></i></a>
                  </li>
                  <li>
                    <a href=""><i class="fa-brands fa-twitter text-teal-400 text-xl"></i></a>
                  </li>
                  <li>
                    <a href=""><i class="fa-brands fa-instagram text-teal-400 text-xl"></i></a>
                  </li>
                  <li>
                    <a href=""><i class="fa-brands fa-youtube text-teal-400 text-xl"></i></a>
                  </li>
                </ul>
              </div>
        </div>
        <div className='h-full'>
            <h1 className='text-gray-100 manrope text-xl font-bold'>Contact Us</h1>
           <div className='mt-3 space-y-4'>
             <div>
                <a href="">  <p className='text-gray-200 manrope'><i class="fa-solid fa-tty mr-2 text-teal-400"></i> +855 096 270 1770</p></a>
             </div>
             <div>
                <a href="">  <p className='text-gray-200 manrope'><i class="fa-solid fa-envelope-circle-check mr-2 text-teal-400"></i> im.vakhim2211@gmail.com</p></a>
             </div>
              <div>
                  <a href="">  <p className='text-gray-200 manrope'><i class="fa-solid fa-globe mr-2 text-teal-400"></i>Toul Kork, Phnom Penh, Cambodia</p></a>
              </div>
              <div>
                  <a href="">  <p className='text-gray-200 manrope'><i class="fa-solid fa-calendar-days mr-2 text-teal-400"></i>Mon - Fri: 8:00 - 17:00, Sun: 11:00</p></a>
              </div>
                
             
           </div>
             
        </div>
        <div className='h-full'>
            <h1 className='text-gray-100 manrope text-xl font-bold'>Our Service</h1>
           <div className='mt-3 space-y-3'>
             <div>
                <a href="">  <p className='text-gray-200 hover:text-gray-400 hover:underline duration-300 manrope'>Home</p></a>
             </div>
             <div>
                <a href="">  <p className='text-gray-200 hover:text-gray-400 hover:underline duration-300 manrope'>About Us</p></a>
             </div>
              <div>
                <a href="">  <p className='text-gray-200 hover:text-gray-400 hover:underline duration-300 manrope'>Service</p></a>
              </div>
              <div>
                <a href="">  <p className='text-gray-200 hover:text-gray-400 hover:underline duration-300 manrope'>Feature</p></a>
              </div>
                
             
           </div>
             
        </div>
        <div className='h-full'>
            <h1 className='text-gray-100 manrope text-xl font-bold'>Quick Link</h1>
           <div className='mt-3 space-y-3'>
             <div>
                <a href="">  <p className='text-gray-200 hover:text-gray-400 hover:underline duration-300 manrope'>Knowldege Base</p></a>
             </div>
             <div>
                <a href="">  <p className='text-gray-200 hover:text-gray-400 hover:underline duration-300 manrope'>Hire An Expert</p></a>
             </div>
              <div>
                <a href="">  <p className='text-gray-200 hover:text-gray-400 hover:underline duration-300 manrope'>FAQ</p></a>
              </div>
              <div>
                <a href="">  <p className='text-gray-200 hover:text-gray-400 hover:underline duration-300 manrope'>Contact</p></a>
              </div>
                
             
           </div>
             
        </div>
      </div>
      <p className='text-gray-200 manrope text-center pb-5 text-sm'>
      Your go-to online platform for innovative content creation, collaboration, and copyright protection solutions.
      </p>

    </footer>
   </>
  )
}

// "username" : "0962701723",
// "password" : "1234khim",

// 1107khim
// 09627017701
