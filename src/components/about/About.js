import React from 'react';
import Config from '../../Config';
import Utility from '../../Utility';
import { Link } from 'react-router-dom';

import Banner from '../navigation/banner/Banner';

class About extends React.Component {

    componentDidMount() {
        Utility.setTitle("About");
    }

    getSubtitle() {
        return "?מי אני";
    }

    render() {
        return (
            <div>
                <Banner title="על עצמי" subtitle={this.getSubtitle()} />
                <main className="about">
                    <section className="about-box" align="right"><center><img src="images/DISCORD_IMG.png"/></center><h3><br/><br/>
                    אביב פאר<br/>
					ברוכים הבאים לאתר שלי! <br/>
					שמי אביב,סטודנט להנדסת תכנה ואני שמח להיות המורה הפרטי שלך למתמטיקה.<br/>
					עם תשוקה למספרים והבנה עמוקה של עקרונות המתמטיקה, אני כאן כדי להדריך אותך במסע הלמידה.<br/>
					בתור מורה פרטי למתמטיקה מנוסה. לאורך השנים שחלפו, זכיתי לעזור למספר רב של תלמידים מכל הגילאים והיכולות לגלות את יופיו והעוצמה של המתמטיקה ולהצליח.<br/>
					בין שאתה תלמיד שמתמודד עם קשיים וזקוק ליותר העמקה או תלמיד שרוצה להתמקצע יותר ולהתקדם.<br/>
					אני מחויב להתאים את גישת הלמידה שלי כך שתתאים לצרכים הייחודיים שלך. ביחד, נתמודד עם מושגים מתמטיים מאתגרים ונבנה יסודות חזקים להצלחתך העתידית.<br/>
					הפילוסופיה שלי בהוראת המתמטיקה נובעת מרצון ליצור סביבת למידה תומכת ומעניינת. אני מאמין בגישה שמתמקדת בהבנה נכונה ומהנה של המתמטיקה, ומאפשר<br/>
					אז אם אתה מרגיש שאתה מעוניין לנסות , אנא השאר פרטים <br/>
					
					

<br/></h3></section>

                </main>
            </div>
        );
    }
}

export default About;
