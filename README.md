# codeUps

**--> Live [here](https://codeups.herokuapp.com/) <--**

![codeUps.gif](https://github.com/ggharsha/codeUps/blob/main/readme_assets/splash_page.gif)

### Team members
* Jing Jing Zhang: Backend Lead
* Perry Xie: Frontend Lead
* Michelle Huang: Design Lead and Flex
* Harsha Bandi: Team Lead and Flex

### Background
codeUps is a code-mentorship platform built for tutors and students to connect with one another in a dedicated, code-driven setting. Users can register and search for the right tutor for them, as tutors advertise their services with examples of their work. The site features an animated splash page, different features for students and tutors, an interactive index page, and customizable profile pages. Additionally, the website contains a filtered search functionality, where users can search tutors and videos by name, title, or language depending on the applied filter. The website is structured with React best practices in mind, so components are broken down into their smallest possible pieces, allowing for fast rendering and response time.

### Technologies used
* MongoDB for building a database
* Mongoose ODM for validations and managing data
* Node.js / Express.js for backend
* React.js / Redux.js for frontend
* HTML5 for building out skeleton elements
* CSS3 for styling the project
* AWS for image and video hosting
* Heroku for website hosting
* Git / GitHub for cooperative workflow between team members

### Code snippets

![search.gif](https://raw.githubusercontent.com/ggharsha/codeUps/main/readme_assets/reviews.gif)

```js
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
```

The `handleSearchInput()` function dynamically checks the filter inputted by the user and uses it to cater the search from the frontend. If not filter is present, then the function will return Tutors sorted by username and language. If a filter is present, the function will use that instead. The "All Fields" search category serves as a reset for the state, and can be used interchangably with no search filter in case the user wants to search by filter, but decides to change back to searching without a filter.

![review.gif](https://raw.githubusercontent.com/ggharsha/codeUps/main/readme_assets/reviews.gif)

### Future plans
* Potentially integrating video calling with socket.io into app
* Adding inbox to within app rather than through email
