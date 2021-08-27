import * as React from 'react';
import rrlogo from '../images/rrlogotransparent.jpg';
import appStoreLogo from '../images/available-on-app-store-button-graphic.jpg';
import googleLogo from '../images/background-copy.jpg';

const styles = require('./DealershipInfo.module.css');



export const Footer: React.FC = (props) => {


    return (
        <div>
            <img className={styles.appStoreLogo} src={appStoreLogo} alt='app store'></img>
            <div className={styles.footer}>
                <div>
                    <img className={styles.rrLogo} src={rrlogo} alt='rr logo'></img>
                    <span>Powered by Recreation Rentalz</span>
                </div>
                <div>
                    <span className={styles.footerSpan}>Terms of Use</span>
                    <span>Privacy Policy</span>
                </div>
                <div className={styles.googleDiv}>
                    <span className={styles.footerSpan}>Maps powered by </span>
                    <img className={styles.googleLogo} src={googleLogo} alt='google logo'></img>
                </div>
            </div>
        </div>
    );
};