import '../assets/css/App.css';
import {Layout} from "../layout/Layout";
import {Header} from "../layout/Header";
import {TodoContainer} from "../components/TodoContainer";
import {useTodoStorage} from "../hooks/useTodoStorage";

const todoStorage = useTodoStorage();

export const Main = () => {

    return (
        <Layout>
            <Header/>
            <TodoContainer todoStorage={todoStorage}/>
        </Layout>
    );
}
