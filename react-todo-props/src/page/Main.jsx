import '../assets/css/App.css';
import {Layout} from "../layout/Layout";
import {Header} from "../layout/Header";
import {TodoContainer} from "../components/TodoContainer";
import {useTodoStorage} from "../hooks/useTodoStorage";

export const Main = () => {
    const todoStorage = useTodoStorage();
    
    return (
        <Layout>
            <Header/>
            <TodoContainer todoStorage={todoStorage}/>
        </Layout>
    );
}
