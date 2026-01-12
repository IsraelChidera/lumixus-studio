import React from "react";

const index = ({
  children,
  className,
  onClick,
  type
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: any;
  type?: any;
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      style={{ boxShadow: "0px 4px 31px 0px rgba(0, 0, 0, 0.15)" }}
      className={`${className} rounded-[5px] text-sm hover:bg-accent hover:text-white transition-colors delay-150 ease-in w-fit py-[10px] px-[30px] bg-secondary text-white`}
    >
      {children}
    </button>
  );
};

export default index;
