import React from 'react'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { sharedState, attachSharedState, detachSharedState} from 'react-helpers/dist/sharedState'
/*
gets something
listen to changes
stop listening to changes
*/
class Editor extends React.Component {
    constructor(props){
        super(props)
        classAutoBind(this)
        // this.updatePageText = this.updatePageText.bind(this)
        // this.state = {
        //     pageText: ''
        // }
        // console.log('Creating...')
        this.state = sharedState() //This sets the initial state to an empty object...
    }
    componentDidMount(){  //This mounts the shared State to the DOM...
        attachSharedState(this) //This runs a this.setState to listen to event to grab shared content in global to the DOM...
    }
    componentWillMount(){ //This does the unlisten to stop errors
        detachSharedState(this)
    }
    updatePageText(e){
        // this.setState({ //This was replaced with the sharedState function...
        sharedState({
            pageText: e.target.value
        })
        // window.pageText = e.target.value
    }
    render(){
        return <div>
            <h1>Editor View</h1>
            <textarea className="form-control"
                onChange={this.updatePageText}>{this.state.pageText}</textarea>
            <p>{this.state.pageText}</p>
        </div>
    }
}

export default Editor
