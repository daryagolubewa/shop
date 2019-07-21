import Filter from '../components/filter/filter'
import App from '../components/app/app'
import { showItemsListAC } from '../redux/actions/items-actions'
import connect from 'react-redux/es/connect/connect'

const mapStateToProps = state => ({
    itemsList: state.showItemsListReducer.items
})

const mapDispatchToProps = dispatch => ({
    showItemsList: items => dispatch(showItemsListAC(items))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App, Filter)