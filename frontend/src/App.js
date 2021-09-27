import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

import Commits from "./pages/Commits";

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        data-testid="App-sidebar"
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="px-4 py-4">
          <Switch>
            <Route exact path="/" component={Commits}></Route>
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default App;
