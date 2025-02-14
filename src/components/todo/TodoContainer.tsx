import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");

  // from local state
  // const { todos } = useAppSelector((state) => state.todos);

  // from server
  const { data: todos, isLoading, isError } = useGetTodosQuery(priority);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal></AddTodoModal>
        <TodoFilter priority={priority} setPriority={setPriority}></TodoFilter>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl   p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-md space-y-3">
          {todos?.data.map((item) => (
            <TodoCard {...item} key={item._id}></TodoCard>
          ))}
        </div>
        {/* <div className="bg-white text-2xl font-semibold p-5 flex justify-center items-center">
          <p>There is no task pending</p>{" "}
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
