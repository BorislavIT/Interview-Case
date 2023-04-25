import Layout from "./components/Layout/Layout";
import MainRouter from "./components/Routers/MainRouter";
import "./App.css";

const App = () => {
  return (
    <div className={`App h-full`}>
      <Layout>
        <MainRouter />
      </Layout>
    </div>
  );
};

export default App;
