import { NumberFormat, DateFormat } from './format-options.model';

export class GridColumn {
  constructor(
    public field: string,
    public headerText: string,
    optionalObj?: any
  ) {

    const defaults = {
      uid: null,
      width: null,
      minWidth: null,
      maxWidth: null,
      textAlign: null,
      disableHtmlEncode: null,
      type: null,
      format: null,
      visible: null,
      template: null,
      headerTemplate: null,
      isFrozen: false,
      allowSorting: true,
      allowResizing: true,
      allowFiltering: true,
      allowGrouping: true,
      showColumnMenu: true,
      enableGroupByFormat: true,
      allowEditing: true,
      displayAsCheckBox: false
    };

    const mergedConfig = { ...defaults, ...optionalObj };

    this.uid = mergedConfig.uid;
    this.width = mergedConfig.width;
    this.minWidth = mergedConfig.minWidth;
    this.maxWidth = mergedConfig.maxWidth;
    this.textAlign = mergedConfig.textAlign;
    this.disableHtmlEncode = mergedConfig.disableHtmlEncode;
    this.type = mergedConfig.type;
    this.format = mergedConfig.format;
    this.visible = mergedConfig.visible;
    this.template = mergedConfig.template;
    this.headerTemplate = mergedConfig.headerTemplate;
    this.isFrozen = mergedConfig.isFrozen;
    this.allowSorting = mergedConfig.allowSorting;
    this.allowResizing = mergedConfig.allowResizing;
    this.allowFiltering = mergedConfig.allowFiltering;
    this.allowGrouping = mergedConfig.allowGrouping;
    this.showColumnMenu = mergedConfig.showColumnMenu;
    this.enableGroupByFormat = mergedConfig.enableGroupByFormat;
    this.allowEditing = mergedConfig.allowEditing;
    this.displayAsCheckBox = mergedConfig.displayAsCheckBox;
  }

  public uid: string;
  public width: string | number;
  public minWidth: string | number;
  public maxWidth: string | number;
  public textAlign: string;
  public disableHtmlEncode: boolean;
  public type: string;
  public format: string | NumberFormat | DateFormat;
  public visible: boolean;
  public template: string;
  public headerTemplate: string;
  public isFrozen: boolean;
  public allowSorting: boolean;
  public allowResizing: boolean;
  public allowFiltering: boolean;
  public allowGrouping: boolean;
  public showColumnMenu: boolean;
  public enableGroupByFormat: boolean;
  public allowEditing: boolean;
  public displayAsCheckBox: boolean;
}
