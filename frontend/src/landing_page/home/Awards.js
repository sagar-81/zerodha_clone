import React from 'react';

function Awards() {
  return (
    <div className='container p-5 mb-5'>
      <div className='row'>
        <div className='col-6'>
          <img alt='' src='media/images/largestBroker.svg' className='img-fluid' />
        </div>
        <div className='col-6'>
          <h1>Largest stock broker in india</h1>
          <p>2+ million zerodha clients contributes to over 15% of all retails order volumes in india daily by trading and investing in :</p>
          <div className='row mt-5'>
            <div className='col-6'>
              <ul>
                <li><p>Futures and Options</p></li>
                <li><p>Commodity derivatives</p></li>
                <li><p>Currency derivatives</p></li>
              </ul>
            </div>
            <div className='col-6'>
              <ul>
                <li><p>Stocks & IPOs</p></li>
                <li><p>Direct mutual funds</p></li>
                <li><p>Bonds and Govt. Security</p></li>
              </ul>
            </div>
          </div>
          <img alt='' style={{ width: '80%' }} src='media/images/pressLogos.png' className='img-fluid'></img>
        </div>
      </div>
    </div>
  );
}

export default Awards;