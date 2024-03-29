import ToDoInput from "./components/ToDoInput";
import { DataProvider } from './components/DataProvider';

import { Routes, Route } from 'react-router-dom';
import TodoListItemUpdate from "./components/TodoListItemUpdate";
import Footer from "./components/Footer";

function App() {
  return (
    <DataProvider> {/* butun app i context ile sardık.. */}
      <div>
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
          {/* <ToDoInput /> */}
          <Routes>
            <Route path='/' element={<ToDoInput />} exact />
            <Route path='/update/:id' element={<TodoListItemUpdate />} />
          </Routes>
          <Footer />
        </div>
      </div>


    </DataProvider>
  );
}

export default App;
