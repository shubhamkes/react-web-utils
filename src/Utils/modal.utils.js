import React, { Component } from 'react';
import InfoModal from './../Components/Info-Modal/infoModal.component';
import SummaryModal from './../Components/Summary-Modal/summaryModal.component';

export class ModalManager {
    _currentGlobalLoader = null;
    static registerModal(ref) {
        this._currentGlobalLoader = ref;
    }
    static openModal({ ...args }) {
        if (this._currentGlobalLoader) {
            this._currentGlobalLoader.openModal({ ...args });
        }
    }
    static closeModal({ ...args }) {
        this._currentGlobalLoader.closeModal({ ...args });
    }
    static info({ description, headerText }) {
        ModalManager.openModal({
            headerText: headerText,
            modalBody: () => <InfoModal description={description} />
        })
    }
    static summary({ title, data }) {
        ModalManager.openModal({
            headerText: title || 'SUMMARY MODAL',
            modalBody: () => <SummaryModal data={data} />
        })
    }
}

// const modalManager = new ModalManager();