import React from "react";

import styles from "./Background.module.scss";

import { ReactComponent as Cloud2 } from "../../assets/Cloud_2.svg";
import { ReactComponent as Cloud3 } from "../../assets/Cloud_3.svg";
import { ReactComponent as Cloud4 } from "../../assets/Cloud_4.svg";

type BackgroundProps = {
  children: React.ReactNode;
};

export const Background = ({ children }: BackgroundProps) => {
  return (
    <>
      <div className={styles.clouds}>
        <Cloud2 className={styles.cloud2} />
        <Cloud3 className={styles.cloud3} />
        <Cloud4 className={styles.cloud4} />
      </div>
      <div className={styles.background}>{children}</div>
    </>
  );
};
