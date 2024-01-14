"use client";

import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { addTodo } from "@/api";

const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [newTaskValue, setNewTaskValue] = useState("");

  const handleSubmitNewTodo = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: newTaskValue,
    });
    setNewTaskValue("");
    setModalOpen(false);
    router.refresh();
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full"
      >
        Add new task <AiOutlinePlus className="ml-2" size={18} />
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form
          onSubmit={handleSubmitNewTodo}
          className="flex flex-col gap-3 items-center justify-center"
        >
          <h3 className="font-bold text-lg">Add new task</h3>
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Type your task here..."
            value={newTaskValue}
            onChange={(e) => setNewTaskValue(e.target.value)}
          ></textarea>
          <button type="submit" className="btn btn-ghost w-full">
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
