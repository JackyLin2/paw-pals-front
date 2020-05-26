import React from 'react';


class EventsForm extends React.Component {
    state = {
        title: '',
        date: '',
        image: '',
        description: ''
    }


    eventInfo = (event) => {
        const {value} = event.target
        this.setState({[event.target.name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {title, date, image, description} = this.state
        fetch('http://localhost:3000/api/v1/events', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                title, 
                date,
                image,
                description
            })
        })
        .then(this.setState({
            title:'',
            date:'',
            image:'',
            description:''
        }))
    }


    render(){
    
        console.log(this.state)
        return (
            <div>
            <h3>Events Form</h3>
            <form onSubmit={this.handleSubmit}>
            <div>
                <label>Title of Event: </label>
                <input onChange= {this.eventInfo}
                 type="text" name="title" 
                 placeholder="Event Name" 
                 value={this.state.title}
                 />
                 
            </div>
            <div>
                <label>Date: </label>
                <input 
                onChange= {this.eventInfo} 
                name="date"  
                placeholder="Enter Date"
                value={this.state.date}
                 />
            </div>
            <div>
                <label>Image Url: </label>
                <input 
                onChange= {this.eventInfo} 
                name="image" 
                 placeholder="Image"
                 value={this.state.image} 
                 />
            </div>
            <div>
                <label>Description: </label>
                <textarea rows="4" cols="50" 
                name="description" 
                onChange= {this.eventInfo} 
                placeholder="Description" 
                value={this.state.description}
                />
            </div>
            <button 
            type="submit"
            >Create Event</button>
          
        </form>
            </div>
        )
    }
}

export default EventsForm;
/* <div className="simple-flex-row index-wrap"> */