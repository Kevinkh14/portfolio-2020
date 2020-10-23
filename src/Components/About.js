import React, {Component} from 'react';
import "../css/About.css"

export default class Header extends Component{
    render(){
        return(
            <div className = "about">
                <section>
                    <img className ="prof-pic" src = "https://res.cloudinary.com/kevin14/image/upload/v1600883881/qua1t5qylff3hhmcbpbc.jpg"/>
                </section>
                <section className = 'about-txt'>
                    <h1>About me</h1>
                    <p className ="about-p">Hi, my name is Kevin Hernandez and I am a web developer. I would say that web development has become something that I enjoy doing something about having a bug in your code finding it and fixing it is very satisfying. Coding is very fun but it's not the only thing I enjoy doing. I was introduced to cars at a very early age by my dad and The Fast and The Furious. My dad is a mechanic so he is always talking about cars and you already know that he made me help him work on cars. Working on cars is a lot like coding you try things until you find the solution and if you try to implement something new it might end up breaking everything! I also like playing video games, genres ranging from RPGs, MOBAs, FPS and many more. I have like looking for a better/ more efficient way of doing things. In a MOBA they are always changing the “meta” and you always have to adapt to that “meta” which includes looking for a better way to do things to keep up with some of the better players. So yea that’s a little insight into who Kevin Hernandez is.</p>
                </section>
            </div>
        )
    }
}