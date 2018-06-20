import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Nav (props) {
    console.log(props)
    return (
            <div>
                <Link to='/dashboard'>
                    <button className=''>Home</button>
                </Link>
                <Link to='/post'>
                    <button className=''>New Post</button>
                </Link>
                <Link to='/'>
                    <button className=''>Logout</button>
                </Link>
                <h2>{props.username}</h2>
                <img src={props.profilePicture} alt="" width='200px'/>
            </div>
        )
    }
    
    function mapStateToProps(state){
        
        return {
            username: state.username,
            profilePicture: state.profilePicture
        }
    }
    
export default connect(mapStateToProps, {})(Nav)

