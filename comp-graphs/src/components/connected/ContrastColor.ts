import { connect } from 'react-redux';
import ColorPicker from '../ColorPicker';
import { State } from '../../store/reducers/main';
import PixelKind from '../../types/PixelKind';
import { setContrastColor } from '../../store/actions/SetPixelColor';

const ContrastColor = connect(
    ({ rasterConfig: { pixelColor } }: State) => ({
        label: 'Contrast',
        selected: pixelColor[PixelKind.Contrast],
        removeColor1: pixelColor[PixelKind.Background],
        removeColor2: pixelColor[PixelKind.Contour],
        removeColor3: pixelColor[PixelKind.Fill]
    }),
    { onChange: setContrastColor }
)(ColorPicker)

export default ContrastColor;