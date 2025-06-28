import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#eee" }}>
      <div className="container border-top mt-5 p-4">
        <div className="row">
          <div className="col">
            <img src="media/images/logo.svg" alt="Logo" height="20" />
            <p>
              © 2010 - 2025, Zerodha Broking Ltd. <br /> All rights reserved.
            </p>
            <div className="d-flex gap-3 mb-2">
              <i
                className="fs-4 fa fa-twitter"
                style={{ color: "#666" }}
                aria-hidden="true"
              ></i>
              <i
                className="fs-4 fa fa-facebook"
                style={{ color: "#666" }}
                aria-hidden="true"
              ></i>
              <i
                className="fs-4 fa fa-instagram"
                style={{ color: "#666" }}
                aria-hidden="true"
              ></i>
              <i
                className="fs-4 fa fa-linkedin-square"
                style={{ color: "#666" }}
                aria-hidden="true"
              ></i>
            </div>

            <div className="border-bottom my-2"></div>

            <div className="d-flex gap-3">
              <i
                className="fs-4 fa fa-youtube-play"
                style={{ color: "#666" }}
                aria-hidden="true"
              ></i>
              <i
                className="fs-4 fa fa-whatsapp"
                style={{ color: "#666" }}
                aria-hidden="true"
              ></i>
              <i
                className="fs-4 fa fa-share-alt-square"
                style={{ color: "#666" }}
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div className="col">
            <p>Account</p>
            <p href="/">Open demat account</p>
            <p href="/">Minor demat account</p>
            <p href="/">NRI demat account</p>
            <p href="/">Commodity</p>
            <p href="/">Dematerialisation</p>
            <p href="/">Fund transfer</p>
            <p href="/">MTF</p>
            <p href="/">Referral program</p>
          </div>
          <div className="col">
            <p>Support</p>
            <p href="/">Contact us</p>
            <p href="/">Support portal</p>
            <p href="/">How to file a complaint?</p>
            <p href="/">Status of your complaints</p>
            <p href="/">Bulletin</p>
            <p href="/">Circular</p>
            <p href="/">Z-Connect blog</p>
            <p href="/">Downloads</p>
          </div>
          <div className="col">
            <p>Company</p>
            <p href="/">About</p>
            <p href="/">Philosophy</p>
            <p href="/">Press & media</p>
            <p href="/">Careers</p>
            <p href="/">Zerodha Cares (CSR)</p>
            <p href="/">Zerodha.tech</p>
            <p href="/">Open source</p>
          </div>
          <div className="col">
            <p>Quick links</p>
            <p href="/">Upcoming IPOs</p>
            <p href="/">Brokerage charges</p>
            <p href="/">Market holidays</p>
            <p href="/">Economic calendar</p>
            <p href="/">Calculators</p>
            <p href="/">Markets</p>
            <p href="/">Sectors</p>
          </div>
        </div>
        <div className="p-5 text-small text-muted">
          <p className="container" style={{ color: "#666", fontSize: "11px" }}>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to
            <a href="/"> complaints@zerodha.com</a> , for DP related to{" "}
            <a href="/">dp@zerodha.com</a>. Please ensure you carefully read the
            Risk Disclosure Document as prescribed by SEBI | ICF{" "}
          </p>

          <p className="container" style={{ color: "#666", fontSize: "11px" }}>
            Procedure to file a complaint on <a href="/">SEBI SCORES</a>:
            Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances{" "}
          </p>

          <p className="container" style={{ color: "#666", fontSize: "11px" }}>
            <a href="/">
              Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </a>
          </p>
          <p className="container" style={{ color: "#666", fontSize: "11px" }}>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p className="container" style={{ color: "#666", fontSize: "11px" }}>
            {" "}
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p className="container" style={{ color: "#666", fontSize: "11px" }}>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services,
            <a href="/"> please create a ticket here.</a>
          </p>
        </div>
        <div className="container d-flex justify-content-around flex-wrap text-center py-3">
          <a style={{ color: "#666", fontSize: "14px" }} href="/">
            NSE
          </a>
          <a style={{ color: "#666", fontSize: "14px" }} href="/">
            BSE
          </a>
          <a style={{ color: "#666", fontSize: "14px" }} href="/">
            MCX
          </a>
          <a style={{ color: "#666", fontSize: "14px" }} href="/">
            Terms & conditions
          </a>
          <a style={{ color: "#666", fontSize: "14px" }} href="/">
            Policies & procedures
          </a>
          <a style={{ color: "#666", fontSize: "14px" }} href="/">
            Privacy policy
          </a>
          <a style={{ color: "#666", fontSize: "14px" }} href="/">
            Disclosure{" "}
          </a>
          <a style={{ color: "#666", fontSize: "14px" }} href="/">
            For investor's attention{" "}
          </a>
          <a style={{ color: "#666", fontSize: "14px" }} href="/">
            Investor charter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
