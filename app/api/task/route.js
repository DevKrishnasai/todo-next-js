import { DB } from "@/libs/DB";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export const GET = async () => {
  // const { title, description } = task.json();
  try {
    // const newTask = new Task({ title, description });
    await DB();
    // await newTask.save();
    return NextResponse.json(
      { message: "Task saved successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(error);
  }
};
// export const GET = async (task) => {
//   const { title, description } = task.json();
//   try {
//     const newTask = new Task({ title, description });
//     await newTask.save();
//     return NextResponse.json(
//       { status: 201 },
//       { message: "Task saved successfully" }
//     );
//   } catch (error) {
//     return NextResponse.json(error);
//   }
// };
