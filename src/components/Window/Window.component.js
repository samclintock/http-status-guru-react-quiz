import React from 'react';
import './Window.css';

class Window extends React.Component {
	render() {
        return <div class="window">
            <div class="row">
                <div class="col-4 window-col">
                    <img src={process.env.PUBLIC_URL + '/media/app-icon.png'} alt={'App Icon'} />
                </div>
                <div class="col-4 text-center window-col">
                    Quiz
                </div>
                <div class="col-4 text-right window-icon">
                    <img src={process.env.PUBLIC_URL + '/media/win-icon.png'} alt={'Window Icon'}/>
                </div>
            </div>
        </div>
    };
};

export default Window;