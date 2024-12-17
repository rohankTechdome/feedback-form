import React, { ReactNode } from 'react';

interface TooltipProps {
  children: ReactNode;
  text: string;
  heading: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, text, heading  }) => {
  return (
    <div className="relative flex items-center group">
      {children}
      <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col items-center">
        <div className="bg-purple-600 text-white text-xs rounded py-2 px-4 w-[328px] h-full shadow-lg relative">
          {heading} <br />
          {text}
          <div className="absolute bottom-[-4px] transform -translate-x-1/2 bg-purple-600 w-3 h-3 rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
