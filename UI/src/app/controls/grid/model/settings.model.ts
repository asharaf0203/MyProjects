import { PageSettingsModel, SortSettingsModel, SortDescriptorModel } from '@syncfusion/ej2-ng-grids';

export class PagingSettings implements PageSettingsModel { }
export class SortColumnModel implements SortDescriptorModel { }

export class SortingSettings {
    public columns?: SortColumnModel[];
    public allowUnsort?: boolean;
}

