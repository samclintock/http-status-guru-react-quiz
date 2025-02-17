import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return <footer class="page-footer font-small">
            <div class="text-center py-3">
                Built using <a href="https://reactjs.org/">React</a> by <a href="https://github.com/samclintock/">Steven McLintock</a>
            </div>
        </footer>
    }
}

export default Footer;