import React from 'react';
import Utility from '../../Utility';
import Select from 'react-select';

import Banner from '../navigation/banner/Banner';

const options = [{value: "5 Point", label: "1 = $1.00 USD"},
                {value: "28 Points", label: "28 = $5.00 USD"},
                {value: "60 Points", label: "60 = $10.00USD"},
                {value: "90 Points", label: "90 = $15.00 USD"},
                {value: "125 Points+D.Status", label: "125+Donor.Status = $20.00 USD"},
                {value: "155 Points", label: "155 = $25.00 USD"},
                {value: "235 Points", label: "235 = $35.00 USD"},
                {value: "260 Points+SD.Status", label: "260+Super.Donor.Status = $40.00 USD"},
                {value: "320 Points", label: "320 = $50.00 USD"},
                {value: "750 Points", label: "750 = $100.00 USD"}];


const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
const groupBadgeStyles = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 8,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
};

const formatGroupLabel = data => (
    <div style={groupStyles}>
        <span>{data.label}</span>
        <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
    );

class Donate extends React.Component {

    componentDidMount() {
        Utility.setTitle("Donate");
    }

    getSubtitle() {
        return "Help My-MS to provide high quality service!";
    }

    render() {
        return (
            <div>
                <Banner title="Donate" subtitle={this.getSubtitle()} />
                <main className="about">

                <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                <center>
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="KT768Y8E7AKGW" />
                <table style={{width: "80%"}}>
                <h3><tr><td><input type="hidden" name="on0" value="Donor Points" />Donor Points</td></tr></h3><tr><td>
                    <Select name="os0" options = {options} formatGroupLabel= {formatGroupLabel} style={{width: "100%"}} /></td></tr>
                </table>
                <br/><br/>
                <input type="hidden" name="currency_code" value="USD" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </center>
                </form>


                {/*<a href='https://www.paypal.me/mapleeuphoria' target="_blank">
                    <center><img src={button} alt="Button" style={{display: 'flex', justifyContent: 'center', width: 500, height: 285}}></img></center>
                    </a>
                    <section className="about-box"><h3>1$ = 1 Donation Point.</h3>{"\n"}
                    <h3>5$ = 6 Donation Points.</h3>{"\n"}
                    <h3>10$ = 12 Donation Points.</h3>{"\n"}
                    <h3>15$ = 17 Donation Points and Donor Medal + 10 bonus.</h3>{"\n"}
                    <h3>20$ = 23 Donation Points + 10 Bonus.</h3>{"\n"}
                    <h3>25$ = 29 Donation Points + 10 Bonus.</h3>{"\n"}
                    <h3>30$ = 35 Donation Points + 10 Bonus.</h3>{"\n"}
                    <h3>35$ = 42 Donation Points + 10 Bonus.</h3>{"\n"}
                    <h3>40$ = 48 Donation Points and Super Donor Medal + 10 Bonus.</h3>{"\n"}
                    <h3>45$ = 52 Donation Points + 15 Bonus.</h3>{"\n"}
                    <h3>50$ = 60 Donation Points + 15 Bonus.</h3>{"\n"}
        <h3>100$ = 150 Donation Points + 15 Bonus.</h3></section>*/}
                </main>
            </div>
        );
    }
}

export default Donate;
