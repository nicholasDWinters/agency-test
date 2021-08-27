import * as React from 'react';
import _ from 'lodash';
import { useParams } from 'react-router-dom';
import rectangle from '../images/rectangle@2x.jpg';
import { Vehicle } from '../components/Vehicle';
import rrlogo from '../images/rrlogotransparent.jpg';
import appStoreLogo from '../images/available-on-app-store-button-graphic.jpg';
import googleLogo from '../images/background-copy.jpg';
import searchIcon from '../images/search.png';

const styles = require('./DealershipInformation.module.css');

export const DealershipInfo: React.FC = props => {
  const initial = {
    search: '',
    select: ''
  }
  const [dealership, setDealership] = React.useState({});
  const [vehicles, setVehicles] = React.useState([]);
  const [types, setTypes] = React.useState({});
  const [data, setData] = React.useState(initial);
  const [filteredVehicles, setFilteredVehicles] = React.useState([]);
  const { id } = useParams<{ id?: string }>();
  const dealerQuery = `{dealership(id: "${id}") {
    name
    address
    logoUrl
    vehicles {
      id
      type {
        id
        name
        displayName
      }
      name
      address
      imageUrl
      priceCentsPerDay
    }
  }}`;

  function setStates(data: any) {
    setDealership(data.data.dealership);
    setVehicles(data.data.dealership.vehicles.sort(function (a, b) {
      let nameA = a.name.slice(5);
      let nameB = b.name.slice(5);
      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      } else {
        return 0;
      }
    }));
    setFilteredVehicles(data.data.dealership.vehicles.sort(function (a, b) {
      let nameA = a.name.slice(5);
      let nameB = b.name.slice(5);
      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      } else {
        return 0;
      }
    }));

    let obj = {};
    for (let vehicle of data.data.dealership.vehicles) {
      obj[vehicle.type.name] = vehicle.type.displayName;

    }

    setTypes(obj);

  }
  const selectChange = async (val) => {
    if (val.length === 0) {
      setFilteredVehicles(vehicles);
    } else {
      setFilteredVehicles(vehicles.filter(v => v.type.name === val));
      if (data.search.length > 0) {

        setFilteredVehicles(filteredVehicles.filter(v => v.name.toLowerCase().indexOf(data.search.toLowerCase()) !== -1));
      }
    }

  }

  const handleChange = async e => {

    const { name, value } = e.target;

    setData(data => ({
      ...data,
      [name]: value
    }));
    if (e.target.name === 'select') {

      await selectChange(e.target.value);
    }
  }

  const submitSearch = async e => {
    e.preventDefault();

    if (data.select.length > 0) {

      setFilteredVehicles(vehicles.filter(v => v.type.name === data.select));
      if (data.search.length > 0) {

        setFilteredVehicles(filteredVehicles.filter(v => v.name.toLowerCase().indexOf(data.search.toLowerCase()) !== -1));
      }
    } else {
      setFilteredVehicles(vehicles.filter(v => v.name.toLowerCase().indexOf(data.search.toLowerCase()) !== -1));

    }
    setData(initial);

  }

  React.useEffect(() => {

    fetch('https://candidate-api-2020-03.ironforge.co/graphql', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: dealerQuery
      })
    }).then(response => response.json())
      .then(data => setStates(data));
  }, [dealerQuery])

  React.useEffect(() => {

  }, [filteredVehicles])

  return (
    <div className={styles.fullScreen}>


      {dealership && dealership.name ?

        <div>
          <div><img className={styles.rectangle} alt='company background' src={rectangle}></img></div>
          <div className={styles.container}>


            <img className={styles.logoUrl} alt='logo' src={dealership.logoUrl}></img>

            <h1 className={styles.dName}>{dealership.name}</h1>
            <span className={styles.dAddress}>{dealership.address}</span>
            <div className={styles.formsDiv}>
              <form className={styles.inputDiv} onSubmit={submitSearch}>
                <div className={styles.inputDiv}>
                  <img className={styles.searchIcon} src={searchIcon} alt='search icon'></img>
                  <input type='text' placeholder='Search a name...' className={styles.nameInput} value={data.search} name='search' onChange={handleChange}></input>
                </div>
                <span>|</span>
                <div className={styles.selectDiv}>
                  <select className={styles.selectInput} name='select' onChange={handleChange} value={data.select}>
                    <option value=''>All Inventory</option>
                    {Object.keys(types).map(type => <option key={type} value={type}>{types[type]}</option>)}
                  </select>
                </div>
              </form>




            </div>

            <div className={styles.flexContainer}>
              {filteredVehicles.length ? filteredVehicles.map(vehicle =>
                <Vehicle key={vehicle.id} vehicle={vehicle} />


              ) : <p>Cannot get vehicles</p>}
            </div>
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
        </div>

        :
        <h1>Loading...</h1>}

    </div>
  );
};
