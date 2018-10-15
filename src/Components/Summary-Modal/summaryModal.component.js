import React, { Component } from 'react';
import { ModalManager } from 'drivezy-web-utils/build/Utils';
import './summaryModal.component.scss';

export default class SummaryModal extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className='summary-modal-wrapper'>
                {/* <div className='summary-modal-header'>
                    {this.props.title || 'SUMMARY MODAL'}
                </div> */}
                <div className='data-wrapper'>
                {
                    Object.keys(data).map((rowContent, key) => {
                        <div className='data-row row' key={key}>
                            <div className='col-sm-6 title'>
                                {rowContent}
                            </div>
                            <div className='col-sm-6 value'>
                                {data[rowContent]}
                            </div>
                        </div>
                    })
                }
                </div>
                <div className='summary-modal-footer'>
                    <div className='buttons'>
                        <button className='btn btn-sm btn-default' onClick={() => ModalManager.closeModal()}>Close</button>
                    </div>
                </div>
            </div>
        )
    }
}