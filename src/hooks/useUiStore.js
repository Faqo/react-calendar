import { useSelector, useDispatch } from 'react-redux';
import { onCloseDateModal, onOpenDateModal } from '../store';

export const useUiStore = () => {

    const dispatch = useDispatch();

    const { 
        isDateModalOpen 
    } = useSelector(state => state.ui);

    const openDateModal = () => {
        dispatch(onOpenDateModal());
    };

    const closeDateModal = () =>{
        dispatch(onCloseDateModal());
    }

    return {
        //propiedades
        isDateModalOpen,

        //metodos
        openDateModal,
        closeDateModal
    }
}