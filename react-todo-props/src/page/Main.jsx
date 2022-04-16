import '../assets/css/App.css';
import {Header} from "../layout/Header";
import {Layout} from "../layout/Layout";
import {TodoContainer} from "../@context/components/TodoContainer";

export const Main = () => {
    return (
        <Layout>
            <Header/>
            <TodoContainer/>
        </Layout>
    );
}
