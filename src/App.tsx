import "./App.css";
import Mui_Mode from "./components/mui-mode";
import Users from "./fetch/Users";
import AppProviders from "./providers/AppProviders";

function App() {
  return (
    <AppProviders>
      <Mui_Mode />
      <Users />
    </AppProviders>
  );
}

export default App;
