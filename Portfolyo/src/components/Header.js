import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import ToggleSwitch from './ToggleSwitch';

import '../App.css';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    const navigation = [
        { name: "About", href: 'about' },
        { name: "Services", href: 'services' },
        { name: "Skills", href: 'skills' },
        { name: "Projects", href: 'projects' },
        { name: "Timeline", href: 'timeline' },
        { name: "Testimonials", href: 'testimonials' },
        { name: "Contact", href: 'contact' },
    ];

    return (
        <header className={`sticky inset-x-0 top-0 px-6  lg:px-12 z-50 ${darkMode ? 'bg-light shadow-md' : 'bg-dark shadow-2xl'}  }`}>
            <nav className='flex items-center justify-between p-5 lg:px-8'>
                <div className='flex flex-1'>
                    <span className='text-2xl font-bold cursor-pointer' onClick={() => window.scrollTo(0, 0)}>
                        <span className='text-purple'> &lt;</span>
                        <span className="logo">John Doe</span>
                        <span className='text-purple'>/&gt;</span>
                    </span>
                </div>
                <div className='hidden lg:flex lg:flex-1 lg:justify-end space-x-4 px-6 lg:px-0'>
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="text-sm font-semibold leading-6 hover:text-purple hover:text-md cursor-pointer px-2 py-1 rounded-md transition duration-300"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className='hidden md:flex md:items-center md:space-x-4 px-6 '>
                    <ToggleSwitch darkMode={darkMode} setDarkMode={setDarkMode}/>
                </div>
                <div className="flex lg:hidden">
                <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-dark px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6 text-purple" aria-hidden="true" />
                </button>
                <div className='md:flex md:items-end justify-end md:space-x-4 px-6 '>
                    <ToggleSwitch darkMode={darkMode} setDarkMode={setDarkMode}/>
                  </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="block rounded-lg px-3 py-2 text-purple font-semibold leading-7 hover:bg-slate-500 "
                            >
                                {item.name}
                            </Link>
                        ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
    );
};

export default Header;
