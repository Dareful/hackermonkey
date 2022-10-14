import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

import TelegramIcon from "@material-ui/icons/Telegram";
import { Switch } from "@material-ui/core";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

import Data from "./Data";
import BasicTable from "./BasicTable";
import Footer from "./Footer";

import styles from "./Header.module.css";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [seconds, setSeconds] = useState(60);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "light" : "dark",
    },
  });
  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    }
  });

  return (
    <>
      <ThemeProvider ThemeProvider theme={theme}>
        <Paper>
          <div className={styles.container}>
            <div className={styles.left_div}>
              <p className={styles.heading_title}>HODLINFO</p>
              <p className={styles.powered}>Powered By <span className={styles.finstreet}>Finstreet</span></p>
            </div>
            <div className={styles.center_div}>
              <select className={styles.select_box}>
                <option>INR</option>
              </select>

              <select className={styles.select_box}>
                <option>BTC</option>
                <option>ETH</option>
                <option>USDT</option>
                <option>XRP</option>
                <option>TRX</option>
                <option>DASH</option>
                <option>ZEC</option>
                <option>XEM</option>
                <option>LOST</option>
                <option>WIN</option>
                <option>BTT</option>
                <option>WRX</option>
              </select>

              <botton className={styles.select_box}>Buy BTC</botton>
            </div>

            <div className={styles.rigth_div}>
              <div className={styles.timer}>{seconds}</div>
              <Button variant="contained">
                <TelegramIcon />
                Connect Telegram
              </Button>

              <Switch
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                className={styles.switch}
              />
            </div>
          </div>
          <Data />
          <BasicTable />
          <Footer />
        </Paper>
      </ThemeProvider>
    </>
  );
};

export default Header;
