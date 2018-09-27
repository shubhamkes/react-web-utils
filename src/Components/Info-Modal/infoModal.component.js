/**
 * Info modal component use for showing information before confimation 
 * which takes description as a props
 */

import React from 'react';
import { ModalManager } from 'drivezy-web-utils/build/Utils';
import './infoModal.component.css';

export default class InfoModal extends React.Component {

    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        const { description } = this.props;//description get from props
        return (
            <div className="info-content" >

                <div className="card info-text">
                    <div className="card-body info-content">
                        {description}
                    </div>
                </div>

                <div className="modal-footer info-footer">
                    <button className="btn btn-success" onClick={() => { ModalManager.closeModal() }}>Ok</button>
                </div>

            </div>
        )
    }
}