import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Menu from './Menu'

const mapStateToProps = () => {
    return {
        // albumId: ,
        // id: ,
        // title: ,
        // url: ,
        // thumbnailUrl ,
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => 
    bindActionCreators(
        {
            // loadPhotos: (page) => dispatch(loadPhotos(page)),
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
