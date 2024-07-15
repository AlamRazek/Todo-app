import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/container";

const Todo = () => {
  return (
    <Container>
      <h1 className="text-center text-3xl font-bold my-10">My Todos </h1>
      <TodoContainer></TodoContainer>
    </Container>
  );
};

export default Todo;
