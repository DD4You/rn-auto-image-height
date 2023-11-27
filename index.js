import { Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image as ExpoImage } from 'expo-image'

const AutoHeightImage = ({ source, width, style }) => {
    const [imgHeight, setImgHight] = useState(0)
    useEffect(() => {
        if (typeof source === 'number') {
            const imgSize = Image.resolveAssetSource(source);
            const aspectRatio = imgSize.width / imgSize.height;
            const calculatedHeight = width / aspectRatio;
            setImgHight(calculatedHeight)
        } else if (typeof source === 'object' && source.uri) {
            Image.getSize(source.uri, (w, height) => {
                const aspectRatio = w / height;
                const calculatedHeight = width / aspectRatio;
                setImgHight(calculatedHeight)
            });
        }
    }, [source])

    return (
        <ExpoImage
            style={[style, {
                width: width,
                height: imgHeight,
                alignSelf: 'center'
            }]}
            source={source}
        />
    )
}

export default AutoHeightImage