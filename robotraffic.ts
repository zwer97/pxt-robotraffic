/**
 * Functions to operate the gatorlight sensor
 */

 enum gatorlightType{
	 Lux=1,
	 adcVal=2,
 }

//% color=#f44242 icon="\uf185"
namespace gatorlight {

    // Functions for reading light from the gatorlight in lux or straight adv value

    /**
    * Reads the number
    */
    //% weight=30 blockId="gatorlight_light" block="Get light on pin %pin | in %gatorlightType"
    export function light(pin: AnalogPin, type: gatorlightType): number{
      let ADCVal = pins.analogReadPin(pin)
      switch(type){
        case gatorlightType.Lux: return getLux(ADCVal)
        case gatorlightType.adcVal: return ADCVal
        default: return -11111111
      }
    }

	/**
     * Function used for simulator, actual implementation is in gatorlight.cpp
     */
    //% shim=gatorlight::getLux
    function getLux(ADCVal: number) {
        // Fake function for simulator
        return 0
    }

    }
