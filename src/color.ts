export function generateHexColorFromNamespace(namespace:string){
    let hash = 0;
    for (let i = 0; i < namespace.length; i++) {
        hash = namespace.charCodeAt(i) + ((hash << 5) - hash);
    }

    // Convert the hash to an RGB color
    const rgb = (((hash >> 24) & 0xff) << 16) | (((hash >> 16) & 0xff) << 8) | (hash & 0xff);

    const minRGB = 0xaaaaaa;
    const maxRGB = 0xeeeeee;
    const range = maxRGB - minRGB;
    const scaledRGB = minRGB + (rgb % range);

    return '#' + ('00000' + scaledRGB.toString(16)).slice(-6);
}
