import React from "react";
// @ts-ignore
import styles from './ToolTipContainer.module.scss';
import { isMobileOrTablet } from "@xr3ngine/engine/src/common/functions/isMobile";
import Snackbar from '@material-ui/core/Snackbar';
import { connect } from "react-redux";
import TouchApp from "@material-ui/icons/TouchApp";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { useTranslation } from 'react-i18next';

interface Props {
  message?: string;
  className?: string | '';
}

const mapStateToProps = (state: any): any => {
  return {   
  };
};


const TooltipContainer = (props: Props) =>{
  const interactTip = isMobileOrTablet() ? <TouchApp /> : 'E';
	const { t } = useTranslation();
  return props.message ? 
            <Snackbar anchorOrigin={{vertical: 'bottom',horizontal: 'center'}} 
            className={styles.TooltipSnackBar} open={true} 
            autoHideDuration={1000}>
              <section className={styles.innerHtml+' MuiSnackbarContent-root'}>
                <ErrorOutlineIcon color="secondary" />
                {t('common:tooltip.pressKey', { tip: interactTip, message: props.message})}
              </section>
            </Snackbar>
          :null;
};

export default connect(mapStateToProps)(TooltipContainer);