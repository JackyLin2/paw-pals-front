import React, {Fragment} from 'react';
// import Followers from './Followers'
import DogCard from './DogCard'



class DogShowPage extends React.Component {

    

    componentDidMount() {
        this.renderDogShowPage()

    }

    // need to get 

    /// make it so you can't follow urself. and make it so the follow button 
    // changes to a different form if u already follow them. 
    // reRenderFollowers = () => {
    //     this.props.followers.map(follower => <DogCard key={follower.id} {...follower}/> )
    //     console.log('hit')
    // }

    componentWillUpdate(){
        this.renderDogShowPage()
    }



    renderDogShowPage = () => {

            console.log('Show Page props', this.props)
            console.log("dog", this.props.dogs)
            // console.log("followers off dog", this.props.dog.followers)
            // console.log("followers props from A logged in DogP", this.props.follow_id) 
            console.log('loggedinDOg', this.props.loggedInDog)
            // console.log('follow_id in renderDodpr', this.state.follow_id)

        const {name, image, followers, id} = this.props.selected_dog
        const {selected_dog, handleFollow, handleUnfollow, loggedInDog} = this.props
        console.log("followers Show", followers);

        let follow = selected_dog.followers
        let length = selected_dog.followers.length 
        // if (!followers.includes(this.props.loggedInDog.id)) {
            // make conditoinal that puts the beloow conditional inside it and hides button if loggedinDog id === this.state.dog.id
                if (selected_dog) {

                    return (
                        
                        <>
                        <button onClick={() => this.props.history.goBack()} >Go Back</button>
                        { (loggedInDog.id ===  selected_dog.id) ? 
                        
                            <div>
                            <h1>My Profile</h1>
                            <h2>Name: {name}</h2>
                            <img src={image}></img>
                            
                            <hr></hr>
                            
                            <h1>{name}'s Followers</h1>
                            <div className="simple-flex-row index-wrap">
                                {loggedInDog ?  selected_dog.followers.map(follower => <DogCard key={follower.id} {...follower}/>) : "failed"}
                            </div>
                        </div>

                        :
                        <div>
                            <h2>Name: {name}</h2>
                            <img src={image}></img>
                            

                            {followers.find((dog) => dog.id === loggedInDog.id) ?
                            <form>
                                <button onClick={() => handleUnfollow(id)}> Unfollow </button>
                            </form>
                            
                            :
                            <form onSubmit={(event) => handleFollow(event, selected_dog)}>
                                <button > Follow </button>
                            </form>
                
                
                                }
                            
                            <hr></hr>
                            
                            <h1>{name}'s Followers</h1>
                            <div className="simple-flex-row index-wrap">
                                {selected_dog ?  selected_dog.followers.map(follower => <DogCard key={follower.id} {...follower}/>) : "failed"}
                            </div>
                        </div>
                        
                        }
                        
                        </>
                    )
                
                } else if ( (loggedInDog.id ===  selected_dog.id) && follow[length - 1].id === this.props.loggedInDog.id  ) {
                    
                    return (

                        <>
                            <h1> hi </h1>

                        </>
                    )
                } else {
                    return (
                        <>
                            <h3>Go back and select a dog!</h3>
                            <button onClick={() => this.props.history.push('/dogs')}>Dog Index</button>
                        </>
                        ) 
                }
    
    }

    // why does this work? but if i remove any of it it doesn't work anymore?? it seems like it's repeating itself ??

    /// you need to figure out how this will render. 3 container flex box probably 
    

    render(){

        console.log("ShowPage props",this.props)
        console.log("selected_dog", this.props.selected_dog)
        console.log("dog array", this.props.dogs)
        if (this.props.dog ) {

            console.log("i am the selected do found in dogs array", this.props.dogs.find(dog => dog.id === this.props.selected_dog.id))
        }

        

            return  ( this.renderDogShowPage() )
        

        
    }
}
    

export default DogShowPage;
