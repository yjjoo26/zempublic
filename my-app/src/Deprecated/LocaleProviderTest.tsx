import '../App.css';
import { Pagination, LocaleProvider } from 'antd';
import zhCN from 'antd/es/locale-provider/zh_CN';

const App = () => (
  <div>
    <Pagination defaultCurrent={1} total={50} showSizeChanger />
  </div>
);


function LocaleProviderTest() {
  
  return (
    <div className="LocaleProviderTest">
        <h3>LocaleProvider Examples-(Lacalization) </h3>
        <div>
          <LocaleProvider locale={zhCN}>
            <App />
          </LocaleProvider>
        </div>
        
    </div>
    
  );
}

export default LocaleProviderTest;