import React from 'react'
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import { fetchTutors} from '../../../actions/user_actions'

const mapStateToProps = (state) => ({
   tutors: Object.values(state.user.tutors)
});

const mapDispatch = (dispatch)=>({
   fetchTutors: ()=>dispatch(fetchTutors()),
    //    fetchvideos
})

export default connect(mapStateToProps,mapDispatch)(SearchBar);