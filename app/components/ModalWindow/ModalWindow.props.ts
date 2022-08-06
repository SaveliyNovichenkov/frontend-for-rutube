import { DetailedHTMLProps, Dispatch, HTMLAttributes, ReactNode, SetStateAction} from "react";


export interface ModalWindowInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>;
    children: ReactNode
    background: boolean
}