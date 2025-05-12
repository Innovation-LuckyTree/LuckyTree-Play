import { BookFilled, CarryOutFilled, CreditCardFilled, FileTextFilled, HomeFilled, LockFilled, TrophyFilled } from "@ant-design/icons"
import { MenuProps } from "antd";
import { Link } from "react-router-dom";

const routes: MenuProps['items'] = [
    {
      key: '/',
      icon: <HomeFilled />,
      label: <Link to='/'>Home</Link>,
    },
    {
      key: '/results',
      icon: <CarryOutFilled />,
      label: <Link to='/results'>Results</Link>,
    },
    {
      key: '/my-bets',
      icon: <FileTextFilled />,
      label: <Link to='/my-bets'>My Bets</Link>,
    },
    {
      key: '/winning-history',
      icon: <TrophyFilled />,
      label: <Link to='/winning-history'>Winning History</Link>,
    },
    {
      key: '/credit-history',
      icon: <CreditCardFilled />,
      label: <Link to='credit-history'>Credit History</Link>,
    },
    {
      key: '/credit-tracking',
      icon: <BookFilled />,
      label: <Link to='credit-tracking'>Credit Tracking</Link>,
    },
  ];

export const getSideMenu = () => {
    return routes;
}