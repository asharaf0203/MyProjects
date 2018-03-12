import { IPageTitleAction } from './page-title-action.model';

export interface IPageTitle {
    title: string;
    actions?: IPageTitleAction[];
}
