import ToDoInput from "./components/ToDoInput";
import { DataProvider } from './components/DataProvider';
import TodoList from "./components/TodoList";

function App() {
  return (
    <DataProvider> {/* butun app i context ile sardık. */}
      <div className='App'>
        <div className="jumbotron jumbotron-fluid mb-4 py-1 text-center">
          <div className="container">
            <h1 className="display-3">
              <span className="textEfectRubberBrand" aria-hidden="true">Todos List</span>
              {/* <span classNmae="textEfectRubberBrand" aria-hidden="true"> List</span> */}
            </h1>
            <p className="lead">
              <span className="textEfectRubberBrand" aria-hidden="true">Plan, live your plan. Let your future develop according to your own preferences!</span>
            </p>
          </div>
        </div>

        <ToDoInput />

        <TodoList />
      </div>
    </DataProvider>
  );
}

export default App;
