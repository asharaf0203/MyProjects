 

export class NumericBoxSettings {
  constructor(
  public  min: number,
  public  max: number,
     optionalObj?: any
  ) {
    if (optionalObj) {
      const defaults = {
        currency: 'USD',
        step: 1,
        format: 'n2',
        strictMode: true,
        showSpinButton: false,
        validateDecimalOnType: false,
        decimalsPoint: 4
      };
      const mergedConfig = { ...defaults, ...optionalObj };

      this.currency = mergedConfig.currency;
      this.step = mergedConfig.step;
      this.format = mergedConfig.format;
      this.strictMode = mergedConfig.strictMode;
      this.showSpinButton = mergedConfig.showSpinButton;
      this.validateDecimalOnType = mergedConfig.validateDecimalOnType;
      this.decimalsPoint = mergedConfig.decimalsPoint;
    }
  }

  public step: number;
  public currency: string;
  public format: string;
  public showSpinButton: boolean;
  public strictMode: boolean;
  public validateDecimalOnType: boolean;
  public decimalsPoint: number;
}
