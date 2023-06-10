import React from 'react';

import Axios from 'axios';

import Rankingslist from '../../components/rankings/rankingslist/Rankingslist';

class Rankings extends React.Component {
	
    constructor(props) {
        super(props);
        this.state = {
            data: {
                data: [],
                error: []
            }
        };
    }
	test(){
		
		var x=true;
		if(x){
				return <div>Hi</div>;
		}else{
				return <div>Bye</div>;
		}
	}

    isAdmin(params) {
			let x=this;
			
			
		    Axios.get('isAdmin').then(response => {
            console.log(response.data);
            console.log(response.data.success);
			// this.setState({data: response.data});
            if (response.data.success) {
				console.log("Entered True");
					x=true;
					
            } else {
				console.log("Entered False");
					x=false;
            }
			console.log(x);
        });
		
			
				if(this.state.data.success){
				return <div> <Rankingslist params={params} pagination={true} category={false} /></div>;
		}else{
				return <div></div>;
		}
		
    }


    render() {
		 
        var params = this.props.match.params;


		return(
		
		            <div>
					
                	
                <main className="rankings" align="right">
						{this.isAdmin(params)}
				<div> <Rankingslist params={params} pagination={false} category={false} /></div>

			
                    

                </main>
								                  <div>
				 
				  
				 
				  </div>
            </div>
		
		);

    }
}

export default Rankings;
