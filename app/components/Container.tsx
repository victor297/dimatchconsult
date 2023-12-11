import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[1920px] mx-auto xl:px-24 md:px-2 lg:px-8  lg:mx-[170px]">
      {children}
    </div>
  );
};

export default Container;
