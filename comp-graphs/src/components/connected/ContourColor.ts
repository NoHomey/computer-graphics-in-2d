import { connect } from 'react-redux';
import ColorPicker from '../ColorPicker';
import { State } from '../../store/reducers/main';
import PixelKind from '../../types/PixelKind';
import { setContourColor } from '../../store/actions/SetPixelColor';

const ContourColor = connect(
    ({ rasterConfig: { pixelColor } }: State) => ({
        label: 'Contour',
        selected: pixelColor[PixelKind.Contour],
        removeColor1: pixelColor[PixelKind.Fill],
        removeColor2: pixelColor[PixelKind.Background]
    }),
    { onChange: setContourColor }
)(ColorPicker)

export default ContourColor;