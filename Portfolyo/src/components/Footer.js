import React from 'react';

const Footer = ({ data }) => {
    return (
        <footer className="border-slate-500 bg-opacity-75 bg-purple dark:bg-inherit border-t py-10">
            {/* Footer content */}
            <div className="pt-4 text-center py-6">
                {/* Copyright text */}
                <p className="text-sm">&copy; {new Date().getFullYear()} John Doe. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
