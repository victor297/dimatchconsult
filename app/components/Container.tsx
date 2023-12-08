import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[1920px] mx-auto xl:px-24 md:px-2 lg:px-4 ">
      {children}
    </div>
  );
};

export default Container;
