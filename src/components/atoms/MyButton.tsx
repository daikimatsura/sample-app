import React from "react";

type MyButtonProps = {
    title: string
};

export const MyButton: React.FC<MyButtonProps>  = ({ title }) => {
  return (
    <button>{title}</button>
  );
}
