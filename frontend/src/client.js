import sanityClient from '@sanity/client'
import imageBuilder from '@sanity/image-url'

console.log('sanity id : ' + process.env.REACT_APP_SANITY_ID)
export const client = sanityClient({
    projectId : process.env.REACT_APP_SANITY_ID,
    dataset : 'production',
    apiVersion : '2022-01-21',
    useCdn : true,
    token : process.env.REACT_APP_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true
});

const builder = imageBuilder(client);

export const urlFor = (source)=> builder.image(source);