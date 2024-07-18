import './App.css';
import AppHeader from "./components/AppHeader/Index"
import AppSideBar from "./components/AppSideBar/Index"
import PageContent from "./components/PageContent/Index"
import AppFooter from "./components/AppFooter/Index"
import { Space } from 'antd';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Space className='SideMenuAndPageContent'>
        <AppSideBar />
        <PageContent />
      </Space>
      <AppFooter />
    </div>
  );
}

export default App;
