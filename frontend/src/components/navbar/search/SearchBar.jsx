import React from 'react'
import Dropdown from './dropdown'

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {filter:"Search", keyword:"", 
        result:[]}
        this.handlefilter = this.handlefilter.bind(this)
        this.handleSearchInput = this.handleSearchInput.bind(this)
    }
    componentDidMount(){
        this.props.fetchTutors()
    }

    handleSearchInput(e){
        
        e.preventDefault();
        this.setState({keyword: e.currentTarget.value})
        let array 
     
      if(this.state.filter === 'Username'){
          array= this.props.tutors.filter(tutor=>{
            //   debugger
            return tutor.username.toLowerCase().includes(e.currentTarget.value.toLowerCase())
            })
      } else if (this.state.filter === "Languages"){
          array = this.props.tutors.filter(tutor => {
              return tutor.languages.toLowerCase().includes(e.currentTarget.value.toLowerCase())
          })
      }
    //    debugger
       this.setState({result: array})
   
    }

    handlefilter(option){

       this.setState({filter: option})
    }

    render(){
        const filterOptions = ["Username", "Languages", "Videos"];
        const result = this.state.result
        return (
            <div className='searchbar-container'>
                {/* <div className='filter-box'> */}
                    {/* <span>{this.state.filter}</span> */}
                    
                    <Dropdown value={this.state.filter}filter={this.handlefilter} options={filterOptions} /> 
                {/* </div> */}
                
                <div className='searchbar-center'>
                    <input className='searchinput' type="text" onChange={this.handleSearchInput} />
                    {result.length >= 1 && <Dropdown filter={this.handlefilter} options={result} />} 
                </div>               
                <div className='magnifying-glass'>
                    <i className="fa-solid fa-magnifying-glass fa-1x"></i>
                </div>
            </div>
        )
    }
    
}

export default SearchBar