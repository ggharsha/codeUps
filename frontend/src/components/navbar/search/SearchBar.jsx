import React from 'react'
import Dropdown from './dropdown'
import SearchResult from './SearchResult'

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
    
        if (this.state.filter === "Search" || this.state.filter === "All Fields") {
            array = []
            
            const tutorUsernameMatch = this.props.tutors.filter(tutor=>{
                return tutor.username.toLowerCase().includes(e.currentTarget.value.toLowerCase())
            })

            const tutorLanguagesMatch = this.props.tutors.filter(tutor => {
                const languages = tutor.languages.join(',').toLowerCase()
                return languages.includes(e.currentTarget.value.toLowerCase())
            })

            const temp = array.concat(tutorUsernameMatch, tutorLanguagesMatch)
            temp.forEach(result=> {
                if(!array.includes(result)){
                    array.push(result)
                }
            })

        } else if(this.state.filter === 'Username'){
          array = this.props.tutors.filter(tutor=>{
            //   debugger
            return tutor.username.toLowerCase().includes(e.currentTarget.value.toLowerCase())
            })
        } else if (this.state.filter === "Languages"){
          array = this.props.tutors.filter(tutor => {
              const languages = tutor.languages.join(',').toLowerCase()
              return languages.includes(e.currentTarget.value.toLowerCase())
          })
    } 
        console.log(array)
       this.setState({result: array})
   
    }

    handlefilter(option){
       this.setState({filter: option})
    }

    render(){
        const filterOptions = ["All Fields", "Username", "Languages", "Videos"];
        const result = this.state.result
        return (
            <div className='searchbar-container'>
                {/* <div className='filter-box'> */}
                    {/* <span>{this.state.filter}</span> */}
                    
                    <Dropdown value={this.state.filter}filter={this.handlefilter} options={filterOptions} /> 
                {/* </div> */}
                
                <div className='searchbar-center'>
                    <input className='searchinput' type="text" placeholder="Search for tutors, videos, and more..." onChange={this.handleSearchInput} />
                    {result.length >= 1 && <SearchResult search={result} />} 
                </div>               
                <div className='magnifying-glass'>
                    <i className="fa-solid fa-magnifying-glass fa-1x"></i>
                </div>
            </div>
        )
    }
    
}

export default SearchBar