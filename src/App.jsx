import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { HomeRoute, EilatRoute } from './routes';
import TopBar from './TopBar';

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailIcon from '@material-ui/icons/Mail';

const App = () => {

  useEffect(() => {
    document.title = "Туры по Израилю";
  }, []);

  return (
    <BrowserRouter>
      <TopBar>
        <a target="_blank" rel="noreferrer" title="Свяжитесь с нами по WhatsApp" href="https://api.whatsapp.com/send?phone=972526881816" style={{color: "white", textDecoration: "none"}} >
          <div>
            <WhatsAppIcon />
            <span>+972-52-688-1816 (Екатерина)</span>
          </div>
        </a>
        <a target="_blank" rel="noreferrer" title="Свяжитесь с нами по Email" href="mailto: ekaterina.krol@gmail.com" style={{color: "white", textDecoration: "none"}} >
          <div style={{marginLeft: 10}}>
            <MailIcon />
            <span>ekaterina.krol@gmail.com</span>
          </div>
        </a>
      </TopBar>
      {HomeRoute}
      {EilatRoute}
    </BrowserRouter>
  )
}

export default App;
