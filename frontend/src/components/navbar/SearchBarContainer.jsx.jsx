import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import { fetchTutors} from '../../actions/user_actions'

const mapStateToProps = (state) => ({
   
});

const mapDispatch = (dispatch)=>({
   fetchTutors: ()=>dispatch(fetchTutors())
})

export default connect(mapStateToProps,mapDispatch)(SearchBar);