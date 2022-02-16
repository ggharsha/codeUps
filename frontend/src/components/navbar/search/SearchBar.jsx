import React from 'react'
import Dropdown from './dropdown'
import SearchResult from './SearchResult'

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = { filter:"Search", keyword:"", result:[] }
        this.handlefilter = this.handlefilter.bind(this)
        this.handleSearchInput = this.handleSearchInput.bind(this)
        this.clearInput = this.clearInput.bind(this);
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
                return tutor.username.toLowerCase().includes(e.currentTarget.value.toLowerCase())
            }).slice(0, 5)
        } else if (this.state.filter === "Languages"){
            array = this.props.tutors.filter(tutor => {
                const languages = tutor.languages.join(',').toLowerCase()
                return languages.includes(e.currentTarget.value.toLowerCase())
            }).slice(0, 5)
        } else if (this.state.filter === "Videos") {
            array = this.props.videos.filter(video => {
                return video.title.toLowerCase().includes(e.currentTarget.value.toLowerCase())
            }).slice(0, 5)
    } 


        
        this.setState({result: array})
   
    }

    handlefilter(option){
       this.setState({filter: option})
    }

    clearInput() {
        this.setState({result: []});
        this.setState({keyword: ""});
        document.getElementsByClassName("searchinput")[0].value = "";
    }

    render(){
        const filterOptions = ["All Fields", "Username", "Languages", "Videos"];
        const result = this.state.result
        const key = this.state.keyword

        let noData;
        let searchIcon;

        if (this.state.keyword.length >=1) {
            searchIcon = <i className="fa-solid fa-x" onClick={this.clearInput}></i>
        } else {
            searchIcon = <i className="fa-solid fa-magnifying-glass fa-1x"></i>
        }
        console.log(result)
 

        return (
            <div className='searchbar-container'>
                <Dropdown value={this.state.filter} filter={this.handlefilter} options={filterOptions} /> 
                
                <div className='searchbar-center'>  
                    <input className='searchinput' type="text" placeholder="Search for tutors, videos, and more..." onChange={this.handleSearchInput} />
                    {noData}
                    {key.length >= 1 && result && <SearchResult openModal={this.props.openModal} search={result} getVideo={this.props.getVideo} fetchUser={this.props.fetchUser} />} 
                </div>               
                <div className='magnifying-glass'>
                    {searchIcon}
                </div>
            </div>
    
        )
    }
    
}

export default SearchBar