import Dashboard from "./pages/Dashboard/Dashboard";
import styles from "./app.module.scss";
import DragableChatbot from "./components/DraggableChatbot/DragableChatbot";
import MCQTest from "./pages/TestPage/TestPage";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.sidebar}>
        {" "}
        {/*<Dashboard />*/}
        <MCQTest/>
      </div>

      {/*<DragableChatbot />*/}
    </div>
  );
}

export default App;
