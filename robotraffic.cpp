#include "pxt.h"
#include <cstdint>
#include <math.h>

using namespace pxt;

namespace gatorlight {

    uint16_t getLux(int16_t ADCVal) {

        return ADCVal * .976;
    }

}
