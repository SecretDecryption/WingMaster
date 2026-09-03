export const shopAddress = '70 Erie Avenue, Brantford, ON N3S 2E8, Canada';
const destination = encodeURIComponent(shopAddress);
export const googleDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
export const appleDirectionsUrl = `https://maps.apple.com/?daddr=${destination}`;
export const streetMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(`Wingmaster, ${shopAddress}`)}&t=m&z=16&output=embed&hl=en`;
