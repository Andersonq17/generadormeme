import React, {Component} from 'react'

class MemeGenerator extends Component{
    constructor(){
        super()
        this.state={
            topText:"",
            bottomText:"",
            randomImage:"https://t3.kn3.net/taringa/4/1/E/2/0/5/elmemorioso/580.jpg",
            todosLosMemes : []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleGenerator = this.handleGenerator.bind(this)
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response=> response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({ todosLosMemes : memes })
        })
    }

    handleChange(event){
        const {name,value} = event.target
        this.setState({ [name] : value })
        
    }

    handleGenerator(event){
        event.preventDefault()
        const randNum= Math.floor(Math.random() * this.state.todosLosMemes.length)
        const randMeme= this.state.todosLosMemes[randNum].url
        this.setState({ randomImage : randMeme})
    }

    render(){
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleGenerator}>
                    <input 
                    type="text"
                    name="topText"
                    placeholder="Texto de arriba"
                    value={this.state.topText}
                    onChange={this.handleChange} />

                    <input 
                    type="text"
                    name="bottomText"
                    placeholder="Texto de abajo"
                    value={this.state.bottomText}
                    onChange={this.handleChange} />

                    <button type="submit">Generar</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImage} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
                
            </div>
        )
    }
}
export default MemeGenerator