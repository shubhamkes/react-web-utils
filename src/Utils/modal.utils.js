import React, { Component } from 'react';
import InfoModal from './../Components/Info-Modal/infoModal.component';

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
}

// const modalManager = new ModalManager();