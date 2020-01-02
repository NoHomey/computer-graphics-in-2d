import Pixel from "../../types/Pixel";
import PixelKind from "../../types/PixelKind";
import { State } from "../reducers/main";

function pixelKind(state: State, { x, y }: Pixel): PixelKind {
    return state.rasterConfig.rasterDisplay.display.getIn([y, x]);
}

export default pixelKind;