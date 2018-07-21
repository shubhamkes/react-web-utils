
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
}