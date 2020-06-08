import React , {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/profile.jpg';
import Title from './Title';


// class RegularClas{};
// class ComponentClass extends Component{};

// const regularclassinstance = new RegularClas();
// const componentclassinstance = new ComponentClass();

// console.log('regularclassinstance',regularclassinstance);
// console.log('componentclassinstance',componentclassinstance);

class App extends Component{
    state = {displayBio: false};
//     constructor(){
//         super();
// this.state ={ displayBio: false};
// console.log('Component this',this);
// this.toggleDisplayBio=this.toggleDisplayBio.bind(this);
//     }
toggleDisplayBio= () =>
{
    this.setState({displayBio: !this.state.displayBio});
}
render()
{


    return (
        <div>
            <img src={profile} alt='profile-pic' className='profile'/>
            <h1>Hello!</h1>
            <p>My name is abhishek. </p>
     <Title/>   
            <p>I'm always looking forward to working on meaningful projects. </p>
            {
              this.state.displayBio ?(<div>
                <p>I live in mumbai </p>
                <p>
                    My Favourite language is javascript, react is awsome.
                </p>
                <p>
                    Besides Coding, I aslo love music, playing
                    video games, play football.
                </p>
                <button onClick={this.toggleDisplayBio}>Show less</button>
            </div>

            ) : (
                <div><button onClick={this.toggleDisplayBio}>Read more </button> </div>

                )
            }
            <hr/>
            <Projects/>
            <hr/>
            <SocialProfiles/>
        </div>


    )
}
}

export default App;