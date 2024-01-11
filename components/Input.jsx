"use client";
import { HiPlus } from "react-icons/hi";
import Modal from "./Modal";
import { useState } from "react";

const Input = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((e) => !e);
  };
  return (
    <div className="w-full">
      <button className="btn btn-primary w-full flex" onClick={toggle}>
        Add task <HiPlus size={16} />
      </button>

      <Modal isOpen={isOpen} toggle={toggle} />
    </div>
  );
};

export default Input;
