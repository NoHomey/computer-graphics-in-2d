import { connect } from 'react-redux';
import ColorPicker from '../ColorPicker';
import { State } from '../../store/reducers/main';
import PixelKind from '../../types/PixelKind';
import { setBackgroundColor } from '../../store/actions/SetPixelColor';

const BackgroundColor = connect(
    ({ rasterConfig: { pixelColor } }: State) => ({
        label: 'Background',
        selected: pixelColor[PixelKind.Background],
        removeColor1: pixelColor[PixelKind.Fill],
        removeColor2: pixelColor[PixelKind.Contour]
    }),
    { onChange: setBackgroundColor }
)(ColorPicker)

export default BackgroundColor;