import React, {Fragment} from 'react';
// import Followers from './Followers'
import DogCard from './DogCard'



class DogShowPage extends React.Component {

    

    componentDidMount() {
        this.renderDogShowPage()
        // if (this.props.follow_id) {

        //     console.log("follow_id", this.props.follow_id)
        // }
    }

    // getDogs = () => {
    //     fetch(`${url}/dogs/${this.props.match.params.id}`)
    //         .then(r => r.json())
    //         .then(dog => this.setState({ dog }), this.renderFollowers())
    // }

    
    // renderFollowers = () => {

    //     if (this.state.dog) {
    //         console.log("followers", this.state.dog.followers)
    //         // console.log("followers")
    //         this.state.dog.followers.map(follower => <DogCard key={follower.id} {...follower}/> )
    //         // this.state.dog.followers.map(follower => <DogCard key={follower.id} {...follower}/>)
    //         this.props.setFollowID(this.state.dog)
    //     }

    // }




    


    
    // need to get 

    /// make it so you can't follow urself. and make it so the follow button 
    // changes to a different form if u already follow them. 
    // reRenderFollowers = () => {
    //     this.props.followers.map(follower => <DogCard key={follower.id} {...follower}/> )
    //     console.log('hit')
    // }




    renderDogShowPage = () => {

            console.log('Show Page props', this.props)
            console.log("dog", this.props.dogs)
            // console.log("followers off dog", this.props.dog.followers)
            // console.log("followers props from A logged in DogP", this.props.follow_id) 
            console.log('loggedinDOg', this.props.loggedInDog)
            // console.log('follow_id in renderDodpr', this.state.follow_id)

        const {name, image, followers} = this.props.selected_dog
        const {selected_dog} = this.props
        console.log("followers Show", followers);


        // if (!followers.includes(this.props.loggedInDog.id)) {
            // make conditoinal that puts the beloow conditional inside it and hides button if loggedinDog id === this.state.dog.id
                if (selected_dog) {

                    return (
                        <>
                        <div>
                            <h2>Name: {name}</h2>
                            <img src={image}></img>
                            
                            {followers.find((dog) => dog.id === this.props.loggedInDog.id) ?
                            <form>
                                <button onClick={() => this.props.handleUnfollow(this.props.selected_dog)}> Unfollow </button>
                            </form>
                            
                            :
                            <form onSubmit={(event) => this.props.handleFollow(event, this.props.selected_dog)}>
                                <button > Follow </button>
                            </form>
                
                
                                }
                            
                            <hr></hr>
                            
                            <h1>{name}'s Followers</h1>
                            <div className="simple-flex-row index-wrap">
                                {this.props.selected_dog ?  this.props.selected_dog.followers.map(follower => <DogCard key={follower.id} {...follower}/>) : "failed"}
                            </div>
                        </div>
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
            
        // } else {
            
        // }
    }

    // why does this work? but if i remove any of it it doesn't work anymore?? it seems like it's repeating itself ??

    /// you need to figure out how this will render. 3 container flex box probably 
    

    render(){

        console.log("ShowPage props",this.props)

        if (this.props) {console.log("is dog a prop?",this.props.dog)}

        return  this.props ? this.renderDogShowPage() : <div> No Dog Selected... Try going back to Dogs! </div>

        
    }
}
    

export default DogShowPage;


     {/* {this.renderFollowers()} */}
                
            {/* <Followers loggedInDog={this.props.loggedInDog}/> */}



            // {this.props.selected_dog.followers.find((dog) => dog.id === this.props.loggedInDog.id) ?
            //     <form>
            //         <button onClick={() => this.props.handleUnfollow(this.props.selected_dog)}> Unfollow </button>
            //     </form>
                
            // :
            //     <form onSubmit={(event) => this.props.handleFollow(event, this.props.selected_dog)}>
            //         <button > Follow </button>
            //     </form>
            
            
            // }