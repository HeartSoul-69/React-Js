import propTypes from 'prop-types';

function UserGreeting (props) {
        // if (props.IsLogged) {
        //     return <h2>Welcome {props.Username} Paji </h2>
        // }
        // else {
        //     return <h2>Please Login first </h2>
        // }

        return (props.IsLogged ? <h2>Welcome {props.Username} Paji</h2> :
                         <h2>Please Login krle re Baba</h2> );
        }

        UserGreeting.propTypes = {
            Username : propTypes.string,
            IsLogged : propTypes.bool,
        };

        UserGreeting.defaultProps = {
            Username : "Guest",
            IsLogged : false,
        }

export default UserGreeting;