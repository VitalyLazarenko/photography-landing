import React from 'react';
import styles from './Contacts.module.scss';
import {Grid, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import {contactsSelector} from "../../redux/app.module";
import instLogo from './icons/instagram.svg';
import viberLogo from './icons/viber.svg';
import telegramLogo from './icons/telegram.svg';
import wtLogo from './icons/whatsapp.svg';
import phoneLogo from './icons/phone.svg'

export const Contacts = () => {
    const contacts = useSelector(contactsSelector);

    return (
        contacts ?
            (
                <Grid container className={styles.contact_wrapper}>
                    <Grid item md={12} className={styles.title_container}>
                        <Typography className={styles.title}>{contacts.title}</Typography>
                        <Typography className={styles.description}>{contacts.description}</Typography>
                    </Grid>
                    <Grid item md={12} className={styles.links_container}>
                        <a target="_blank" rel="noopener noreferrer" href={contacts.link_instagram} className={styles.link}>
                            <img src={instLogo} alt=""/>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href={contacts.link_viber} className={styles.link}>
                            <img src={viberLogo} alt=""/>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href={contacts.link_telegram} className={styles.link}>
                            <img src={telegramLogo} alt=""/>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href={contacts.link_watsapp} className={styles.link}>
                            <img src={wtLogo} alt=""/>
                        </a>
                        <a href={contacts.phone_number} rel="noopener noreferrer" className={styles.link}>
                            <img src={phoneLogo} alt=""/>
                        </a>
                    </Grid>
                </Grid>
            ) : null
    )
}
