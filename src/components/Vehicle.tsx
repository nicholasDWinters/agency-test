import { VehicleType } from 'generated/graphql';
import * as React from 'react';

const styles = require('./DealershipInformation.module.css');

interface VehicleProps {
    vehicle: VehicleType,
}

export const Vehicle: React.FC<VehicleProps> = ({ vehicle }): JSX.Element => {


    return (
        <div key={vehicle.id} className={styles.vehicleBox}>
            <img className={styles.vImg} src={vehicle.imageUrl} alt={vehicle.name}></img>
            <div className={styles.vContent}>

                <span className={styles.vType}>{vehicle.type.displayName}</span>
                <span className={styles.vName}>{vehicle.name}</span>
                <span className={styles.vAddress}>{vehicle.address}</span>
            </div>
            <div className={styles.vPriceBox}><span className={styles.vPriceBoxPrice}>${vehicle.priceCentsPerDay}</span><span className={styles.vPriceBoxSpan}>/day</span></div>

        </div>
    );
};
