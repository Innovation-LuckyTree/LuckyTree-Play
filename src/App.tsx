import './App.css'
import { DashWrapper } from './shared/components/structural/DashWrapper'
import { Route, Routes } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { HomePage } from './pages/home/HomePage'
import { ResultsPage } from './pages/results/ResultsPage'
import { MyBetsPage } from './pages/my-bets/MyBetsPage'
import { WinningHistoryPage } from './pages/winning-history/WinningHistoryPage'
import { CreditHistoryPage } from './pages/credit-history/CreditHistoryPage'
import { CreditTrackingPage } from './pages/credit-tracking/CreditTrackingPage'
import { MyBetsDetailPage } from './pages/my-bets/MyBetsDetailPage'
import { WinningDetailPage } from './pages/winning-history/WinningDetailPage'
import { GamePage } from './pages/game/GamePage'

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          // colorPrimary: '#00b96b',

          // colorBgContainer: '#f6ffed',

        },
        components: {
          Layout: {
            // headerColor: '#ffffff', // Text color in header
            headerBg: '#171717'
            
          },
          Dropdown:{
            colorText: "black",
          }
        },
      }}
    >
      <Routes>
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/" element={<DashWrapper />}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="results" element={<ResultsPage/>}/>
          <Route path="my-bets" element={<MyBetsPage/>}/>
          <Route path="winning-history" element={<WinningHistoryPage/>}/>
          <Route path="credit-history" element={<CreditHistoryPage/>}/>
          <Route path="credit-tracking" element={<CreditTrackingPage/>}/>
        </Route>
        <Route path="my-bets/detail" element={<MyBetsDetailPage/>}/>
        <Route path="winning-history/detail" element={<WinningDetailPage/>}/>
        <Route path="game" element={<GamePage/>}/>
      </Routes>
    </ConfigProvider>
  )
}

export default App
