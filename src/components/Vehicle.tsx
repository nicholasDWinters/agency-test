import { VehicleType } from 'generated/graphql';
import * as React from 'react';

const styles = require('./DealershipInformation.module.css');

interface VehicleProps {
    vehicle: VehicleType,
}

export const Vehicle: React.FC<VehicleProps> = ({ vehicle }): JSX.Element => {


    return (
        <div key={vehicle.id} className={styles.vehicleBox}>
            <div className={styles.vImgDiv}>
                <img className={styles.vImg} src={vehicle.imageUrl} alt={vehicle.name}></img>
            </div>
            <div className={styles.vPriceBox}><span className={styles.vPriceBoxPrice}>${Number.parseFloat((vehicle.priceCentsPerDay) / 100).toFixed(2)}</span><span className={styles.vPriceBoxSpan}>/day</span></div>
            <div className={styles.vContent}>

                <span className={styles.vType}>{vehicle.type.displayName}</span>
                <span className={styles.vName}>{vehicle.name}</span>
                <div className={styles.vAddressDiv}>
                    <span className={styles.vAddress}>{vehicle.address}</span>
                </div>
            </div>

        </div>
    );
};
