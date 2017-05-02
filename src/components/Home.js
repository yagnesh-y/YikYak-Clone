import React, {Component} from 'react'
import Zones from './Zones'
import Comments from './Comments'

class Home extends Component {
    render() {
        return (
            <div>
                YakYik
                <div className="row">
                    <div className="col-xs-8">
                        <Zones />
                    </div>
                    <div className="col-xs-4">
                        <Comments />
                    </div>
            </div>
            </div>
        )
    }
}

export default Home