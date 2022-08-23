import { ILeague } from './League';
import { IMembre } from './Membre';
export interface ILabel {
    id: string; // Edit
    name: string;
    funds: number;
    league: ILeague;

    // Add
    img?: string;
    year?: number;
    membres: IMembre[];

  }